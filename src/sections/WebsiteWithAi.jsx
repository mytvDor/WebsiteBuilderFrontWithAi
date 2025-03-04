// // import { useState, useEffect } from "react";
// // import Editor from "@monaco-editor/react";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { FaPlay, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
// // import JSZip from "jszip";

// // const files = [
// //   { name: "index.html", language: "html" },
// //   { name: "style.css", language: "css" },
// //   { name: "script.js", language: "javascript" },
// // ];

// // type CodeState = {
// //   [key: string]: string;
// // };

// // export default function WebsiteWithAi() {
// //   const [activeFile, setActiveFile] = useState(files[0].name);
// //   const [code, setCode] = useState<CodeState>({
// //     "index.html": "",
// //     "style.css": "",
// //     "script.js": "",
// //   });
// //   const [output, setOutput] = useState("");
// //   const [prompt, setPrompt] = useState("");
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [isRunning, setIsRunning] = useState(false);
// //   const [isSaving, setIsSaving] = useState(false);
// //   const [blobUrl, setBlobUrl] = useState<string | null>(null);

// //   const handleEditorChange = (value: string | undefined) => {
// //     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
// //     saveCode(value || "");
// //   };

// //   const generateCode = async () => {
// //     setIsGenerating(true);
// //     setOutput("Generating code...");
// //     try {
// //       const response = await fetch("http://localhost:8000/generate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ prompt }),
// //       });
// //       if (!response.ok) {
// //         setOutput(`Error: ${response.statusText}`);
// //         return;
// //       }
// //       const data = await response.json();
// //       if (data) {
// //         setCode({
// //           "index.html": data.html || "",
// //           "style.css": data.css || "",
// //           "script.js": data.javascript || "",
// //         });
// //         setActiveFile("index.html");
// //         setOutput("Code generated successfully.");
// //       } else {
// //         setOutput("Invalid response or no data returned.");
// //       }
// //     } catch (error) {
// //       console.error("Error generating code:", error);
// //       setOutput("Error generating code.");
// //     }
// //     setIsGenerating(false);
// //   };

// //   const runCode = async () => {
// //     setIsRunning(true);
// //     setOutput("Running code...");
// //     const fullHtml = `
// //       <html>
// //         <head>
// //           <style>${code["style.css"]}</style>
// //         </head>
// //         <body>
// //           ${code["index.html"]}
// //           <script>${code["script.js"]}</script>
// //         </body>
// //       </html>
// //     `;
// //     const blob = new Blob([fullHtml], { type: "text/html" });
// //     const url = URL.createObjectURL(blob);
// //     setBlobUrl(url);
// //     setOutput(
// //       `<iframe src="${url}" style="width:100%;height:300px;border:0;"></iframe>`
// //     );
// //     setIsRunning(false);
// //   };

// //   const saveCode = async (codeContent: string) => {
// //     setIsSaving(true);
// //     try {
// //       const response = await fetch("/api/save", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(code),
// //       });
// //       if (!response.ok) {
// //         setOutput(`Error: ${response.statusText}`);
// //         return;
// //       }
// //       const data = await response.json();
// //       if (data && data.message) {
// //         setOutput("Files saved successfully.");
// //       } else {
// //         setOutput("Error saving files or invalid response.");
// //       }
// //     } catch (error) {
// //       console.error("Error saving files:", error);
// //       setOutput("Error saving files.");
// //     }
// //     setIsSaving(false);
// //   };

// //   const downloadCode = () => {
// //     const zip = new JSZip();
// //     for (const [filename, content] of Object.entries(code)) {
// //       zip.file(filename, content);
// //     }
// //     zip.generateAsync({ type: "blob" }).then((blob) => {
// //       const url = URL.createObjectURL(blob);
// //       const a = document.createElement("a");
// //       a.href = url;
// //       a.download = "code.zip";
// //       a.click();
// //       URL.revokeObjectURL(url);
// //     });
// //   };

// //   const openInNewTab = () => {
// //     if (blobUrl) {
// //       window.open(blobUrl, "_blank");
// //     }
// //   };

