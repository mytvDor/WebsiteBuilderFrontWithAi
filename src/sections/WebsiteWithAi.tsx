// import { useState, useEffect } from "react";
// import Editor from "@monaco-editor/react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { FaPlay, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
// import JSZip from "jszip";

// const files = [
//   { name: "index.html", language: "html" },
//   { name: "styles.css", language: "css" },
//   { name: "script.js", language: "javascript" },
// ];

// type CodeState = {
//   [key: string]: string;
// };

// export default function WebsiteWithAi() {
//   const [activeFile, setActiveFile] = useState(files[0].name);
//   const [code, setCode] = useState<CodeState>({
//     "index.html": "",
//     "styles.css": "",
//     "script.js": "",
//   });
//   const [output, setOutput] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isRunning, setIsRunning] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const [blobUrl, setBlobUrl] = useState<string | null>(null);

//   const handleEditorChange = (value: string | undefined) => {
//     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
//     saveCode(value || "");
//   };

//   const generateCode = async () => {
//     setIsGenerating(true);
//     setOutput("Generating code...");
//     try {
//       const response = await fetch("http://localhost:8000/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt }),
//       });
//       if (!response.ok) {
//         setOutput(`Error: ${response.statusText}`);
//         return;
//       }
//       const data = await response.json();
//       if (data) {
//         setCode({
//           "index.html": data.html || "",
//           "styles.css": data.css || "",
//           "script.js": data.javascript || "",
//         });
//         setActiveFile("index.html");
//         setOutput("Code generated successfully.");
//       } else {
//         setOutput("Invalid response or no data returned.");
//       }
//     } catch (error) {
//       console.error("Error generating code:", error);
//       setOutput("Error generating code.");
//     }
//     setIsGenerating(false);
//   };

//   const runCode = async () => {
//     setIsRunning(true);
//     setOutput("Running code...");
//     const fullHtml = `
//       <html>
//         <head>
//           <style>${code["styles.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//       </html>
//     `;
//     const blob = new Blob([fullHtml], { type: "text/html" });
//     const url = URL.createObjectURL(blob);
//     setBlobUrl(url);
//     setOutput(
//       `<iframe src="${url}" style="width:100%;height:300px;border:0;"></iframe>`
//     );
//     setIsRunning(false);
//   };

//   const saveCode = async (codeContent: string) => {
//     setIsSaving(true);
//     try {
//       const response = await fetch("/api/save", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(code),
//       });
//       if (!response.ok) {
//         setOutput(`Error: ${response.statusText}`);
//         return;
//       }
//       const data = await response.json();
//       if (data && data.message) {
//         setOutput("Files saved successfully.");
//       } else {
//         setOutput("Error saving files or invalid response.");
//       }
//     } catch (error) {
//       console.error("Error saving files:", error);
//       setOutput("Error saving files.");
//     }
//     setIsSaving(false);
//   };

//   const downloadCode = () => {
//     const zip = new JSZip();
//     for (const [filename, content] of Object.entries(code)) {
//       zip.file(filename, content);
//     }
//     zip.generateAsync({ type: "blob" }).then((blob) => {
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "code.zip";
//       a.click();
//       URL.revokeObjectURL(url);
//     });
//   };

