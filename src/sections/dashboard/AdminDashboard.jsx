import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Navbar from "../Navbar";
import { useNavigate, Outlet } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
export default function AdminDashboard() {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      console.log("Error: Failed to fetch websites.");

      toast.error("Error: Failed to fetch websites.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Toaster position="top-center" />

        {loading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-6 w-6" />
          </div>
        ) : (
          <Outlet context={{ websites, setWebsites, fetchWebsites }} />
        )}
      </div>
    </div>
  );
}
