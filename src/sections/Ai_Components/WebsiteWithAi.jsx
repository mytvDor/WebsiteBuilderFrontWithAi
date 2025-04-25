import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CloudUpload,
  ExternalLink,
  Play,
  Download,
  Code,
  FileCode,
  FileText,
  FileCodeIcon as FileCss,
} from "lucide-react";
import JSZip from "jszip";
import AiChatComponent from "./AiChatComponent";
import { Toaster, toast } from "react-hot-toast";

const files = [
  {
    name: "index.html",
    language: "html",
    icon: <FileText className="w-4 h-4 mr-2" />,
  },
  {
    name: "style.css",
    language: "css",
    icon: <FileCss className="w-4 h-4 mr-2" />,
  },
  {
    name: "script.js",
    language: "javascript",
    icon: <FileCode className="w-4 h-4 mr-2" />,
  },
];

export default function WebsiteWithAi() {
  const [activeFile, setActiveFile] = useState(files[0].name);
  const [code, setCode] = useState({
    "index.html": "",
    "style.css": "",
    "script.js": "",
  });
  const [output, setOutput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [liveUrl, setLiveUrl] = useState("");
  const iframeRef = useRef(null);

  const handleEditorChange = (value) => {
    setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
  };

  const generateCode = async () => {
    if (!prompt.trim()) {
      setOutput("Please enter a prompt first.");
      return;
    }

    setIsGenerating(true);
    setOutput("Generating code...");
    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      if (!response.ok) {
        setOutput(`Error: ${response.statusText}`);
        return;
      }
      const data = await response.json();
      setCode({
        "index.html": data.html || "",
        "style.css": data.css || "",
        "script.js": data.javascript || data.js || "",
      });
      setActiveFile("index.html");
      setOutput("Code generated successfully.");
    } catch (error) {
      console.error("Error generating code:", error);
      setOutput("Error generating code.");
    }
    setIsGenerating(false);
  };

  const deployToNetlify = async () => {
    setIsDeploying(true);
    setOutput("Deploying to Netlify...");

    try {
      const formData = new FormData();

      // Ensure `code` is defined and is an object mapping filenames to content
      if (!code || typeof code !== "object") {
        throw new Error("Invalid code object");
      }
      formData.append("userId", localStorage.getItem("email")); // Add userId to FormData

      // Append each file in `code`
      Object.keys(code).forEach((filename) => {
        const fileContent = code[filename];
        if (typeof fileContent !== "string") {
          console.error(`Invalid content for file: ${filename}`);
          return;
        }
        const file = new Blob([fileContent], { type: getMimeType(filename) });
        formData.append("files", file, filename);
      });
      // Send to backend
      const response = await fetch("http://localhost:8000/deploy-ai-site", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setOutput(`Error: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      if (data?.liveUrl) {
        setLiveUrl(data.liveUrl);
        setOutput(
          `Deployed successfully: <a href="${data.liveUrl}" target="_blank" class="text-primary hover:underline">${data.liveUrl}</a>`
        );

        toast.success("Website deployed successfully!");
      } else {
        setOutput("Error deploying or invalid response.");
      }
    } catch (error) {
      console.error("Error deploying:", error);
      setOutput("Error deploying.");
    }

    setIsDeploying(false);
  };

  // Function to determine the MIME type based on file extension
  const getMimeType = (filename) => {
    if (filename.endsWith(".html")) return "text/html";
    if (filename.endsWith(".css")) return "text/css";
    if (filename.endsWith(".js")) return "application/javascript";
    return "application/octet-stream"; // Default type
  };

  const runCode = () => {
    try {
      // Create a blob with the HTML that includes the CSS and JS
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code["style.css"]}</style>
        </head>
        <body>
          ${code["index.html"]}
          <script>${code["script.js"]}</script>
        </body>
        </html>
      `;

      // Create an iframe or update existing one
      if (iframeRef.current) {
        const iframeDoc = iframeRef.current.contentDocument;
        if (iframeDoc) {
          iframeDoc.open();
          iframeDoc.write(htmlContent);
          iframeDoc.close();
          setOutput("Code running in the preview below:");
        }
      } else {
        // Create a data URL for the HTML content
        const blob = new Blob([htmlContent], { type: "text/html" });
        const url = URL.createObjectURL(blob);

        // Show iframe in the output area
        setOutput(
          `<iframe ref="iframeRef" src="${url}" style="width:100%; height:300px; border:none;"></iframe>`
        );
      }
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("Error running code.");
    }
  };

  const openInNewTab = () => {
    // If no live URL exists, create a temporary page from the current code
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>${code["style.css"]}</style>
        </head>
        <body>
          ${code["index.html"]}
          <script>${code["script.js"]}</script>
        </body>
        </html>
      `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  };

  const downloadZip = async () => {
    try {
      setOutput("Preparing download...");

      // Create a new JSZip instance
      const zip = new JSZip();

      // Add all files to the ZIP
      Object.keys(code).forEach((filename) => {
        zip.file(filename, code[filename]);
      });

      // Generate the ZIP file
      const content = await zip.generateAsync({ type: "blob" });

      // Create a download link
      const url = URL.createObjectURL(content);
      const link = document.createElement("a");
      link.href = url;
      link.download = "website-files.zip";

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setOutput("Files downloaded as ZIP successfully.");
    } catch (error) {
      console.error("Error creating ZIP:", error);
      setOutput("Error creating ZIP file for download.");
    }
  };

  return (
    <div className="bg-zinc-900">
      {" "}
      <div className="container mx-auto p-4 max-w-7xl ">
        <Toaster position="top-center" />

        <Card className="mb-6 bg-zinc-800 text-lime-400 border-0">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                <Code className="h-6 w-6 text-lime-400" />
                <h2 className="text-2xl font-bold">AI Website Builder</h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Describe the website you want to create..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-grow text-white bg-zinc-800 border-zinc-600 "
                />
                <Button
                  onClick={generateCode}
                  disabled={isGenerating}
                  className="whitespace-nowrap"
                >
                  {isGenerating ? "Generating..." : "Generate Code"}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2 ">
                <Button
                  variant="outline"
                  onClick={runCode}
                  className="flex items-center text-zinc-800 bg-lime-400 border-0"
                >
                  <Play className="mr-2 h-4 w-4" /> Run
                </Button>
                <Button
                  variant="outline"
                  onClick={deployToNetlify}
                  disabled={isDeploying}
                  className="flex items-center text-zinc-800 bg-lime-400 border-0"
                >
                  <CloudUpload className="mr-2 h-4 w-4" />
                  {isDeploying ? "Deploying..." : "Deploy"}
                </Button>
                <Button
                  variant="outline"
                  onClick={openInNewTab}
                  className="flex items-center text-zinc-800 bg-lime-400 border-0"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Preview
                </Button>
                <Button
                  variant="outline"
                  onClick={downloadZip}
                  className="flex items-center text-zinc-800 bg-lime-400 border-0"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>

              {liveUrl && (
                <div className="mt-2">
                  <Badge variant="outline" className="text-sm">
                    Live URL:{" "}
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline ml-1"
                    >
                      {liveUrl}
                    </a>
                  </Badge>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-md border-none ">
            <Tabs
              value={activeFile}
              onValueChange={setActiveFile}
              className="w-full "
            >
              <div className="bg-muted/50 p-1 rounded-t-lg ">
                <TabsList className="w-full grid grid-cols-3">
                  {files.map((file) => (
                    <TabsTrigger
                      key={file.name}
                      value={file.name}
                      className="flex items-center justify-center"
                    >
                      {file.icon}
                      {file.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              {files.map((file) => (
                <TabsContent
                  key={file.name}
                  value={file.name}
                  className="p-0 m-0"
                >
                  <div className="border-0 rounded-b-lg overflow-hidden ">
                    <Editor
                      height="500px"
                      language={file.language}
                      value={code[file.name] || ""}
                      onChange={handleEditorChange}
                      theme="vs-dark"
                      options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        wordWrap: "on",
                        lineNumbers: "on",
                        folding: true,
                        scrollBeyondLastLine: false,
                      }}
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </Card>

          <Card className="shadow-md border-none ">
            <CardContent className="p-0">
              <div className="bg-muted/50 p-3 rounded-t-lg border-b">
                <h3 className="text-lg font-semibold flex items-center">
                  <Play className="w-4 h-4 mr-2" /> Preview
                </h3>
              </div>
              <div className="p-4 bg-zinc-100 rounded-b-lg min-h-[500px] max-h-[500px] overflow-auto">
                <div
                  className="text-black mb-4"
                  dangerouslySetInnerHTML={{ __html: output }}
                />
                <iframe
                  ref={iframeRef}
                  className="w-full h-[400px] border rounded"
                  style={{
                    display: output.includes("preview below")
                      ? "block"
                      : "none",
                  }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <AiChatComponent />
      </div>
    </div>
  );
}