// //   useEffect(() => {
// //     return () => {
// //       if (blobUrl) {
// //         URL.revokeObjectURL(blobUrl);
// //       }
// //     };
// //   }, [blobUrl]);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <div className="mb-4 flex flex-wrap items-center space-x-4 gap-4">
// //         <Input
// //           type="text"
// //           placeholder="Enter your prompt"
// //           value={prompt}
// //           onChange={(e) => setPrompt(e.target.value)}
// //           className="flex-grow text-black"
// //         />
// //         <Button onClick={generateCode} disabled={isGenerating}>
// //           {isGenerating ? "Generating..." : "Generate"}
// //         </Button>
// //         <Button onClick={runCode} disabled={isRunning}>
// //           <FaPlay /> {isRunning ? "Running..." : ""}
// //         </Button>
// //         <Button onClick={openInNewTab} disabled={!blobUrl}>
// //           <FaExternalLinkAlt />
// //         </Button>
// //         <Button onClick={downloadCode}>
// //           <FaDownload />
// //         </Button>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         <div className="border rounded flex-1">
// //           <Tabs value={activeFile} onValueChange={setActiveFile}>
// //             <TabsList className="w-full">
// //               {files.map((file) => (
// //                 <TabsTrigger
// //                   key={file.name}
// //                   value={file.name}
// //                   className="flex-1"
// //                 >
// //                   {file.name}
// //                 </TabsTrigger>
// //               ))}
// //             </TabsList>
// //             {files.map((file) => (
// //               <TabsContent key={file.name} value={file.name} className="p-0">
// //                 <Editor
// //                   height="400px"
// //                   language={file.language}
// //                   value={code[file.name] || ""}
// //                   onChange={handleEditorChange}
// //                   theme="vs-dark"
// //                   options={{
// //                     minimap: { enabled: false },
// //                     fontSize: 14,
// //                     wordWrap: "on",
// //                     lineNumbers: "on",
// //                     folding: true,
// //                   }}
// //                 />
// //               </TabsContent>
// //             ))}
// //           </Tabs>
// //         </div>

// //         <div className="border rounded p-4 bg-gray-100">
// //           <h3 className="text-lg font-semibold mb-2 text-black">Output:</h3>
// //           <div
// //             className="text-black"
// //             dangerouslySetInnerHTML={{ __html: output }}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState } from "react";
// // import Editor from "@monaco-editor/react";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { FaCloudUploadAlt } from "react-icons/fa";
// // import JSZip from "jszip";

// // const files = [
// //   { name: "index.html", language: "html" },
// //   { name: "style.css", language: "css" },
// //   { name: "script.js", language: "javascript" },
// // ];

// // type CodeState = {
// //   [key: string]: string;
// // };

// // export default function WebsiteWithAi() {
// //   const [activeFile, setActiveFile] = useState(files[0].name);
// //   const [code, setCode] = useState<CodeState>({
// //     "index.html": "",
// //     "style.css": "",
// //     "script.js": "",
// //   });
// //   const [output, setOutput] = useState("");
// //   const [prompt, setPrompt] = useState("");
// //   const [isGenerating, setIsGenerating] = useState(false);
// //   const [isDeploying, setIsDeploying] = useState(false);

// //   const handleEditorChange = (value: string | undefined) => {
// //     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
// //   };

// //   const generateCode = async () => {
// //     setIsGenerating(true);
// //     setOutput("Generating code...");
// //     try {
// //       const response = await fetch("http://localhost:8000/generate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ prompt }),
// //       });
// //       if (!response.ok) {
// //         setOutput(`Error: ${response.statusText}`);
// //         return;
// //       }
// //       const data = await response.json();
// //       setCode({
// //         "index.html": data.html || "",
// //         "style.css": data.css || "",
// //         "script.js": data.javascript || "",
// //       });
// //       setActiveFile("index.html");
// //       setOutput("Code generated successfully.");
// //     } catch (error) {
// //       console.error("Error generating code:", error);
// //       setOutput("Error generating code.");
// //     }
// //     setIsGenerating(false);
// //   };

