// // // // import { useState } from "react";
// // // // import { Button } from "@/components/ui/button";
// // // // import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// // // // import { Trash2 } from 'lucide-react';
// // // // import { Loader2 } from 'lucide-react'; // Import a loader icon

// // // // const WebsiteDashboard = ({ websites, setWebsites, fetchWebsites }) => {
// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editData, setEditData] = useState({
// // // //     id: '',
// // // //     username: '',
// // // //     templateName: '',
// // // //     siteData: { title: '', content: '' }, // Added siteData object
// // // //   });
// // // //   const [loading, setLoading] = useState(false); // New loading state
// // // // const [Del_loading , setDel_loading]= useState(false)
// // // //   const handleDelete = async (siteId) => {
// // // //     console.log(siteId)
// // // //     setDel_loading(true)
// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/delete-site', {
// // // //         method: 'DELETE',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ siteId })
// // // //       });
// // // //       if (response.ok) {
// // // //         alert("Your website has been successfully deleted.");
// // // //         fetchWebsites(); // Refresh the websites after deletion
// // // //       } else {
// // // //         throw new Error('Failed to delete website');
// // // //       }
// // // //       setDel_loading(false)

// // // //     } catch (error) {
// // // //         setDel_loading(false)
// // // //       console.error('Error:', error);
// // // //       alert("Error: Failed to delete the website. Please try again.");
// // // //     }
// // // //   };

// // // //   const handleUpdate = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await fetch(`http://localhost:8000/update-site`, {
// // // //         method: 'PUT',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           siteId: editData.id,
// // // //           username: editData.username,
// // // //           templateName: editData.templateName,
// // // //           siteData: editData.siteData, // Pass siteData object
// // // //         })
// // // //       });
// // // //       if (response.ok) {
// // // //         alert("Website updated successfully!");
// // // //         setIsEditing(false); // Hide the update form
// // // //         fetchWebsites(); // Refresh the website list
// // // //       } else {
// // // //         throw new Error('Failed to update website');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert("Error: Failed to update the website. Please try again.");
// // // //     }
// // // //   };

// // // //   const startEditing = (site) => {
// // // //     setEditData({
// // // //       id: site.siteId, // Set the ID of the site being edited
// // // //       username: site.username,
// // // //       templateName: site.templateName,
// // // //       siteData: { title: site.siteData.title, content: site.siteData.content } // Populate siteData with existing values
// // // //     });
// // // //     setIsEditing(true); // Show the update form
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Table>
// // // //         <TableHeader>
// // // //           <TableRow>
// // // //             <TableHead>Username</TableHead>
// // // //             <TableHead>Template</TableHead>
// // // //             <TableHead>Live URL</TableHead>
// // // //             <TableHead>Actions</TableHead>
// // // //           </TableRow>
// // // //         </TableHeader>
// // // //         <TableBody>
// // // //           {websites.map((site) => (
// // // //             <TableRow key={site.siteId}>
// // // //               <TableCell>{site.username}</TableCell>
// // // //               <TableCell>{site.templateName}</TableCell>
// // // //               <TableCell>
// // // //                 <a href={site.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
// // // //                   {site.liveUrl.slice(0,17)}
// // // //                 </a>
// // // //               </TableCell>
// // // //               <TableCell >
// // // //               <Button variant="default" size="sm" className="m-2" onClick={() => startEditing(site)}>
// // // //                   Update
// // // //                 </Button>
// // // //                 <Button variant="destructive" disabled={Del_loading} size="sm" onClick={() => handleDelete(site.siteId)}>
// // // // Delete                </Button>

// // // //               </TableCell>
// // // //             </TableRow>
// // // //           ))}
// // // //         </TableBody>
// // // //       </Table>

// // // //       {isEditing && (
// // // //         <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-50">
// // // //           <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md w-1/3">
// // // //             <h3 className="text-lg font-bold">Update Website</h3>
// // // //             <div className="space-y-2">
// // // //               <label htmlFor="username">Username</label>
// // // //               <input
// // // //                 id="username"
// // // //                 value={editData.username}
// // // //                 onChange={(e) => setEditData({ ...editData, username: e.target.value })}
// // // //                 className="border border-gray-500 w-full p-2"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="space-y-2">
// // // //               <label htmlFor="templateName">Template</label>
// // // //               <select
// // // //                 id="templateName"
// // // //                 value={editData.templateName}
// // // //                 onChange={(e) => setEditData({ ...editData, templateName: e.target.value })}
// // // //                 className="border border-gray-500 w-full p-2"
// // // //               >
// // // //                 <option value="t1">Template 1</option>
// // // //                 <option value="t2">Template 2</option>
// // // //               </select>
// // // //             </div>
// // // //             <div className="space-y-2">
// // // //               <label htmlFor="title">Title</label>
// // // //               <input
// // // //                 id="title"
// // // //                 value={editData.siteData.title} // Use siteData.title for input
// // // //                 onChange={(e) => setEditData({ ...editData, siteData: { ...editData.siteData, title: e.target.value } })}
// // // //                 className="border border-gray-500 w-full p-2"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="space-y-2">
// // // //               <label htmlFor="content">Content</label>
// // // //               <textarea
// // // //                 id="content"
// // // //                 value={editData.siteData.content} // Use siteData.content for textarea
// // // //                 onChange={(e) => setEditData({ ...editData, siteData: { ...editData.siteData, content: e.target.value } })}
// // // //                 className="border border-gray-500 w-full p-2"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex justify-end space-x-2">
// // // //             <Button type="submit"  disabled={loading}> {/* Disable button while loading */}
// // // //                 {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Update Website"} {/* Show loader icon */}
// // // //             </Button>
// // // //             <Button type="button" onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default WebsiteDashboard;

