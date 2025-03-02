// // // // // /sections/Navbar.jsx
// // // // import { useState } from 'react';

// // // // const Navbar = ({ currentSection, setCurrentSection }) => {
// // // //   return (
// // // //     <nav className="flex justify-between p-4 bg-black text-white">
// // // //       <h1 className="text-lg font-bold">Admin Dashboard</h1>
// // // //       <div>
// // // //         <button
// // // //           className={`px-4 py-2 ${currentSection === 'create' ? 'bg-blue-500' : 'bg-gray-700'} rounded`}
// // // //           onClick={() => setCurrentSection('create')}
// // // //         >
// // // //           Create Website
// // // //         </button>
// // // //         <button
// // // //           className={`px-4 py-2 ml-2 ${currentSection === 'dashboard' ? 'bg-blue-500' : 'bg-gray-700'} rounded`}
// // // //           onClick={() => setCurrentSection('dashboard')}
// // // //         >
// // // //           Your Websites
// // // //         </button>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;
// // // import { Link } from 'react-router-dom';

// // // const Navbar = () => {
// // //   return (
// // //     <nav className="flex justify-between p-4 bg-black text-white">
// // //       <h1 className="text-lg font-bold">Admin Dashboard</h1>
// // //       <div>
// // //         <Link to="create">
// // //           <button className={`px-4 py-2 rounded`}>Create Website</button>
// // //         </Link>
// // //         <Link to="your-websites">
// // //           <button className={`px-4 py-2 ml-2 rounded`}>Your Websites</button>
// // //         </Link>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

//export default Navbar;

//gpt
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   return (
//     <header className="flex h-14 w-full shrink-0 items-center px-4 md:px-6">
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="lg:hidden">
//             <MenuIcon className="h-6 w-6" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="left">
//           <Link to="/" prefetch="false">
//             <MountainIcon className="h-6 w-6" />
//             <span className="sr-only">Acme Inc</span>
//           </Link>
//           <div className="grid gap-2 py-6">
//             <Link
//               to="/createsite"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Create
//             </Link>
//             <Link
//               to="/websitedashboard"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Dashboard
//             </Link>
//             <Link
//               to="/sitewithai"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Ai
//             </Link>
//             <Link
//               to="/services"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Services
//             </Link>
//             <Link
//               to="/portfolio"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Portfolio
//             </Link>
//             <Link
//               to="/contact"
//               className="flex w-full items-center py-2 text-lg font-semibold"
//               prefetch="false"
//             >
//               Contact
//             </Link>
//           </div>
//         </SheetContent>
//       </Sheet>
//       <Link to="/" className="mr-6 hidden lg:flex" prefetch="false">
//         <MountainIcon className="h-6 w-6" />
//         <span className="sr-only">Acme Inc</span>
//       </Link>
//       <NavigationMenu className="hidden lg:flex">
//         <NavigationMenuList>
//           <NavigationMenuLink asChild>
//             <Link
//               to="/createsite"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Create
//             </Link>
//           </NavigationMenuLink>

//           <NavigationMenuLink asChild>
//             <Link
//               to="/websitedashboard"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Dashboard
//             </Link>
//           </NavigationMenuLink>

//           <NavigationMenuLink asChild>
//             <Link
//               to="/sitewithai"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Ai
//             </Link>
//           </NavigationMenuLink>

//           <NavigationMenuLink asChild>
//             <Link
//               to="/services"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Services
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link
//               to="/portfolio"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Portfolio
//             </Link>
//           </NavigationMenuLink>
//           <NavigationMenuLink asChild>
//             <Link
//               to="/contact"
//               className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-lime-400 hover:text-gray-900 focus:bg-lime-400 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-lime-400/50 data-[state=open]:bg-lime-400/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
//               prefetch="false"
//             >
//               Contact
//             </Link>
//           </NavigationMenuLink>
//         </NavigationMenuList>
//       </NavigationMenu>
//     </header>
//   );
// }

// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const isActive = (path) => {
    return currentPath === path;
  };

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
      {/* Website Logo and Name on the left */}
      <div className="flex items-center">
        <Link to="/" prefetch="false" className="flex items-center">
          <MountainIcon className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">WebCraft</span>
        </Link>
      </div>

      {/* Desktop Navigation - Center */}
      <NavigationMenu className="hidden lg:flex mx-auto">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to="/createsite"
              className={getNavLinkClass("/createsite")}
              prefetch="false"
            >
              Create
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/websitedashboard"
              className={getNavLinkClass("/websitedashboard")}
              prefetch="false"
            >
              Dashboard
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/sitewithai"
              className={getNavLinkClass("/sitewithai")}
              prefetch="false"
            >
              Ai
            </Link>
          </NavigationMenuLink>

          <NavigationMenuLink asChild>
            <Link
              to="/services"
              className={getNavLinkClass("/services")}
              prefetch="false"
            >
              Services
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/portfolio"
              className={getNavLinkClass("/portfolio")}
              prefetch="false"
            >
              Portfolio
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              to="/contact"
              className={getNavLinkClass("/contact")}
              prefetch="false"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Menu - Right Side */}
      <Sheet>
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
              to="/createsite"
              className={getMobileLinkClass("/createsite")}
              prefetch="false"
            >
              Create
            </Link>
            <Link
              to="/websitedashboard"
              className={getMobileLinkClass("/websitedashboard")}
              prefetch="false"
            >
              Dashboard
            </Link>
            <Link
              to="/sitewithai"
              className={getMobileLinkClass("/sitewithai")}
              prefetch="false"
            >
              Ai
            </Link>
            <Link
              to="/services"
              className={getMobileLinkClass("/services")}
              prefetch="false"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={getMobileLinkClass("/portfolio")}
              prefetch="false"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={getMobileLinkClass("/contact")}
              prefetch="false"
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
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