// //   const deployToNetlify = async () => {
// //     setIsDeploying(true);
// //     setOutput("Deploying to Netlify...");
// //     try {
// //       const zip = new JSZip();

// //       // Add all files from 'code' to the ZIP archive
// //       Object.keys(code).forEach((filename) => {
// //         zip.file(filename, code[filename]);
// //       });

// //       // Generate ZIP file as a Blob
// //       const zipBlob = await zip.generateAsync({ type: "blob" });

// //       // Convert Blob to File object
// //       const zipFile = new File([zipBlob], "website.zip", {
// //         type: "application/zip",
// //       });

// //       // Prepare FormData
// //       const formData = new FormData();
// //       formData.append("zipFile", zipFile);

// //       // Send to backend
// //       const response = await fetch("http://localhost:7000/deploy", {
// //         method: "POST",
// //         body: formData,
// //       });

// //       if (!response.ok) {
// //         setOutput(`Error: ${response.statusText}`);
// //         return;
// //       }

// //       const data = await response.json();
// //       if (data && data.liveUrl) {
// //         setOutput(
// //           `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
// //         );
// //       } else {
// //         setOutput("Error deploying or invalid response.");
// //       }
// //     } catch (error) {
// //       console.error("Error deploying:", error);
// //       setOutput("Error deploying.");
// //     }
// //     setIsDeploying(false);
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <div className="mb-4 flex flex-wrap items-center space-x-4 gap-4">
// //         <Input
// //           type="text"
// //           placeholder="Enter your prompt"
// //           value={prompt}
// //           onChange={(e) => setPrompt(e.target.value)}
// //           className="flex-grow text-black"
// //         />
// //         <Button onClick={generateCode} disabled={isGenerating}>
// //           {isGenerating ? "Generating..." : "Generate"}
// //         </Button>
// //         <Button onClick={deployToNetlify} disabled={isDeploying}>
// //           <FaCloudUploadAlt /> {isDeploying ? "Deploying..." : "Deploy"}
// //         </Button>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //         <div className="border rounded flex-1">
// //           <Tabs value={activeFile} onValueChange={setActiveFile}>
// //             <TabsList className="w-full">
// //               {files.map((file) => (
// //                 <TabsTrigger
// //                   key={file.name}
// //                   value={file.name}
// //                   className="flex-1"
// //                 >
// //                   {file.name}
// //                 </TabsTrigger>
// //               ))}
// //             </TabsList>
// //             {files.map((file) => (
// //               <TabsContent key={file.name} value={file.name} className="p-0">
// //                 <Editor
// //                   height="400px"
// //                   language={file.language}
// //                   value={code[file.name] || ""}
// //                   onChange={handleEditorChange}
// //                   theme="vs-dark"
// //                   options={{
// //                     minimap: { enabled: false },
// //                     fontSize: 14,
// //                     wordWrap: "on",
// //                     lineNumbers: "on",
// //                     folding: true,
// //                   }}
// //                 />
// //               </TabsContent>
// //             ))}
// //           </Tabs>
// //         </div>

// //         <div className="border rounded p-4 bg-gray-100">
// //           <h3 className="text-lg font-semibold mb-2 text-black">Output:</h3>
// //           <div
// //             className="text-black"
// //             dangerouslySetInnerHTML={{ __html: output }}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState, useRef } from "react";
// import Editor from "@monaco-editor/react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { FaCloudUploadAlt, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
// import JSZip from "jszip";

// const files = [
//   { name: "index.html", language: "html" },
//   { name: "style.css", language: "css" },
//   { name: "script.js", language: "javascript" },
// ];

// type CodeState = {
//   [key: string]: string;
// };