// // // // import { useEffect, useState } from "react";
// // // // import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// // // // import{Button} from "@/components/ui/button"
// // // //   // Import Shadcn components
// // // // import { Trash2, Loader2 } from 'lucide-react'; // Import icons

// // // // const WebsiteDashboard = () => {

// // // //   const [isEditing, setIsEditing] = useState(false);
// // // //   const [editData, setEditData] = useState({
// // // //     id: '',
// // // //     username: '',
// // // //     templateName: '',
// // // //     siteData: { title: '', content: '' },
// // // //   });
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [Del_loading, setDel_loading] = useState(false);

// // // //   const [websites, setWebsites] = useState([]);
// // // //   // const [loading, setLoading] = useState(false);
// // // //   // const navigate = useNavigate();

// // // //   const fetchWebsites = async () => {
// // // //     const email = localStorage.getItem('email');
// // // //     if (!email) {
// // // //       console.error('No email found in local storage');
// // // //       return;
// // // //     }

// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await fetch(`http://localhost:8000/user-sites/${email}`, {
// // // //         method: 'GET',
// // // //         headers: { 'Content-Type': 'application/json' }
// // // //       });

// // // //       if (response.ok) {
// // // //         const data = await response.json();
// // // //         setWebsites(data);
// // // //       } else {
// // // //         throw new Error('Failed to fetch websites');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       alert("Error: Failed to fetch websites. Please try again.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchWebsites();
// // // //   }, []);

// // // //   const handleDelete = async (siteId) => {
// // // //     setDel_loading(true);
// // // //     try {
// // // //       const response = await fetch('http://localhost:8000/delete-site', {
// // // //         method: 'DELETE',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({ siteId })
// // // //       });
// // // //       if (response.ok) {
// // // //         alert("Your website has been successfully deleted.");
// // // //         fetchWebsites();
// // // //       } else {
// // // //         throw new Error('Failed to delete website');
// // // //       }
// // // //     } catch (error) {
// // // //       alert("Error: Failed to delete the website. Please try again.");
// // // //     } finally {
// // // //       setDel_loading(false);
// // // //     }
// // // //   };

// // // //   const handleUpdate = async (e) => {
// // // //     e.preventDefault();
// // // //     setLoading(true);
// // // //     try {
// // // //       const response = await fetch(`http://localhost:8000/update-site`, {
// // // //         method: 'PUT',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           siteId: editData.id,
// // // //           username: editData.username,
// // // //           templateName: editData.templateName,
// // // //           siteData: editData.siteData,
// // // //         })
// // // //       });
// // // //       if (response.ok) {
// // // //         alert("Website updated successfully!");
// // // //         setIsEditing(false);
// // // //         fetchWebsites();
// // // //       } else {
// // // //         throw new Error('Failed to update website');
// // // //       }
// // // //     } catch (error) {
// // // //       alert("Error: Failed to update the website. Please try again.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const startEditing = (site) => {
// // // //     setEditData({
// // // //       id: site.siteId,
// // // //       username: site.username,
// // // //       templateName: site.templateName,
// // // //       siteData: { title: site.siteData.title, content: site.siteData.content }
// // // //     });
// // // //     setIsEditing(true);
// // // //   };

// // // //   return (
// // // //     <div className="bg-zinc-950 min-h-screen p-8">
// // // //     <div className="flex justify-start items-center flex-wrap">
// // // //   {websites.map((site) => (
// // // //     <Card key={site.siteId} className="bg-zinc-900 text-white w-72 m-2"> {/* Added 2cm margin around each card */}
// // // //       <CardHeader>
// // // //         <CardTitle className="text-lg font-bold text-lime-400">{site.username}</CardTitle>
// // // //         <CardDescription className="text-zinc-400" >Template: {site.templateName} </CardDescription>
// // // //         <CardDescription  className="text-zinc-300">Content: {site.siteData.content} </CardDescription>

// // // //       </CardHeader>
// // // //       <CardContent className="text-lime-400">
// // // //       Link <a href={site.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mb-2 block">
// // // //           {site.liveUrl.slice(0, 17)}
// // // //         </a>
// // // //         <br></br>
// // // //         ID <br></br> <div className="text-white">{site.siteId}</div>
// // // //       </CardContent>
// // // //       <CardFooter className="flex justify-between mt-4">
// // // //         <Button variant="default"className="bg-lime-400 text-black" size="sm" onClick={() => startEditing(site)}>
// // // //           Update
// // // //         </Button>
// // // //         <Button variant="destructive" size="sm" disabled={Del_loading} onClick={() => handleDelete(site.siteId)}>
// // // //           {Del_loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Delete"}
// // // //         </Button>
// // // //       </CardFooter>
// // // //     </Card>
// // // //   ))}
// // // // </div>