//   const openInNewTab = () => {
//     if (blobUrl) {
//       window.open(blobUrl, "_blank");
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (blobUrl) {
//         URL.revokeObjectURL(blobUrl);
//       }
//     };
//   }, [blobUrl]);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="mb-4 flex flex-wrap items-center space-x-4 gap-4">
//         <Input
//           type="text"
//           placeholder="Enter your prompt"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           className="flex-grow text-black"
//         />
//         <Button onClick={generateCode} disabled={isGenerating}>
//           {isGenerating ? "Generating..." : "Generate"}
//         </Button>
//         <Button onClick={runCode} disabled={isRunning}>
//           <FaPlay /> {isRunning ? "Running..." : ""}
//         </Button>
//         <Button onClick={openInNewTab} disabled={!blobUrl}>
//           <FaExternalLinkAlt />
//         </Button>
//         <Button onClick={downloadCode}>
//           <FaDownload />
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="border rounded flex-1">
//           <Tabs value={activeFile} onValueChange={setActiveFile}>
//             <TabsList className="w-full">
//               {files.map((file) => (
//                 <TabsTrigger
//                   key={file.name}
//                   value={file.name}
//                   className="flex-1"
//                 >
//                   {file.name}
//                 </TabsTrigger>
//               ))}
//             </TabsList>
//             {files.map((file) => (
//               <TabsContent key={file.name} value={file.name} className="p-0">
//                 <Editor
//                   height="400px"
//                   language={file.language}
//                   value={code[file.name] || ""}
//                   onChange={handleEditorChange}
//                   theme="vs-dark"
//                   options={{
//                     minimap: { enabled: false },
//                     fontSize: 14,
//                     wordWrap: "on",
//                     lineNumbers: "on",
//                     folding: true,
//                   }}
//                 />
//               </TabsContent>
//             ))}
//           </Tabs>
//         </div>

//         <div className="border rounded p-4 bg-gray-100">
//           <h3 className="text-lg font-semibold mb-2 text-black">Output:</h3>
//           <div
//             className="text-black"
//             dangerouslySetInnerHTML={{ __html: output }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaCloudUploadAlt } from "react-icons/fa";
import JSZip from "jszip";

const files = [
  { name: "index.html", language: "html" },
  { name: "styles.css", language: "css" },
  { name: "script.js", language: "javascript" },
];

type CodeState = {
  [key: string]: string;
};

export default function WebsiteWithAi() {
  const [activeFile, setActiveFile] = useState(files[0].name);
  const [code, setCode] = useState<CodeState>({
    "index.html": "",
    "styles.css": "",
    "script.js": "",
  });
  const [output, setOutput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);

  const handleEditorChange = (value: string | undefined) => {
    setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
  };

  const generateCode = async () => {
    setIsGenerating(true);
    setOutput("Generating code...");
    try {
      const response = await fetch("http://localhost:5000/generate", {
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
        "styles.css": data.css || "",
        "script.js": data.javascript || "",
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
      const zip = new JSZip();

      // Add all files from 'code' to the ZIP archive
      Object.keys(code).forEach((filename) => {
        zip.file(filename, code[filename]);
      });

      // Generate ZIP file as a Blob
      const zipBlob = await zip.generateAsync({ type: "blob" });

      // Convert Blob to File object
      const zipFile = new File([zipBlob], "website.zip", {
        type: "application/zip",
      });

      // Prepare FormData
      const formData = new FormData();
      formData.append("zipFile", zipFile);

      // Send to backend
      const response = await fetch("http://localhost:7000/deploy", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setOutput(`Error: ${response.statusText}`);
        return;
      }

      const data = await response.json();
      if (data && data.liveUrl) {
        setOutput(
          `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
        );
      } else {
        setOutput("Error deploying or invalid response.");
      }
    } catch (error) {
      console.error("Error deploying:", error);
      setOutput("Error deploying.");
    }
    setIsDeploying(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-wrap items-center space-x-4 gap-4">
        <Input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-grow text-black"
        />
        <Button onClick={generateCode} disabled={isGenerating}>
          {isGenerating ? "Generating..." : "Generate"}
        </Button>
        <Button onClick={deployToNetlify} disabled={isDeploying}>
          <FaCloudUploadAlt /> {isDeploying ? "Deploying..." : "Deploy"}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded flex-1">
          <Tabs value={activeFile} onValueChange={setActiveFile}>
            <TabsList className="w-full">
              {files.map((file) => (
                <TabsTrigger
                  key={file.name}
                  value={file.name}
                  className="flex-1"
                >
                  {file.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {files.map((file) => (
              <TabsContent key={file.name} value={file.name} className="p-0">
                <Editor
                  height="400px"
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
                  }}
                />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="border rounded p-4 bg-gray-100">
          <h3 className="text-lg font-semibold mb-2 text-black">Output:</h3>
          <div
            className="text-black"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </div>
    </div>
  );
}