// export default function WebsiteWithAi() {
//   const [activeFile, setActiveFile] = useState(files[0].name);
//   const [code, setCode] = useState<CodeState>({
//     "index.html": "",
//     "style.css": "",
//     "script.js": "",
//   });
//   const [output, setOutput] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isDeploying, setIsDeploying] = useState(false);
//   const [liveUrl, setLiveUrl] = useState("");
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   const handleEditorChange = (value: string | undefined) => {
//     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
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
//       setCode({
//         "index.html": data.html || "",
//         "style.css": data.css || "",
//         "script.js": data.javascript || "",
//       });
//       setActiveFile("index.html");
//       setOutput("Code generated successfully.");
//     } catch (error) {
//       console.error("Error generating code:", error);
//       setOutput("Error generating code.");
//     }
//     setIsGenerating(false);
//   };

//   const deployToNetlify = async () => {
//     setIsDeploying(true);
//     setOutput("Deploying to Netlify...");
//     try {
//       const zip = new JSZip();

//       // Add all files from 'code' to the ZIP archive
//       Object.keys(code).forEach((filename) => {
//         zip.file(filename, code[filename]);
//       });

//       // Generate ZIP file as a Blob
//       const zipBlob = await zip.generateAsync({ type: "blob" });

//       // Convert Blob to File object
//       const zipFile = new File([zipBlob], "website.zip", {
//         type: "application/zip",
//       });

//       // Prepare FormData
//       const formData = new FormData();
//       formData.append("zipFile", zipFile);

//       // Send to backend
//       const response = await fetch("http://localhost:7000/deploy", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         setOutput(`Error: ${response.statusText}`);
//         return;
//       }

//       const data = await response.json();
//       if (data && data.liveUrl) {
//         setLiveUrl(data.liveUrl);
//         setOutput(
//           `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
//         );
//       } else {
//         setOutput("Error deploying or invalid response.");
//       }
//     } catch (error) {
//       console.error("Error deploying:", error);
//       setOutput("Error deploying.");
//     }
//     setIsDeploying(false);
//   };

//   const runCode = () => {
//     try {
//       // Create a blob with the HTML that includes the CSS and JS
//       const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//       // Create an iframe or update existing one
//       if (iframeRef.current) {
//         const iframeDoc = iframeRef.current.contentDocument;
//         if (iframeDoc) {
//           iframeDoc.open();
//           iframeDoc.write(htmlContent);
//           iframeDoc.close();
//           setOutput("Code running in the preview below:");
//         }
//       } else {
//         // Create a data URL for the HTML content
//         const blob = new Blob([htmlContent], { type: "text/html" });
//         const url = URL.createObjectURL(blob);

//         // Show iframe in the output area
//         setOutput(
//           `<iframe ref="iframeRef" src="${url}" style="width:100%; height:300px; border:none;"></iframe>`
//         );
//       }
//     } catch (error) {
//       console.error("Error running code:", error);
//       setOutput("Error running code.");
//     }
//   };

//   const openInNewTab = () => {
//     if (liveUrl) {
//       window.open(liveUrl, "_blank");
//     } else {
//       // If no live URL exists, create a temporary page from the current code
//       const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//       const blob = new Blob([htmlContent], { type: "text/html" });
//       const url = URL.createObjectURL(blob);
//       window.open(url, "_blank");
//     }
//   };

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
//         <Button onClick={deployToNetlify} disabled={isDeploying}>
//           <FaCloudUploadAlt className="mr-2" />{" "}
//           {isDeploying ? "Deploying..." : "Deploy"}
//         </Button>
//         <Button onClick={openInNewTab}>
//           <FaExternalLinkAlt className="mr-2" /> Open in New Tab
//         </Button>
//         <Button onClick={runCode}>
//           <FaPlay className="mr-2" /> Run Code
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
//           <iframe
//             ref={iframeRef}
//             className="w-full h-64 mt-4 border-none"
//             style={{
//               display: output.includes("preview below") ? "block" : "none",
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef } from "react";
// import Editor from "@monaco-editor/react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   FaCloudUploadAlt,
//   FaExternalLinkAlt,
//   FaPlay,
//   FaDownload,
// } from "react-icons/fa";
// import JSZip from "jszip";
// // import {AiChatComponent} from "AiChatComponent"
// const files = [
//   { name: "index.html", language: "html" },
//   { name: "style.css", language: "css" },
//   { name: "script.js", language: "javascript" },
// ];