// // // //       {isEditing && (
// // // //         <div className="fixed inset-0 flex items-center justify-center bg-zinc-950 bg-opacity-75">
// // // //           <form onSubmit={handleUpdate} className="bg-zinc-900 p-6 rounded-lg shadow-md w-full text-white"> {/* Dark form */}
// // // //             <h3 className="text-lg font-bold mb-4">Update Website</h3>
// // // //             <div className="mb-4">
// // // //               <label htmlFor="username" className="block mb-2">Username</label>
// // // //               <input
// // // //                 id="username"
// // // //                 value={editData.username}
// // // //                 onChange={(e) => setEditData({ ...editData, username: e.target.value })}
// // // //                 className="border border-gray-500 bg-zinc-950 w-full p-2 rounded"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <label htmlFor="templateName" className="block mb-2">Template</label>
// // // //               <select
// // // //                 id="templateName"
// // // //                 value={editData.templateName}
// // // //                 onChange={(e) => setEditData({ ...editData, templateName: e.target.value })}
// // // //                 className="border border-gray-500 bg-zinc-950 w-full p-2 rounded"
// // // //               >
// // // //                 <option value="t1">Template 1</option>
// // // //                 <option value="t2">Template 2</option>
// // // //               </select>
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <label htmlFor="title" className="block mb-2">Title</label>
// // // //               <input
// // // //                 id="title"
// // // //                 value={editData.siteData.title}
// // // //                 onChange={(e) => setEditData({ ...editData, siteData: { ...editData.siteData, title: e.target.value } })}
// // // //                 className="border border-gray-500 bg-zinc-950 w-full p-2 rounded"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="mb-4">
// // // //               <label htmlFor="content" className="block mb-2">Content</label>
// // // //               <textarea
// // // //                 id="content"
// // // //                 value={editData.siteData.content}
// // // //                 onChange={(e) => setEditData({ ...editData, siteData: { ...editData.siteData, content: e.target.value } })}
// // // //                 className="border border-gray-500 bg-zinc-950 w-full p-2 rounded"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //             <div className="flex justify-end space-x-2">
// // // //               <Button type="submit" disabled={loading}>
// // // //                 {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "Update Website"}
// // // //               </Button>
// // // //               <Button type="button" className="text-blue-950" onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default WebsiteDashboard;

// // // import { useEffect, useState } from "react";
// // // import {
// // //   Card,
// // //   CardHeader,
// // //   CardTitle,
// // //   CardDescription,
// // //   CardContent,
// // //   CardFooter,
// // // } from "@/components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Trash2, Loader2 } from "lucide-react";

// // // const WebsiteDashboard = () => {
// // //   const [websites, setWebsites] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [Del_loading, setDel_loading] = useState(false);

// // //   const fetchWebsites = async () => {
// // //     const email = localStorage.getItem("email");
// // //     if (!email) {
// // //       console.error("No email found in local storage");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const response = await fetch(
// // //         `http://localhost:8000/user-sites/${email}`,
// // //         {
// // //           method: "GET",
// // //           headers: { "Content-Type": "application/json" },
// // //         }
// // //       );

// // //       if (response.ok) {
// // //         const data = await response.json();
// // //         setWebsites(data);
// // //       } else {
// // //         throw new Error("Failed to fetch websites");
// // //       }
// // //     } catch (error) {
// // //       console.error("Error:", error);
// // //       alert("Error: Failed to fetch websites. Please try again.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchWebsites();
// // //   }, []);

// // //   const handleDelete = async (siteId) => {
// // //     setDel_loading(true);
// // //     try {
// // //       const response = await fetch("http://localhost:8000/delete-site", {
// // //         method: "DELETE",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ siteId }),
// // //       });
// // //       if (response.ok) {
// // //         alert("Your website has been successfully deleted.");
// // //         fetchWebsites();
// // //       } else {
// // //         throw new Error("Failed to delete website");
// // //       }
// // //     } catch (error) {
// // //       alert("Error: Failed to delete the website. Please try again.");
// // //     } finally {
// // //       setDel_loading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="bg-zinc-950 min-h-screen p-8">
// // //       <div className="flex justify-start items-center flex-wrap">
// // //         {websites.map((site) => (
// // //           <Card key={site.siteId} className="bg-zinc-900 text-white w-72 m-2">
// // //             <CardHeader>
// // //               <CardTitle className="text-lg font-bold text-lime-400">
// // //                 {site.username}
// // //               </CardTitle>
// // //               <CardDescription className="text-zinc-400">
// // //                 Template: {site.templateName}
// // //               </CardDescription>
// // //               <CardDescription className="text-zinc-300">
// // //                 Content: {site.siteData.content}
// // //               </CardDescription>
// // //             </CardHeader>
// // //             <CardContent className="text-lime-400">
// // //               Link
// // //               <a
// // //                 href={site.liveUrl}
// // //                 target="_blank"
// // //                 rel="noopener noreferrer"
// // //                 className="text-blue-400 hover:underline mb-2 block"
// // //               >
// // //                 {site.liveUrl.slice(0, 17)}
// // //               </a>
// // //               <br />
// // //               ID <br /> <div className="text-white">{site.siteId}</div>
// // //             </CardContent>
// // //             <CardFooter className="flex justify-end mt-4">
// // //               <Button
// // //                 variant="destructive"
// // //                 size="sm"
// // //                 disabled={Del_loading}
// // //                 onClick={() => handleDelete(site.siteId)}
// // //               >
// // //                 {Del_loading ? (
// // //                   <Loader2 className="animate-spin mr-2 h-4 w-4" />
// // //                 ) : (
// // //                   "Delete"
// // //                 )}
// // //               </Button>
// // //             </CardFooter>
// // //           </Card>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default WebsiteDashboard;

