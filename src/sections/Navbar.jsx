import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(location.pathname);
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setIsAuthenticated(!!token && !!email);
  }, [location]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setIsAuthenticated(false);
    navigate("/auth");
  };

  const isActive = (path) => currentPath === path;

  const getNavLinkClass = (path) => {
    const baseClasses =
      "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50";

    return isActive(path)
      ? `${baseClasses} bg-lime-400 text-gray-900 dark:bg-gray-800 dark:text-gray-50`
      : `${baseClasses} bg-white dark:bg-gray-950`;
  };

  const getMobileLinkClass = (path) => {
    const baseClasses = "flex w-full items-center py-2 text-lg font-semibold";

    return isActive(path)
      ? `${baseClasses} text-lime-600 dark:text-lime-400`
      : baseClasses;
  };

  return (
    <header className="flex h-14 w-full shrink-0 items-center px-4 md:px-6 justify-between">
      <div className="flex items-center">
        <Link to="/" prefetch="false" className="flex items-center">
          <MountainIcon className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">WebCraft</span>
        </Link>
      </div>

      <NavigationMenu className="hidden lg:flex mx-auto">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link to="/" className={getNavLinkClass("/")} prefetch="false">
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/createsite" className={getNavLinkClass("/createsite")}>
              Create
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/update" className={getNavLinkClass("/update")}>
              Update
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/websitedashboard"
              className={getNavLinkClass("/websitedashboard")}
            >
              Dashboard
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/sitewithai" className={getNavLinkClass("/sitewithai")}>
              Ai
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/services" className={getNavLinkClass("/services")}>
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/contact" className={getNavLinkClass("/contact")}>
              Contact
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink>
            {" "}
            {isAuthenticated && (
              <Button
                variant="outline"
                size="sm"
                className=" text-red-500 border-2px border-red-500 hover:bg-red-500 hover:text-white"
                onClick={handleSignOut}
              >
                Logout
              </Button>
            )}
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Right Side (Logout) */}
      <div className="flex gap-2 items-center ">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex items-center mb-6">
              <MountainIcon className="h-6 w-6 mr-2" />
              <span className="font-bold text-lg">WebCraft</span>
            </div>
            <div className="grid gap-2 py-6">
              <Link
                to="/"
                className={getMobileLinkClass("/")}
                onClick={() => setIsSheetOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/createsite"
                className={getMobileLinkClass("/createsite")}
                onClick={() => setIsSheetOpen(false)}
              >
                Create
              </Link>
              <Link
                to="/update"
                className={getMobileLinkClass("/update")}
                onClick={() => setIsSheetOpen(false)}
              >
                Update
              </Link>
              <Link
                to="/websitedashboard"
                className={getMobileLinkClass("/websitedashboard")}
                onClick={() => setIsSheetOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/sitewithai"
                className={getMobileLinkClass("/sitewithai")}
                onClick={() => setIsSheetOpen(false)}
              >
                Ai
              </Link>
              <Link
                to="/services"
                className={getMobileLinkClass("/services")}
                onClick={() => setIsSheetOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={getMobileLinkClass("/contact")}
                onClick={() => setIsSheetOpen(false)}
              >
                Contact
              </Link>
              {isAuthenticated && (
                <Button
                  variant="outline"
                  className="text-red-500 border-2px border-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => {
                    handleSignOut();
                    setIsSheetOpen(false);
                  }}
                >
                  Logout
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