// type CodeState = {
//   [key: string]: string;
// };

// export default function WebsiteWithAi() {
//   const [activeFile, setActiveFile] = useState(files[0].name);
//   const [code, setCode] = useState<CodeState>({
//     "index.html": "",
//     "style.css": "",
//     "script.js": "",
//   });
//   const [output, setOutput] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isDeploying, setIsDeploying] = useState(false);
//   const [liveUrl, setLiveUrl] = useState("");
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   const handleEditorChange = (value: string | undefined) => {
//     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
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
//       setCode({
//         "index.html": data.html || "",
//         "style.css": data.css || "",
//         "script.js": data.javascript || "",
//       });
//       setActiveFile("index.html");
//       setOutput("Code generated successfully.");
//     } catch (error) {
//       console.error("Error generating code:", error);
//       setOutput("Error generating code.");
//     }
//     setIsGenerating(false);
//   };

//   // const deployToNetlify = async () => {
//   //   setIsDeploying(true);
//   //   setOutput("Deploying to Netlify...");

//   //   try {
//   //     const zip = new JSZip();

//   //     console.log("Files in code object:", Object.keys(code)); // Debugging step

//   //     // Add all files to ZIP
//   //     Object.keys(code).forEach((filename) => {
//   //       console.log(`Adding to ZIP: ${filename}`, code[filename]); // Log each file
//   //       zip.file(filename, code[filename]);
//   //     });

//   //     // Generate ZIP file as a Blob
//   //     const zipBlob = await zip.generateAsync({ type: "blob" });

//   //     // Convert Blob to File object
//   //     const zipFile = new File([zipBlob], "website.zip", {
//   //       type: "application/zip",
//   //     });

//   //     // Create a downloadable ZIP for manual inspection (optional)
//   //     const zipUrl = URL.createObjectURL(zipBlob);
//   //     const a = document.createElement("a");
//   //     a.href = zipUrl;
//   //     a.download = "debug_website.zip";
//   //     a.click();
//   //     URL.revokeObjectURL(zipUrl);

//   //     console.log("Generated ZIP file:", zipFile); // Debugging step

//   //     // Prepare FormData
//   //     const formData = new FormData();
//   //     formData.append("zipFile", zipFile);

//   //     // Send to backend
//   //     const response = await fetch("http://localhost:8000/deploy", {
//   //       method: "POST",
//   //       body: formData,
//   //     });

//   //     if (!response.ok) {
//   //       setOutput(`Error: ${response.statusText}`);
//   //       return;
//   //     }

//   //     const data = await response.json();
//   //     if (data && data.liveUrl) {
//   //       setLiveUrl(data.liveUrl);
//   //       setOutput(
//   //         `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
//   //       );
//   //     } else {
//   //       setOutput("Error deploying or invalid response.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error deploying:", error);
//   //     setOutput("Error deploying.");
//   //   }

//   //   setIsDeploying(false);
//   // };

//   const deployToNetlify = async () => {
//     setIsDeploying(true);
//     setOutput("Deploying to Netlify...");

//     try {
//       const formData = new FormData();

//       // Ensure `code` is defined and is an object mapping filenames to content
//       if (!code || typeof code !== "object") {
//         throw new Error("Invalid code object");
//       }

//       // Append each file in `code`
//       Object.keys(code).forEach((filename: string) => {
//         const fileContent = code[filename];
//         if (typeof fileContent !== "string") {
//           console.error(`Invalid content for file: ${filename}`);
//           return;
//         }
//         const file = new Blob([fileContent], { type: getMimeType(filename) });
//         formData.append("files", file, filename);
//       });

//       // Send to backend
//       const response = await fetch("http://localhost:8000/deploy-ai-site", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         setOutput(`Error: ${response.statusText}`);
//         return;
//       }

//       const data: { liveUrl?: string } = await response.json();
//       if (data?.liveUrl) {
//         setLiveUrl(data.liveUrl);
//         setOutput(
//           `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
//         );
//       } else {
//         setOutput("Error deploying or invalid response.");
//       }
//     } catch (error) {
//       console.error("Error deploying:", error);
//       setOutput("Error deploying.");
//     }

//     setIsDeploying(false);
//   };

//   // Function to determine the MIME type based on file extension
//   const getMimeType = (filename: string) => {
//     if (filename.endsWith(".html")) return "text/html";
//     if (filename.endsWith(".css")) return "text/css";
//     if (filename.endsWith(".js")) return "application/javascript";
//     return "application/octet-stream"; // Default type
//   };

//   const runCode = () => {
//     try {
//       // Create a blob with the HTML that includes the CSS and JS
//       const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//       // Create an iframe or update existing one
//       if (iframeRef.current) {
//         const iframeDoc = iframeRef.current.contentDocument;
//         if (iframeDoc) {
//           iframeDoc.open();
//           iframeDoc.write(htmlContent);
//           iframeDoc.close();
//           setOutput("Code running in the preview below:");
//         }
//       } else {
//         // Create a data URL for the HTML content
//         const blob = new Blob([htmlContent], { type: "text/html" });
//         const url = URL.createObjectURL(blob);

//         // Show iframe in the output area
//         setOutput(
//           `<iframe ref="iframeRef" src="${url}" style="width:100%; height:300px; border:none;"></iframe>`
//         );
//       }
//     } catch (error) {
//       console.error("Error running code:", error);
//       setOutput("Error running code.");
//     }
//   };

//   const openInNewTab = () => {
//     // If no live URL exists, create a temporary page from the current code
//     const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//     const blob = new Blob([htmlContent], { type: "text/html" });
//     const url = URL.createObjectURL(blob);
//     window.open(url, "_blank");
//   };

//   const downloadZip = async () => {
//     try {
//       setOutput("Preparing download...");

//       // Create a new JSZip instance
//       const zip = new JSZip();

//       // Add all files to the ZIP
//       Object.keys(code).forEach((filename) => {
//         zip.file(filename, code[filename]);
//       });

//       // Generate the ZIP file
//       const content = await zip.generateAsync({ type: "blob" });

//       // Create a download link
//       const url = URL.createObjectURL(content);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "website-files.zip";

//       // Trigger the download
//       document.body.appendChild(link);
//       link.click();

//       // Clean up
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);