// // import { useEffect, useState } from "react";
// // import {
// //   Card,
// //   CardHeader,
// //   CardTitle,
// //   CardDescription,
// //   CardContent,
// //   CardFooter,
// // } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { Trash2, Loader2 } from "lucide-react";

// // const WebsiteDashboard = () => {
// //   const [websites, setWebsites] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [deleting, setDeleting] = useState({}); // Track delete loading state per site

// //   const fetchWebsites = async () => {
// //     const email = localStorage.getItem("email");
// //     if (!email) {
// //       console.error("No email found in local storage");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await fetch(
// //         `http://localhost:8000/user-sites/${email}`,
// //         {
// //           method: "GET",
// //           headers: { "Content-Type": "application/json" },
// //         }
// //       );

// //       if (response.ok) {
// //         const data = await response.json();
// //         setWebsites(data);
// //       } else {
// //         throw new Error("Failed to fetch websites");
// //       }
// //     } catch (error) {
// //       console.error("Error:", error);
// //       alert("Error: Failed to fetch websites. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchWebsites();
// //   }, []);

// //   const handleDelete = async (siteId) => {
// //     setDeleting((prev) => ({ ...prev, [siteId]: true })); // Set loading for specific site
// //     try {
// //       const response = await fetch("http://localhost:8000/delete-site", {
// //         method: "DELETE",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ siteId }),
// //       });
// //       if (response.ok) {
// //         alert("Your website has been successfully deleted.");
// //         fetchWebsites();
// //       } else {
// //         throw new Error("Failed to delete website");
// //       }
// //     } catch (error) {
// //       alert("Error: Failed to delete the website. Please try again.");
// //     } finally {
// //       setDeleting((prev) => ({ ...prev, [siteId]: false })); // Reset loading for specific site
// //     }
// //   };

// //   return (
// //     <div className="bg-zinc-950 min-h-screen p-8">
// //       <div className="flex justify-start items-center flex-wrap">
// //         {websites.map((site) => (
// //           <Card key={site.siteId} className="bg-zinc-900 text-white w-72 m-2">
// //             <CardHeader>
// //               <CardTitle className="text-lg font-bold text-lime-400">
// //                 {site.username}
// //               </CardTitle>
// //               <CardDescription className="text-zinc-400">
// //                 Template: {site.templateName}
// //               </CardDescription>
// //               <CardDescription className="text-zinc-300">
// //                 Content: {site.siteData.content}
// //               </CardDescription>
// //             </CardHeader>
// //             <CardContent className="text-lime-400">
// //               Link
// //               <a
// //                 href={site.liveUrl}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-400 hover:underline mb-2 block"
// //               >
// //                 {site.liveUrl.slice(0, 17)}
// //               </a>
// //               <br />
// //               ID <br /> <div className="text-white">{site.siteId}</div>
// //             </CardContent>
// //             <CardFooter className="flex justify-end mt-4">
// //               <Button
// //                 variant="destructive"
// //                 size="sm"
// //                 disabled={deleting[site.siteId]}
// //                 onClick={() => handleDelete(site.siteId)}
// //               >
// //                 {deleting[site.siteId] ? (
// //                   <Loader2 className="animate-spin mr-2 h-4 w-4" />
// //                 ) : (
// //                   "Delete"
// //                 )}
// //               </Button>
// //             </CardFooter>
// //           </Card>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WebsiteDashboard;
// import { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Loader2 } from "lucide-react";

// const WebsiteDashboard = () => {
//   const [websites, setWebsites] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [deleting, setDeleting] = useState({}); // Track delete loading state per site

//   const fetchWebsites = async () => {
//     const email = localStorage.getItem("email");
//     if (!email) {
//       console.error("No email found in local storage");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/user-sites/${email}`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setWebsites(data);
//       } else {
//         throw new Error("Failed to fetch websites");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error: Failed to fetch websites. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWebsites();
//   }, []);

//   const handleDelete = async (siteId) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this website?"
//     );
//     if (!confirmDelete) return;

//     setDeleting((prev) => ({ ...prev, [siteId]: true })); // Set loading for specific site
//     try {
//       const response = await fetch("http://localhost:8000/delete-site", {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ siteId }),
//       });
//       if (response.ok) {
//         alert("Your website has been successfully deleted.");
//         fetchWebsites();
//       } else {
//         throw new Error("Failed to delete website");
//       }
//     } catch (error) {
//       alert("Error: Failed to delete the website. Please try again.");
//     } finally {
//       setDeleting((prev) => ({ ...prev, [siteId]: false })); // Reset loading for specific site
//     }
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen p-8">
//       <div className="flex justify-start items-center flex-wrap">
//         {websites.map((site) => (
//           <Card key={site.siteId} className="bg-zinc-900 text-white w-72 m-2">
//             <CardHeader>
//               <CardTitle className="text-lg font-bold text-lime-400">
//                 {site.username}
//               </CardTitle>
//               <CardDescription className="text-zinc-400">
//                 Template: {site.templateName}
//               </CardDescription>
//               <CardDescription className="text-zinc-300">
//                 Content: {site.siteData.content}
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="text-lime-400">
//               Link
//               <a
//                 href={site.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline mb-2 block"
//               >
//                 {site.liveUrl.slice(0, 17)}
//               </a>
//               <br />
//               ID <br /> <div className="text-white">{site.siteId}</div>
//             </CardContent>
//             <CardFooter className="flex justify-end mt-4">
//               <Button
//                 variant="destructive"
//                 size="sm"
//                 disabled={deleting[site.siteId]}
//                 onClick={() => handleDelete(site.siteId)}
//               >
//                 {deleting[site.siteId] ? (
//                   <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                 ) : (
//                   "Delete"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WebsiteDashboard;