//cloude
// // // import { useEffect, useState } from "react";
// // // import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// // // import { Button } from "@/components/ui/button";
// // // import { Link, useLocation } from "react-router-dom";
// // // import {
// // //   NavigationMenu,
// // //   NavigationMenuList,
// // //   NavigationMenuLink,
// // // } from "@/components/ui/navigation-menu";
// // // import { motion, AnimatePresence } from "framer-motion";

// // // export default function Navbar() {
// // //   const location = useLocation();
// // //   const [activeRoute, setActiveRoute] = useState("/");
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   useEffect(() => {
// // //     setActiveRoute(location.pathname);
// // //   }, [location]);

// // //   const routes = [
// // //     { path: "/createsite", label: "Create" },
// // //     { path: "/websitedashboard", label: "Dashboard" },
// // //     { path: "/sitewithai", label: "AI" },
// // //     { path: "/services", label: "Services" },
// // //     { path: "/portfolio", label: "Portfolio" },
// // //     { path: "/contact", label: "Contact" },
// // //   ];

// // //   const isActive = (path) => activeRoute === path;

// // //   return (
// // //     <motion.header
// // //       initial={{ y: -100 }}
// // //       animate={{ y: 0 }}
// // //       transition={{ type: "spring", stiffness: 100, damping: 20 }}
// // //       className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800"
// // //     >
// // //       <Sheet open={isOpen} onOpenChange={setIsOpen}>
// // //         <SheetTrigger asChild>
// // //           <Button
// // //             variant="outline"
// // //             size="icon"
// // //             className="lg:hidden border-lime-400/20 bg-zinc-900/50 hover:bg-lime-400/10 hover:border-lime-400/40"
// // //           >
// // //             <motion.div
// // //               animate={isOpen ? "open" : "closed"}
// // //               variants={{
// // //                 open: { rotate: 180 },
// // //                 closed: { rotate: 0 },
// // //               }}
// // //               transition={{ duration: 0.3 }}
// // //             >
// // //               <MenuIcon className="h-6 w-6 text-lime-400" />
// // //             </motion.div>
// // //             <span className="sr-only">Toggle navigation menu</span>
// // //           </Button>
// // //         </SheetTrigger>
// // //         <SheetContent
// // //           side="left"
// // //           className="bg-zinc-900 border-r border-zinc-800 p-0"
// // //         >
// // //           <div className="flex flex-col h-full">
// // //             <div className="p-4 border-b border-zinc-800">
// // //               <Link
// // //                 to="/"
// // //                 prefetch="false"
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="flex items-center"
// // //               >
// // //                 <motion.div
// // //                   whileHover={{ rotate: 15 }}
// // //                   transition={{ type: "spring", stiffness: 500 }}
// // //                 >
// // //                   <MountainIcon className="h-8 w-8 text-lime-400" />
// // //                 </motion.div>
// // //                 <span className="ml-2 text-xl font-bold text-white">
// // //                   WebCreator
// // //                 </span>
// // //               </Link>
// // //             </div>
// // //             <div className="p-4 flex-1">
// // //               <nav className="grid gap-2 py-6">
// // //                 {routes.map((route) => (
// // //                   <Link
// // //                     key={route.path}
// // //                     to={route.path}
// // //                     onClick={() => setIsOpen(false)}
// // //                     className={`flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
// // //                       isActive(route.path)
// // //                         ? "text-zinc-900 font-semibold"
// // //                         : "text-zinc-400 hover:text-white"
// // //                     }`}
// // //                     prefetch="false"
// // //                   >
// // //                     {isActive(route.path) && (
// // //                       <motion.div
// // //                         layoutId="mobile-active-bg"
// // //                         className="absolute inset-0 bg-lime-400 rounded-lg -z-10"
// // //                         initial={{ opacity: 0 }}
// // //                         animate={{ opacity: 1 }}
// // //                         exit={{ opacity: 0 }}
// // //                         transition={{
// // //                           type: "spring",
// // //                           stiffness: 300,
// // //                           damping: 30,
// // //                         }}
// // //                       />
// // //                     )}
// // //                     {route.label}
// // //                   </Link>
// // //                 ))}
// // //               </nav>
// // //             </div>
// // //           </div>
// // //         </SheetContent>
// // //       </Sheet>

// // //       <Link
// // //         to="/"
// // //         className="mr-6 hidden lg:flex items-center"
// // //         prefetch="false"
// // //       >
// // //         <motion.div
// // //           whileHover={{ scale: 1.2, rotate: 15 }}
// // //           transition={{ type: "spring", stiffness: 500 }}
// // //         >
// // //           <MountainIcon className="h-8 w-8 text-lime-400" />
// // //         </motion.div>
// // //         <motion.span
// // //           initial={{ opacity: 0, x: -10 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ delay: 0.2 }}
// // //           className="ml-2 text-xl font-bold text-white hidden md:inline"
// // //         >
// // //           WebCreator
// // //         </motion.span>
// // //       </Link>

// // //       <NavigationMenu className="hidden lg:flex ml-auto">
// // //         <NavigationMenuList className="gap-1">
// // //           <AnimatePresence>
// // //             {routes.map((route) => (
// // //               <NavigationMenuLink key={route.path} asChild>
// // //                 <Link
// // //                   to={route.path}
// // //                   className={`relative group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
// // //                     isActive(route.path)
// // //                       ? "text-zinc-900"
// // //                       : "text-zinc-400 hover:text-white"
// // //                   }`}
// // //                   prefetch="false"
// // //                 >
// // //                   {isActive(route.path) && (
// // //                     <motion.div
// // //                       layoutId="active-bg"
// // //                       className="absolute inset-0 bg-lime-400 rounded-md -z-10"
// // //                       initial={{ opacity: 0 }}
// // //                       animate={{ opacity: 1 }}
// // //                       exit={{ opacity: 0 }}
// // //                       transition={{
// // //                         type: "spring",
// // //                         stiffness: 300,
// // //                         damping: 30,
// // //                       }}
// // //                     />
// // //                   )}
// // //                   <motion.span
// // //                     whileHover={{ scale: isActive(route.path) ? 1 : 1.1 }}
// // //                     transition={{ type: "spring", stiffness: 500 }}
// // //                   >
// // //                     {route.label}
// // //                   </motion.span>
// // //                 </Link>
// // //               </NavigationMenuLink>
// // //             ))}
// // //           </AnimatePresence>

// // //           {/* <motion.div
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="ml-2"
// // //           >
// // //             <Button
// // //               variant="outline"
// // //               className="border-lime-400/30 bg-lime-400/10 text-lime-400 hover:bg-lime-400 hover:text-zinc-900"
// // //             >
// // //               Log In
// // //             </Button>
// // //           </motion.div> */}
// // //         </NavigationMenuList>
// // //       </NavigationMenu>
// // //     </motion.header>
// // //   );
// // // }

// // // function MenuIcon(props) {
// // //   return (
// // //     <svg
// // //       {...props}
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //     >
// // //       <line x1="4" x2="20" y1="12" y2="12" />
// // //       <line x1="4" x2="20" y1="6" y2="6" />
// // //       <line x1="4" x2="20" y1="18" y2="18" />
// // //     </svg>
// // //   );
// // // }

// // // function MountainIcon(props) {
// // //   return (
// // //     <svg
// // //       {...props}
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //     >
// // //       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
// // //     </svg>
// // //   );
// // // }

// // import { useEffect, useState } from "react";
// // import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// // import { Button } from "@/components/ui/button";
// // import { Link, useLocation } from "react-router-dom";
// // import {
// //   NavigationMenu,
// //   NavigationMenuList,
// //   NavigationMenuLink,
// // } from "@/components/ui/navigation-menu";
// // import { motion, AnimatePresence } from "framer-motion";

// // export default function Navbar() {
// //   const location = useLocation();
// //   const [activeRoute, setActiveRoute] = useState("/");
// //   const [isOpen, setIsOpen] = useState(false);

// //   useEffect(() => {
// //     setActiveRoute(location.pathname);
// //   }, [location]);

// //   const routes = [
// //     { path: "/createsite", label: "Create" },
// //     { path: "/websitedashboard", label: "Dashboard" },
// //     { path: "/sitewithai", label: "AI" },
// //     { path: "/services", label: "Services" },
// //     { path: "/portfolio", label: "Portfolio" },
// //     { path: "/contact", label: "Contact" },
// //   ];

// //   const isActive = (path) => activeRoute === path;

// //   return (
// //     <motion.header
// //       initial={{ y: -100 }}
// //       animate={{ y: 0 }}
// //       transition={{ type: "spring", stiffness: 100, damping: 20 }}
// //       className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800"
// //     >
// //       <div className="flex items-center lg:hidden">
// //         <Sheet open={isOpen} onOpenChange={setIsOpen}>
// //           <SheetTrigger asChild>
// //             <Button
// //               variant="outline"
// //               size="icon"
// //               className=" border-lime-400/20 bg-zinc-900/50 hover:bg-lime-400/10 hover:border-lime-400/40"
// //             >
// //               <motion.div
// //                 animate={isOpen ? "open" : "closed"}
// //                 variants={{
// //                   open: { rotate: 180 },
// //                   closed: { rotate: 0 },
// //                 }}
// //                 transition={{ duration: 0.3 }}
// //               >
// //                 <MenuIcon className="h-6 w-6 text-lime-400" />
// //               </motion.div>
// //               <span className="sr-only">Toggle navigation menu</span>
// //             </Button>
// //           </SheetTrigger>
// //           <SheetContent
// //             side="left"
// //             className="bg-zinc-900 border-r border-zinc-800 p-0"
// //           >
// //             <div className="flex flex-col h-full">
// //               <div className="p-4 border-b border-zinc-800">
// //                 <Link
// //                   to="/"
// //                   prefetch="false"
// //                   onClick={() => setIsOpen(false)}
// //                   className="flex items-center"
// //                 >
// //                   <motion.div
// //                     whileHover={{ rotate: 15 }}
// //                     transition={{ type: "spring", stiffness: 500 }}
// //                   >
// //                     <MountainIcon className="h-8 w-8 text-lime-400" />
// //                   </motion.div>
// //                   <span className="ml-2 text-xl font-bold text-white">
// //                     WebCreator
// //                   </span>
// //                 </Link>
// //               </div>
// //               <div className="p-4 flex-1">
// //                 <nav className="grid gap-2 py-6">
// //                   {routes.map((route) => (
// //                     <Link
// //                       key={route.path}
// //                       to={route.path}
// //                       onClick={() => setIsOpen(false)}
// //                       className={`flex items-center py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 relative overflow-hidden ${
// //                         isActive(route.path)
// //                           ? "text-zinc-900 font-semibold"
// //                           : "text-zinc-400 hover:text-white"
// //                       }`}
// //                       prefetch="false"
// //                     >
// //                       {isActive(route.path) && (
// //                         <motion.div
// //                           layoutId="mobile-active-bg"
// //                           className="absolute inset-0 bg-lime-400 rounded-lg -z-10"
// //                           initial={{ opacity: 0 }}
// //                           animate={{ opacity: 1 }}
// //                           exit={{ opacity: 0 }}
// //                           transition={{
// //                             type: "spring",
// //                             stiffness: 300,
// //                             damping: 30,
// //                           }}
// //                         />
// //                       )}
// //                       {route.label}
// //                     </Link>
// //                   ))}
// //                 </nav>
// //               </div>
// //               <div className="p-4 border-t border-zinc-800">
// //                 <Button
// //                   variant="outline"
// //                   size="lg"
// //                   className="w-full border-lime-400/50 text-lime-400 hover:bg-lime-400 hover:text-zinc-900"
// //                 >
// //                   Log Out
// //                 </Button>
// //               </div>
// //             </div>
// //           </SheetContent>
// //         </Sheet>

// //         {/* Website name next to hamburger icon */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -10 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ delay: 0.1 }}
// //           className="ml-3"
// //         >
// //           <Link to="/" className="flex items-center" prefetch="false">
// //             <motion.div
// //               whileHover={{ rotate: 5 }}
// //               transition={{ type: "spring", stiffness: 500 }}
// //               className="text-lime-400 mr-2"
// //             >
// //               <MountainIcon className="h-5 w-5" />
// //             </motion.div>
// //             <span className="text-lg font-bold text-white">WebCreator</span>
// //           </Link>
// //         </motion.div>
// //       </div>

// //       <Link
// //         to="/"
// //         className="mr-6 hidden lg:flex items-center"
// //         prefetch="false"
// //       >
// //         <motion.div
// //           whileHover={{ scale: 1.2, rotate: 15 }}
// //           transition={{ type: "spring", stiffness: 500 }}
// //         >
// //           <MountainIcon className="h-8 w-8 text-lime-400" />
// //         </motion.div>
// //         <motion.span
// //           initial={{ opacity: 0, x: -10 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="ml-2 text-xl font-bold text-white hidden md:inline"
// //         >
// //           WebCreator
// //         </motion.span>
// //       </Link>

// //       <NavigationMenu className="hidden lg:flex ml-auto">
// //         <NavigationMenuList className="gap-1">
// //           <AnimatePresence>
// //             {routes.map((route) => (
// //               <NavigationMenuLink key={route.path} asChild>
// //                 <Link
// //                   to={route.path}
// //                   className={`relative group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
// //                     isActive(route.path)
// //                       ? "text-zinc-900"
// //                       : "text-zinc-400 hover:text-white"
// //                   }`}
// //                   prefetch="false"
// //                 >
// //                   {isActive(route.path) && (
// //                     <motion.div
// //                       layoutId="active-bg"
// //                       className="absolute inset-0 bg-lime-400 rounded-md -z-10"
// //                       initial={{ opacity: 0 }}
// //                       animate={{ opacity: 1 }}
// //                       exit={{ opacity: 0 }}
// //                       transition={{
// //                         type: "spring",
// //                         stiffness: 300,
// //                         damping: 30,
// //                       }}
// //                     />
// //                   )}
// //                   <motion.span
// //                     whileHover={{ scale: isActive(route.path) ? 1 : 1.1 }}
// //                     transition={{ type: "spring", stiffness: 500 }}
// //                   >
// //                     {route.label}
// //                   </motion.span>
// //                 </Link>
// //               </NavigationMenuLink>
// //             ))}
// //           </AnimatePresence>

// //           <motion.div
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="ml-2"
// //           >
// //             <Button
// //               variant="outline"
// //               className="border-lime-400/30 bg-lime-400/10 text-lime-400 hover:bg-lime-400 hover:text-zinc-900"
// //             >
// //               Log In
// //             </Button>
// //           </motion.div>
// //         </NavigationMenuList>
// //       </NavigationMenu>
// //     </motion.header>
// //   );
// // }

// // function MenuIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <line x1="4" x2="20" y1="12" y2="12" />
// //       <line x1="4" x2="20" y1="6" y2="6" />
// //       <line x1="4" x2="20" y1="18" y2="18" />
// //     </svg>
// //   );
// // }

// // function MountainIcon(props) {
// //   return (
// //     <svg
// //       {...props}
// //       xmlns="http://www.w3.org/2000/svg"
// //       width="24"
// //       height="24"
// //       viewBox="0 0 24 24"
// //       fill="none"
// //       stroke="currentColor"
// //       strokeWidth="2"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     >
// //       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
// //     </svg>
// //   );
// // }

// import { useEffect, useState } from "react";
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Link, useLocation } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const location = useLocation();
//   const [currentPath, setCurrentPath] = useState("/");

//   useEffect(() => {
//     setCurrentPath(location.pathname);
//   }, [location]);

//   const isActive = (path) => {
//     return currentPath === path;
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 flex h-16 shrink-0 items-center px-4 md:px-6 transition-all duration-300">
//       {/* Logo and Website Name on Left */}
//       <div className="flex items-center gap-2 mr-auto">
//         <Link to="/" className="flex items-center gap-2" prefetch="false">
//           <MountainIcon className="h-6 w-6 text-lime-400" />
//           <span className="font-bold text-lg text-white hidden xs:block">
//             DevCraft
//           </span>
//         </Link>
//       </div>

//       {/* Desktop Navigation */}
//       <NavigationMenu className="hidden lg:flex">
//         <NavigationMenuList className="flex gap-1">
//           {navItems.map((item) => (
//             <NavigationMenuLink key={item.path} asChild>
//               <Link
//                 to={item.path}
//                 className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-lime-400 hover:text-zinc-900 focus:outline-none
//                 ${
//                   isActive(item.path)
//                     ? "bg-lime-400 text-zinc-900 font-semibold shadow-md shadow-lime-400/20"
//                     : "bg-zinc-800/50 text-zinc-300"
//                 }`}
//                 prefetch="false"
//               >
//                 {item.icon && (
//                   <item.icon
//                     className={`mr-2 h-4 w-4 ${
//                       isActive(item.path) ? "text-zinc-900" : "text-lime-400 "
//                     }`}
//                   />
//                 )}
//                 {item.label}
//                 {isActive(item.path) && (
//                   <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime-400 transform transition-transform duration-300"></span>
//                 )}
//               </Link>
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* Mobile Menu Trigger - Moved to Right */}
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button
//             variant="outline"
//             size="icon"
//             className="lg:hidden ml-auto bg-zinc-800 border-zinc-700 hover:bg-lime-400 hover:text-zinc-900 transition-all duration-200"
//           >
//             <MenuIcon className="h-5 w-5" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent side="right" className="bg-zinc-900 border-zinc-800 w-64">
//           <div className="flex items-center gap-2 mb-8 pt-4">
//             <MountainIcon className="h-6 w-6 text-lime-400" />
//             <span className="font-bold text-lg text-white">DevCraft</span>
//           </div>
//           <div className="grid gap-1 py-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex items-center py-3 px-4 rounded-md text-base font-medium transition-all duration-200 hover:bg-lime-400 hover:text-zinc-900
//                 ${
//                   isActive(item.path)
//                     ? "bg-lime-400/20 text-white font-semibold border-l-2 border-lime-400 pl-4"
//                     : "text-zinc-300"
//                 }`}
//                 prefetch="false"
//               >
//                 {item.icon && (
//                   <item.icon
//                     className={`mr-3 h-5 w-5 ${
//                       isActive(item.path) ? "text-lime-400" : "text-zinc-400"
//                     } `}
//                   />
//                 )}
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </SheetContent>
//       </Sheet>
//     </header>
//   );
// }

