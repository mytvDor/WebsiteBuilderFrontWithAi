import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import UpdateWebsite from "./UpdateWebsite";

const SiteSelection = () => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserSites = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const userId = localStorage.getItem("email");
        if (!userId) {
          throw new Error("User not logged in");
        }

        const response = await fetch(
          `http://localhost:8000/user-sites/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch sites: ${response.status} ${response.statusText}`
          );
        }

        const sitesData = await response.json();
        setSites(sitesData);
      } catch (error) {
        console.error("Error fetching sites:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserSites();
  }, []);

  const handleSiteChange = (siteId) => {
    // Find the selected site's data
    const site = sites.find((site) => site.siteId === siteId);
    setSelectedSite(site);
  };

  if (selectedSite) {
    return (
      <UpdateWebsite site={selectedSite} onBack={() => setSelectedSite(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto bg-zinc-950 border-gray-800">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-white">
            Select Website to Update
          </CardTitle>
          <CardDescription className="text-gray-400">
            Choose one of your websites to modify.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center py-4">
              <p>Loading your websites...</p>
            </div>
          ) : error ? (
            <div className="text-center py-4 text-red-500">
              <p>{error}</p>
              <Button
                className="mt-4 bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
                onClick={() => (window.location.href = "/")}
              >
                Go Home
              </Button>
            </div>
          ) : sites.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-400">You don't have any websites yet.</p>
              <Button
                className="mt-4 bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black"
                onClick={() => (window.location.href = "/create-website")}
              >
                Create a Website
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <Select onValueChange={handleSiteChange}>
                <SelectTrigger className="w-full bg-zinc-900 border-gray-700 text-white">
                  <SelectValue placeholder="Select a website" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 text-white border-gray-700">
                  {sites.map((site) => (
                    <SelectItem key={site.siteId} value={site.siteId}>
                      {site.username}
                      {/* {site.liveUrl?.replace("https://", "").split(".")[0]} */}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteSelection;