//correct gpt
// import { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Loader2 } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
// } from "@/components/ui/dialog";

// const WebsiteDashboard = () => {
//   const [websites, setWebsites] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [deleting, setDeleting] = useState({});
//   const [deleteSiteId, setDeleteSiteId] = useState(null); // Stores siteId for confirmation

//   const fetchWebsites = async () => {
//     const email = localStorage.getItem("email");
//     if (!email) {
//       console.error("No email found in local storage");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/user-sites/${email}`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setWebsites(data);
//       } else {
//         throw new Error("Failed to fetch websites");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Error: Failed to fetch websites. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchWebsites();
//   }, []);

//   const handleDelete = async () => {
//     if (!deleteSiteId) return;

//     setDeleting((prev) => ({ ...prev, [deleteSiteId]: true }));
//     try {
//       const response = await fetch("http://localhost:8000/delete-site", {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ siteId: deleteSiteId }),
//       });
//       if (response.ok) {
//         alert("Your website has been successfully deleted.");
//         fetchWebsites();
//       } else {
//         throw new Error("Failed to delete website");
//       }
//     } catch (error) {
//       alert("Error: Failed to delete the website. Please try again.");
//     } finally {
//       setDeleting((prev) => ({ ...prev, [deleteSiteId]: false }));
//       setDeleteSiteId(null); // Close the modal
//     }
//   };

//   return (
//     <div className="bg-zinc-950 min-h-screen p-8">
//       <div className="flex justify-start items-center flex-wrap">
//         {websites.map((site) => (
//           <Card key={site.siteId} className="bg-zinc-900 text-white w-72 m-2">
//             <CardHeader>
//               <CardTitle className="text-lg font-bold text-lime-400">
//                 {site.username}
//               </CardTitle>
//               <CardDescription className="text-zinc-400">
//                 Template: {site.templateName}
//               </CardDescription>
//               <CardDescription className="text-zinc-300">
//                 Content: {site.siteData.content}
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="text-lime-400">
//               Link
//               <a
//                 href={site.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline mb-2 block"
//               >
//                 {site.liveUrl.slice(0, 17)}
//               </a>
//               <br />
//               ID <br /> <div className="text-white">{site.siteId}</div>
//             </CardContent>
//             <CardFooter className="flex justify-end mt-4">
//               <Button
//                 variant="destructive"
//                 size="sm"
//                 disabled={deleting[site.siteId]}
//                 onClick={() => setDeleteSiteId(site.siteId)}
//               >
//                 {deleting[site.siteId] ? (
//                   <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                 ) : (
//                   "Delete"
//                 )}
//               </Button>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>

//       {/* Custom Delete Confirmation Popup */}
//       {deleteSiteId && (
//         <Dialog
//           open={!!deleteSiteId}
//           onOpenChange={() => setDeleteSiteId(null)}
//         >
//           <DialogContent className="bg-zinc-900 text-white p-6 rounded-lg">
//             <DialogHeader className="text-lg font-bold text-lime-400">
//               Confirm Deletion
//             </DialogHeader>
//             <p>Are you sure you want to delete this website?</p>
//             <DialogFooter className="flex justify-end mt-4">
//               <Button
//                 variant="outline"
//                 className="text-black"
//                 onClick={() => setDeleteSiteId(null)}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 variant="destructive"
//                 disabled={deleting[deleteSiteId]}
//                 onClick={handleDelete}
//                 className="ml-2"
//               >
//                 {deleting[deleteSiteId] ? (
//                   <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                 ) : (
//                   "Delete"
//                 )}
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       )}
//     </div>
//   );
// };

// export default WebsiteDashboard;

//v0

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Trash2, Loader2, Globe, ExternalLink, RefreshCw } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogFooter,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Badge } from "@/components/ui/badge";

// // Sample website data for empty state
// const sampleWebsites = [
//   {
//     siteId: "sample-site-1",
//     username: "Demo Portfolio",
//     templateName: "Portfolio",
//     liveUrl: "https://demo-portfolio.example.com",
//     siteData: {
//       content:
//         "A professional portfolio showcasing creative work with a minimal design and interactive elements.",
//     },
//   },
//   {
//     siteId: "sample-site-2",
//     username: "Sample Blog",
//     templateName: "Blog",
//     liveUrl: "https://sample-blog.example.com",
//     siteData: {
//       content:
//         "A content-focused blog with categories, featured posts, and newsletter subscription.",
//     },
//   },
//   {
//     siteId: "sample-site-3",
//     username: "Demo Store",
//     templateName: "E-commerce",
//     liveUrl: "https://demo-store.example.com",
//     siteData: {
//       content:
//         "An online store with product catalog, shopping cart, and secure checkout process.",
//     },
//   },
//   {
//     siteId: "sample-site-4",
//     username: "Landing Example",
//     templateName: "Landing",
//     liveUrl: "https://landing-example.example.com",
//     siteData: {
//       content:
//         "A high-conversion landing page with call-to-action buttons and testimonial sections.",
//     },
//   },
// ];