// // Navigation Items with Icons
// const navItems = [
//   { label: "Create", path: "/createsite", icon: PlusIcon },
//   { label: "Dashboard", path: "/websitedashboard", icon: DashboardIcon },
//   { label: "AI", path: "/sitewithai", icon: SparklesIcon },
//   { label: "Services", path: "/services", icon: ServiceIcon },
//   { label: "Portfolio", path: "/portfolio", icon: FolderIcon },
//   { label: "Contact", path: "/contact", icon: MailIcon },
// ];

// // Icons
// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 5v14M5 12h14" />
//     </svg>
//   );
// }

// function DashboardIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="9" x="3" y="3" rx="1" />
//       <rect width="7" height="5" x="14" y="3" rx="1" />
//       <rect width="7" height="9" x="14" y="12" rx="1" />
//       <rect width="7" height="5" x="3" y="16" rx="1" />
//     </svg>
//   );
// }

// function SparklesIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//     </svg>
//   );
// }

// function ServiceIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//     </svg>
//   );
// }

// function FolderIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
//     </svg>
//   );
// }

// function MailIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   );
// }

// import { useEffect, useState } from "react";
// import {
//   Sheet,
//   SheetTrigger,
//   SheetContent,
//   SheetClose,
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { Link, useLocation } from "react-router-dom";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu";