//       setOutput("Files downloaded as ZIP successfully.");
//     } catch (error) {
//       console.error("Error creating ZIP:", error);
//       setOutput("Error creating ZIP file for download.");
//     }
//   };

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
//         <Button onClick={deployToNetlify} disabled={isDeploying}>
//           <FaCloudUploadAlt className="mr-2" />{" "}
//           {isDeploying ? "Deploying..." : "Deploy"}
//         </Button>
//         <Button onClick={openInNewTab}>
//           <FaExternalLinkAlt className="mr-2" /> Open in New Tab
//         </Button>
//         <Button onClick={runCode}>
//           <FaPlay className="mr-2" /> Run Code
//         </Button>
//         <Button onClick={downloadZip}>
//           <FaDownload className="mr-2" /> Download ZIP
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
//           <iframe
//             ref={iframeRef}
//             className="w-full h-64 mt-4 border-none"
//             style={{
//               display: output.includes("preview below") ? "block" : "none",
//             }}
//           />
//         </div>
//       </div>
//       <AiChatComponent></AiChatComponent>
//     </div>
//   );
// }

// import { useState, useRef } from "react";
// import Editor from "@monaco-editor/react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   FaCloudUploadAlt,
//   FaExternalLinkAlt,
//   FaPlay,
//   FaDownload,
// } from "react-icons/fa";
// import JSZip from "jszip";
// import AiChatComponent from "./AiChatComponent"; // Correct import

// const files = [
//   { name: "index.html", language: "html" },
//   { name: "style.css", language: "css" },
//   { name: "script.js", language: "javascript" },
// ];

// type CodeState = {
//   [key: string]: string;
// };