// const WebsiteDashboard = () => {
//   const [websites, setWebsites] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState({});
//   const [deleteSiteId, setDeleteSiteId] = useState(null);
//   const [refreshing, setRefreshing] = useState(false);
//   const [deleteError, setDeleteError] = useState(null);

//   const fetchWebsites = async () => {
//     const email = localStorage.getItem("email");
//     if (!email) {
//       console.error("No email found in local storage");
//       setLoading(false);
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         `http://localhost:8000/user-sites/${email}`,
//         {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         setWebsites(data.length > 0 ? data : []);
//       } else {
//         throw new Error("Failed to fetch websites");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setWebsites([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const refreshWebsites = async () => {
//     setRefreshing(true);
//     await fetchWebsites();
//     setRefreshing(false);
//   };

//   useEffect(() => {
//     fetchWebsites();
//   }, []);

//   const handleDelete = async () => {
//     if (!deleteSiteId) return;

//     setDeleteError(null);
//     setDeleting((prev) => ({ ...prev, [deleteSiteId]: true }));

//     try {
//       // Get email from localStorage for authentication purposes
//       const email = localStorage.getItem("email");
//       console.log("pass1");
//       if (!email) {
//         throw new Error("User email not found. Please log in again.");
//       }

//       const response = await fetch("http://localhost:8000/delete-site", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           siteId: deleteSiteId,
//           // email: email, // Include email for authentication
//         }),
//       });

//       // Check response status and handle accordingly
//       if (response.ok) {
//         const result = await response.json();
//         console.log("Delete successful:", result);

//         // Update local state to remove the deleted website
//         setWebsites(websites.filter((site) => site.siteId !== deleteSiteId));
//       } else {
//         // If the server returned an error response
//         const errorData = await response.json().catch(() => ({}));
//         console.error("Server error:", errorData);
//         throw new Error(errorData.message || "Failed to delete website");
//       }
//     } catch (error) {
//       console.error("Error during deletion:", error);
//       setDeleteError(
//         error.message || "An error occurred while deleting the website"
//       );
//     } finally {
//       setDeleting((prev) => ({ ...prev, [deleteSiteId]: false }));
//       setDeleteSiteId(null);
//     }
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     show: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//       },
//     },
//   };

//   // Render loading skeletons
//   const renderSkeletons = () => {
//     return Array(4)
//       .fill(0)
//       .map((_, index) => (
//         <motion.div
//           key={`skeleton-${index}`}
//           variants={itemVariants}
//           className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
//         >
//           <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm h-[280px] overflow-hidden relative group">
//             <CardHeader>
//               <Skeleton className="h-6 w-3/4 bg-zinc-800" />
//               <Skeleton className="h-4 w-1/2 bg-zinc-800 mt-2" />
//               <Skeleton className="h-4 w-full bg-zinc-800 mt-2" />
//             </CardHeader>
//             <CardContent>
//               <Skeleton className="h-4 w-1/3 bg-zinc-800 mb-2" />
//               <Skeleton className="h-4 w-2/3 bg-zinc-800 mb-4" />
//               <Skeleton className="h-4 w-1/4 bg-zinc-800" />
//               <Skeleton className="h-4 w-1/2 bg-zinc-800 mt-2" />
//             </CardContent>
//             <CardFooter>
//               <Skeleton className="h-9 w-20 bg-zinc-800 ml-auto" />
//             </CardFooter>
//           </Card>
//         </motion.div>
//       ));
//   };

//   // Render a website card (either sample or real)
//   const WebsiteCard = ({ site, isSample }) => (
//     <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm h-full overflow-hidden relative group transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_15px_rgba(132,204,22,0.15)] hover:-translate-y-1">
//       <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       {isSample && (
//         <div className="absolute top-3 right-3 z-10">
//           <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px]">
//             Sample
//           </Badge>
//         </div>
//       )}

//       <CardHeader>
//         <div className="flex justify-between items-start">
//           <CardTitle className="text-lg font-bold text-lime-400 group-hover:text-lime-300 transition-colors">
//             {site.username}
//           </CardTitle>
//           <Badge
//             variant="outline"
//             className="bg-zinc-800/50 text-xs border-zinc-700 px-2"
//           >
//             {site.templateName}
//           </Badge>
//         </div>
//         <CardDescription className="text-zinc-400 line-clamp-2 mt-2">
//           {site.siteData.content}
//         </CardDescription>
//       </CardHeader>

//       <CardContent>
//         <div className="space-y-4">
//           <div>
//             <p className="text-lime-400 text-sm mb-1">Live URL</p>
//             <a
//               href={isSample ? "#" : site.liveUrl}
//               onClick={isSample ? (e) => e.preventDefault() : undefined}
//               target={isSample ? undefined : "_blank"}
//               rel={isSample ? undefined : "noopener noreferrer"}
//               className="text-blue-400 hover:text-blue-300 flex items-center text-sm group-hover:underline transition-all"
//             >
//               {site.liveUrl.slice(0, 30)}
//               {site.liveUrl.length > 30 ? "..." : ""}
//               <ExternalLink className="h-3 w-3 ml-1 inline" />
//             </a>
//           </div>