// export default function Navbar() {
//   const location = useLocation();
//   const [currentPath, setCurrentPath] = useState("/");

//   useEffect(() => {
//     setCurrentPath(location.pathname);
//   }, [location]);

//   const isActive = (path) => {
//     return currentPath === path;
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 flex h-16 shrink-0 items-center px-4 md:px-6 transition-all duration-300">
//       {/* Logo and Website Name on Left */}
//       <div className="flex items-center gap-2 mr-auto">
//         <Link to="/" className="flex items-center gap-2" prefetch="false">
//           <MountainIcon className="h-6 w-6 text-lime-400" />
//           <span className="font-bold text-lg text-white hidden xs:block">
//             DevCraft
//           </span>
//         </Link>
//       </div>

//       {/* Desktop Navigation */}
//       <NavigationMenu className="hidden lg:flex">
//         <NavigationMenuList className="flex gap-1">
//           {navItems.map((item) => (
//             <NavigationMenuLink key={item.path} asChild>
//               <Link
//                 to={item.path}
//                 className={`group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-lime-400 hover:text-zinc-900 focus:outline-none
//                 ${
//                   isActive(item.path)
//                     ? "bg-lime-400 text-zinc-900 font-semibold shadow-md shadow-lime-400/20"
//                     : "bg-zinc-800/50 text-zinc-300"
//                 }`}
//                 prefetch="false"
//               >
//                 {item.icon && (
//                   <item.icon
//                     className={`mr-2 h-4 w-4 ${
//                       isActive(item.path)
//                         ? "text-zinc-900"
//                         : "text-lime-400 group-hover:text-zinc-900"
//                     }`}
//                   />
//                 )}
//                 {item.label}
//               </Link>
//             </NavigationMenuLink>
//           ))}
//         </NavigationMenuList>
//       </NavigationMenu>