// export default function WebsiteWithAi() {
//   const [activeFile, setActiveFile] = useState(files[0].name);
//   const [code, setCode] = useState<CodeState>({
//     "index.html": "",
//     "style.css": "",
//     "script.js": "",
//   });
//   const [output, setOutput] = useState("");
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [isDeploying, setIsDeploying] = useState(false);
//   const [liveUrl, setLiveUrl] = useState("");
//   const iframeRef = useRef<HTMLIFrameElement>(null);

//   const handleEditorChange = (value: string | undefined) => {
//     setCode((prev) => ({ ...prev, [activeFile]: value || "" }));
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
//       setCode({
//         "index.html": data.html || "",
//         "style.css": data.css || "",
//         "script.js": data.javascript || "",
//       });
//       setActiveFile("index.html");
//       setOutput("Code generated successfully.");
//     } catch (error) {
//       console.error("Error generating code:", error);
//       setOutput("Error generating code.");
//     }
//     setIsGenerating(false);
//   };

//   const deployToNetlify = async () => {
//     setIsDeploying(true);
//     setOutput("Deploying to Netlify...");

//     try {
//       const formData = new FormData();

//       // Ensure `code` is defined and is an object mapping filenames to content
//       if (!code || typeof code !== "object") {
//         throw new Error("Invalid code object");
//       }

//       // Append each file in `code`
//       Object.keys(code).forEach((filename: string) => {
//         const fileContent = code[filename];
//         if (typeof fileContent !== "string") {
//           console.error(`Invalid content for file: ${filename}`);
//           return;
//         }
//         const file = new Blob([fileContent], { type: getMimeType(filename) });
//         formData.append("files", file, filename);
//       });

//       // Send to backend
//       const response = await fetch("http://localhost:8000/deploy-ai-site", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         setOutput(`Error: ${response.statusText}`);
//         return;
//       }

//       const data: { liveUrl?: string } = await response.json();
//       if (data?.liveUrl) {
//         setLiveUrl(data.liveUrl);
//         setOutput(
//           `Deployed successfully: <a href="${data.liveUrl}" target="_blank">${data.liveUrl}</a>`
//         );
//       } else {
//         setOutput("Error deploying or invalid response.");
//       }
//     } catch (error) {
//       console.error("Error deploying:", error);
//       setOutput("Error deploying.");
//     }

//     setIsDeploying(false);
//   };

//   // Function to determine the MIME type based on file extension
//   const getMimeType = (filename: string) => {
//     if (filename.endsWith(".html")) return "text/html";
//     if (filename.endsWith(".css")) return "text/css";
//     if (filename.endsWith(".js")) return "application/javascript";
//     return "application/octet-stream"; // Default type
//   };

//   const runCode = () => {
//     try {
//       // Create a blob with the HTML that includes the CSS and JS
//       const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//       // Create an iframe or update existing one
//       if (iframeRef.current) {
//         const iframeDoc = iframeRef.current.contentDocument;
//         if (iframeDoc) {
//           iframeDoc.open();
//           iframeDoc.write(htmlContent);
//           iframeDoc.close();
//           setOutput("Code running in the preview below:");
//         }
//       } else {
//         // Create a data URL for the HTML content
//         const blob = new Blob([htmlContent], { type: "text/html" });
//         const url = URL.createObjectURL(blob);

//         // Show iframe in the output area
//         setOutput(
//           `<iframe ref="iframeRef" src="${url}" style="width:100%; height:300px; border:none;"></iframe>`
//         );
//       }
//     } catch (error) {
//       console.error("Error running code:", error);
//       setOutput("Error running code.");
//     }
//   };

//   const openInNewTab = () => {
//     // If no live URL exists, create a temporary page from the current code
//     const htmlContent = `
//         <!DOCTYPE html>
//         <html>
//         <head>
//           <style>${code["style.css"]}</style>
//         </head>
//         <body>
//           ${code["index.html"]}
//           <script>${code["script.js"]}</script>
//         </body>
//         </html>
//       `;