//           <div>
//             <p className="text-lime-400 text-sm mb-1">Site ID</p>
//             <p className="text-zinc-300 text-sm font-mono">
//               {site.siteId.slice(0, 12)}
//               {site.siteId.length > 12 ? "..." : ""}
//             </p>
//           </div>
//         </div>
//       </CardContent>

//       <CardFooter className="flex justify-end mt-auto">
//         <Button
//           variant="ghost"
//           size="sm"
//           disabled={isSample || deleting[site.siteId]}
//           onClick={
//             isSample
//               ? undefined
//               : () => {
//                   setDeleteSiteId(site.siteId);
//                   console.log("called");
//                   handleDelete();
//                 }
//           }
//           className="text-zinc-400 hover:text-red-400 hover:bg-red-400/10 transition-colors border-red-200"
//         >
//           {deleting[site.siteId] ? (
//             <Loader2 className="animate-spin h-4 w-4" />
//           ) : (
//             <>
//               <Trash2 className="h-4 w-4 mr-1" />
//               Delete
//             </>
//           )}
//         </Button>
//       </CardFooter>
//     </Card>
//   );

//   return (
//     <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 min-h-screen p-4 md:p-8">
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-8">
//           <div className="flex justify-between items-center mb-6">
//             <motion.h1
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-lime-400 to-emerald-400 text-transparent bg-clip-text"
//             >
//               Your Websites
//             </motion.h1>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <Button
//                 onClick={refreshWebsites}
//                 variant="outline"
//                 size="sm"
//                 disabled={refreshing || loading}
//                 className="border-zinc-700 text-zinc-300 hover:text-lime-400 hover:border-lime-400 transition-all"
//               >
//                 <RefreshCw
//                   className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
//                 />
//                 Refresh
//               </Button>
//             </motion.div>
//           </div>
//           <motion.div
//             initial={{ opacity: 0, width: "0%" }}
//             animate={{ opacity: 1, width: "100%" }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"
//           />
//         </header>

//         <AnimatePresence mode="wait">
//           {loading ? (
//             <motion.div
//               key="loading"
//               variants={containerVariants}
//               initial="hidden"
//               animate="show"
//               exit={{ opacity: 0 }}
//               className="flex flex-wrap gap-4"
//             >
//               {renderSkeletons()}
//             </motion.div>
//           ) : websites.length === 0 ? (
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 className="bg-zinc-800/30 border border-zinc-700/50 rounded-lg p-4 mb-6"
//               >
//                 <div className="flex items-center gap-3 mb-2">
//                   <div className="bg-amber-500/20 p-2 rounded-full">
//                     <Globe className="h-5 w-5 text-amber-400" />
//                   </div>
//                   <h2 className="text-zinc-300 font-medium">
//                     No websites found
//                   </h2>
//                 </div>
//                 <p className="text-zinc-400 text-sm">
//                   You haven't created any websites yet. Here are some examples
//                   of what your dashboard could look like.
//                 </p>
//               </motion.div>

//               <motion.div
//                 key="sample-websites"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="show"
//                 exit={{ opacity: 0 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 {sampleWebsites.map((site) => (
//                   <motion.div
//                     key={site.siteId}
//                     variants={itemVariants}
//                     layout
//                     className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
//                   >
//                     <WebsiteCard site={site} isSample={true} />
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex justify-center mt-8"
//               >
//                 <Button className="bg-lime-500 hover:bg-lime-600 text-zinc-900">
//                   Create Your Website
//                 </Button>
//               </motion.div>
//             </div>
//           ) : (
//             <motion.div
//               key="websites"
//               variants={containerVariants}
//               initial="hidden"
//               animate="show"
//               exit={{ opacity: 0 }}
//               className="flex flex-wrap gap-4"
//             >
//               {websites.map((site) => (
//                 <motion.div
//                   key={site.siteId}
//                   variants={itemVariants}
//                   layout
//                   className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
//                 >
//                   <WebsiteCard site={site} isSample={false} />
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Delete Confirmation Dialog */}
//       <AnimatePresence>
//         {deleteSiteId && (
//           <Dialog
//             open={!!deleteSiteId}
//             onOpenChange={(open) => !open && setDeleteSiteId(null)}
//           >
//             <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-md">
//               <DialogHeader>
//                 <DialogTitle className="text-xl font-bold text-lime-400">
//                   Confirm Deletion
//                 </DialogTitle>
//                 <DialogDescription className="text-zinc-400">
//                   This action cannot be undone. This will permanently delete
//                   your website.
//                 </DialogDescription>
//               </DialogHeader>

//               <div className="bg-zinc-800/50 p-3 rounded-md border border-zinc-700 my-2">
//                 <p className="text-sm text-zinc-300">
//                   Are you sure you want to delete this website?
//                 </p>
//                 {deleteError && (
//                   <div className="mt-2 text-sm text-red-400 bg-red-500/10 p-2 rounded border border-red-500/20">
//                     {deleteError}
//                   </div>
//                 )}
//               </div>

//               <DialogFooter className="flex sm:justify-end gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   onClick={() => setDeleteSiteId(null)}
//                   className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
//                 >
//                   Cancel
//                 </Button>
//                 <Button
//                   variant="destructive"
//                   disabled={deleting[deleteSiteId]}
//                   onClick={handleDelete}
//                   className="bg-red-500/80 hover:bg-red-600 text-white"
//                 >
//                   {deleting[deleteSiteId] ? (
//                     <Loader2 className="animate-spin mr-2 h-4 w-4" />
//                   ) : (
//                     <>
//                       <Trash2 className="h-4 w-4 mr-2" />
//                       Delete Website
//                     </>
//                   )}
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default WebsiteDashboard;