//       {/* Mobile Menu Trigger - Moved to Right */}
//       <Sheet>
//         <SheetTrigger asChild>
//           <Button
//             variant="outline"
//             size="icon"
//             className="lg:hidden ml-auto bg-zinc-800 border-zinc-700 hover:bg-lime-400 hover:text-zinc-900 transition-all duration-200 text-lime-400 hover:text-zinc-900"
//           >
//             <MenuIcon className="h-5 w-5" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </Button>
//         </SheetTrigger>
//         <SheetContent
//           side="right"
//           className="bg-zinc-900 border-zinc-800 w-64 p-0"
//         >
//           <div className="flex items-center justify-between p-4 border-b border-zinc-800">
//             <div className="flex items-center gap-2">
//               <MountainIcon className="h-6 w-6 text-lime-400" />
//               <span className="font-bold text-lg text-white">DevCraft</span>
//             </div>
//             <SheetClose className="rounded-sm opacity-70 text-lime-400 hover:opacity-100 focus:outline-none">
//               <CloseIcon className="h-5 w-5" />
//               <span className="sr-only">Close</span>
//             </SheetClose>
//           </div>
//           <div className="grid gap-1 py-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`flex items-center py-3 px-4 rounded-md text-base font-medium transition-all duration-200 hover:bg-lime-400 hover:text-zinc-900
//                 ${
//                   isActive(item.path)
//                     ? "bg-lime-400/20 text-white font-semibold border-l-2 border-lime-400 pl-4"
//                     : "text-zinc-300"
//                 }`}
//                 prefetch="false"
//               >
//                 {item.icon && (
//                   <item.icon
//                     className={`mr-3 h-5 w-5 ${
//                       isActive(item.path)
//                         ? "text-lime-400"
//                         : "text-lime-400 group-hover:text-zinc-900"
//                     }`}
//                   />
//                 )}
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </SheetContent>
//       </Sheet>
//     </header>
//   );
// }

// // Navigation Items with Icons
// const navItems = [
//   { label: "Create", path: "/createsite", icon: PlusIcon },
//   { label: "Dashboard", path: "/websitedashboard", icon: DashboardIcon },
//   { label: "AI", path: "/sitewithai", icon: SparklesIcon },
//   { label: "Services", path: "/services", icon: ServiceIcon },
//   { label: "Portfolio", path: "/portfolio", icon: FolderIcon },
//   { label: "Contact", path: "/contact", icon: MailIcon },
// ];

// // Icons
// function MenuIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   );
// }

// function CloseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M18 6 6 18" />
//       <path d="m6 6 12 12" />
//     </svg>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function PlusIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 5v14M5 12h14" />
//     </svg>
//   );
// }

// function DashboardIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="9" x="3" y="3" rx="1" />
//       <rect width="7" height="5" x="14" y="3" rx="1" />
//       <rect width="7" height="9" x="14" y="12" rx="1" />
//       <rect width="7" height="5" x="3" y="16" rx="1" />
//     </svg>
//   );
// }

// function SparklesIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
//     </svg>
//   );
// }

// function ServiceIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//     </svg>
//   );
// }

// function FolderIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
//     </svg>
//   );
// }

// function MailIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   );
// }
