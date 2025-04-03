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
import { Toaster, toast } from "react-hot-toast";

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
      // alert("Error: Failed to fetch websites. Please try again.");
      toast.error("Failed to fetch websites");
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
          // alert("Your website has been successfully deleted.");
          toast.success("website deleted successfully!");
        }, 500);
      } else {
        throw new Error("Failed to delete website");
      }
    } catch (error) {
      // alert("Error: Failed to delete the website. Please try again.")
      toast.error("Failed to delete the website.");
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
      <Toaster position="top-center" />

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
        <Toaster position="top-center" />

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
                className="border-zinc-700 text-zinc-900 hover:bg-zinc-800 hover:text-white transition-colors"
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