//     const blob = new Blob([htmlContent], { type: "text/html" });
//     const url = URL.createObjectURL(blob);
//     window.open(url, "_blank");
//   };

//   const downloadZip = async () => {
//     try {
//       setOutput("Preparing download...");

//       // Create a new JSZip instance
//       const zip = new JSZip();

//       // Add all files to the ZIP
//       Object.keys(code).forEach((filename) => {
//         zip.file(filename, code[filename]);
//       });

//       // Generate the ZIP file
//       const content = await zip.generateAsync({ type: "blob" });

//       // Create a download link
//       const url = URL.createObjectURL(content);
//       const link = document.createElement("a");
//       link.href = url;
//       link.download = "website-files.zip";

//       // Trigger the download
//       document.body.appendChild(link);
//       link.click();

//       // Clean up
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);

//       setOutput("Files downloaded as ZIP successfully.");
//     } catch (error) {
//       console.error("Error creating ZIP:", error);
//       setOutput("Error creating ZIP file for download.");
//     }
//   };

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
//         <Button onClick={deployToNetlify} disabled={isDeploying}>
//           <FaCloudUploadAlt className="mr-2" />{" "}
//           {isDeploying ? "Deploying..." : "Deploy"}
//         </Button>
//         <Button onClick={openInNewTab}>
//           <FaExternalLinkAlt className="mr-2" /> Open in New Tab
//         </Button>
//         <Button onClick={runCode}>
//           <FaPlay className="mr-2" /> Run Code
//         </Button>
//         <Button onClick={downloadZip}>
//           <FaDownload className="mr-2" /> Download ZIP
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
//           <iframe
//             ref={iframeRef}
//             className="w-full h-64 mt-4 border-none"
//             style={{
//               display: output.includes("preview below") ? "block" : "none",
//             }}
//           />
//         </div>
//       </div>

//       {/* AI Chat Component included at the bottom of the page */}
//       <AiChatComponent />
//     </div>
//   );
// }

// "use client"

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
    <div className="container mx-auto p-4 max-w-7xl">
      <Card className="mb-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-none shadow-md">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2 mb-2">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">AI Website Builder</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Describe the website you want to create..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="flex-grow text-black"
              />
              <Button
                onClick={generateCode}
                disabled={isGenerating}
                className="whitespace-nowrap"
              >
                {isGenerating ? "Generating..." : "Generate Code"}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              <Button
                variant="outline"
                onClick={runCode}
                className="flex items-center"
              >
                <Play className="mr-2 h-4 w-4" /> Run
              </Button>
              <Button
                variant="outline"
                onClick={deployToNetlify}
                disabled={isDeploying}
                className="flex items-center"
              >
                <CloudUpload className="mr-2 h-4 w-4" />
                {isDeploying ? "Deploying..." : "Deploy"}
              </Button>
              <Button
                variant="outline"
                onClick={openInNewTab}
                className="flex items-center"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Preview
              </Button>
              <Button
                variant="outline"
                onClick={downloadZip}
                className="flex items-center"
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
        <Card className="shadow-md border-none">
          <Tabs
            value={activeFile}
            onValueChange={setActiveFile}
            className="w-full"
          >
            <div className="bg-muted/50 p-1 rounded-t-lg">
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
                <div className="border rounded-b-lg overflow-hidden">
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

        <Card className="shadow-md border-none">
          <CardContent className="p-0">
            <div className="bg-muted/50 p-3 rounded-t-lg border-b">
              <h3 className="text-lg font-semibold flex items-center">
                <Play className="w-4 h-4 mr-2" /> Preview
              </h3>
            </div>
            <div className="p-4 bg-white rounded-b-lg min-h-[500px] max-h-[500px] overflow-auto">
              <div
                className="text-black mb-4"
                dangerouslySetInnerHTML={{ __html: output }}
              />
              <iframe
                ref={iframeRef}
                className="w-full h-[400px] border rounded"
                style={{
                  display: output.includes("preview below") ? "block" : "none",
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Component included at the bottom of the page */}

      <AiChatComponent />
    </div>
  );
}