//cloude
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Loader2, ExternalLink, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

const WebsiteDashboard = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState({});
  const [deleteSiteId, setDeleteSiteId] = useState(null);
  const [copied, setCopied] = useState(null);

  const fetchWebsites = async () => {
    const email = localStorage.getItem("email");
    if (!email) {
      console.error("No email found in local storage");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/user-sites/${email}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setWebsites(data);
      } else {
        throw new Error("Failed to fetch websites");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error: Failed to fetch websites. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  const handleDelete = async () => {
    if (!deleteSiteId) return;

    setDeleting((prev) => ({ ...prev, [deleteSiteId]: true }));
    try {
      const response = await fetch("http://localhost:8000/delete-site", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteId: deleteSiteId }),
      });
      if (response.ok) {
        // Remove the deleted site with animation
        setWebsites(websites.filter((site) => site.siteId !== deleteSiteId));
        setTimeout(() => {
          alert("Your website has been successfully deleted.");
        }, 500);
      } else {
        throw new Error("Failed to delete website");
      }
    } catch (error) {
      alert("Error: Failed to delete the website. Please try again.");
    } finally {
      setDeleting((prev) => ({ ...prev, [deleteSiteId]: false }));
      setDeleteSiteId(null);
    }
  };

  const copyToClipboard = (text, siteId) => {
    navigator.clipboard.writeText(text);
    setCopied(siteId);
    setTimeout(() => setCopied(null), 2000);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  if (loading) {
    return (
      <div className="bg-zinc-950 min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-lime-400 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-zinc-950 to-zinc-900 min-h-screen p-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-lime-400 mb-8 text-center"
      >
        Your Websites
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
      >
        {websites.map((site) => (
          <motion.div key={site.siteId} variants={item} layout>
            <Card className="bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm text-white h-full hover:shadow-lg hover:shadow-lime-400/10 transition-all duration-300 overflow-hidden group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CardHeader className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardTitle className="text-xl font-bold text-lime-400 group-hover:text-lime-300 transition-colors">
                    {site.username}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Template: {site.templateName}
                  </CardDescription>
                  <CardDescription className="text-zinc-300 truncate">
                    <span className="font-medium">Content:</span>{" "}
                    {site.siteData.content}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-lime-400 text-sm font-medium">
                      Live URL
                    </label>
                    <div className="flex items-center space-x-2 bg-zinc-800/60 p-2 rounded-md">
                      <a
                        href={site.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 truncate flex-1 transition-colors"
                      >
                        {site.liveUrl}
                      </a>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          copyToClipboard(site.liveUrl, `url-${site.siteId}`)
                        }
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        {copied === `url-${site.siteId}` ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-lime-400 text-xs"
                          >
                            Copied!
                          </motion.span>
                        ) : (
                          <Copy size={16} />
                        )}
                      </motion.button>
                      <a
                        href={site.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-lime-400 text-sm font-medium">
                      Site ID
                    </label>
                    <div className="flex items-center space-x-2 bg-zinc-800/60 p-2 rounded-md">
                      <span className="text-zinc-300 truncate flex-1">
                        {site.siteId}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          copyToClipboard(site.siteId, `id-${site.siteId}`)
                        }
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        {copied === `id-${site.siteId}` ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-lime-400 text-xs"
                          >
                            Copied!
                          </motion.span>
                        ) : (
                          <Copy size={16} />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-end pt-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="destructive"
                      size="sm"
                      disabled={deleting[site.siteId]}
                      onClick={() => setDeleteSiteId(site.siteId)}
                      className="bg-red-500/80 hover:bg-red-600 transition-colors"
                    >
                      {deleting[site.siteId] ? (
                        <Loader2 className="animate-spin h-4 w-4" />
                      ) : (
                        <>
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </>
                      )}
                    </Button>
                  </motion.div>
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {websites.length === 0 && !loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16 text-zinc-400"
        >
          <p className="text-xl">No websites found</p>
          <p className="mt-2">Create your first website to see it here</p>
        </motion.div>
      )}

      {/* Delete Confirmation Modal */}
      <Dialog
        open={!!deleteSiteId}
        onOpenChange={(open) => !open && setDeleteSiteId(null)}
      >
        <DialogContent className="bg-zinc-900 border border-zinc-800 text-white p-6 rounded-lg max-w-sm mx-auto">
          <DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-bold text-red-400 mb-2"
            >
              Confirm Deletion
            </motion.div>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <p>
              Are you sure you want to delete this website? This action cannot
              be undone.
            </p>
          </motion.div>

          <DialogFooter className="flex justify-end gap-3 mt-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                onClick={() => setDeleteSiteId(null)}
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                Cancel
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="destructive"
                disabled={deleting[deleteSiteId]}
                onClick={handleDelete}
                className="bg-red-500/80 hover:bg-red-600 transition-colors"
              >
                {deleting[deleteSiteId] ? (
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                ) : (
                  <>
                    <Trash2 className="h-4 w-4 mr-1" /> Delete
                  </>
                )}
              </Button>
            </motion.div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WebsiteDashboard;
