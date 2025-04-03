import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Globe,
  Zap,
  Cpu,
  Shield,
  RefreshCcw,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Hero } from "./Hero";

export default function DarkLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <Hero />{" "}
      <main className="flex-1">
        <section className="w-full h-auto py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className=" text-5xl mb-14 font-bold tracking-tighter sm:text-5xl md:text-5xl lg:text-9xl/none bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-teal-400">
                  Deploy at the Speed of Innovation
                </h1>
                <p className="mx-auto  max-w-[700px] text-zinc-400 md:text-xl">
                  DeployNow empowers developers to build, deploy, and scale
                  applications with unprecedented ease. Say goodbye to
                  infrastructure headaches and hello to seamless deployment.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex m-24 align-middle justify-center space-x-2">
                  <Button
                    type="submit"
                    className="bg-lime-400 text-black hover:bg-white"
                  >
                    <Link
                      to="/createsite"
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      prefetch="false"
                    >
                      Create
                    </Link>{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-zinc-400">
                  14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center  mb-12">
              Powerful Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Globe,
                  title: "Global Edge Network",
                  description:
                    "Deploy your applications to a worldwide network for lightning-fast access from any location.",
                },
                {
                  icon: Code,
                  title: "Serverless Functions",
                  description:
                    "Write and deploy code without managing servers. Scale automatically with demand.",
                },
                {
                  icon: Zap,
                  title: "Instant Deployments",
                  description:
                    "Push to git and see your changes live in seconds. Automatic rollbacks ensure stability.",
                },
                {
                  icon: Cpu,
                  title: "Advanced Analytics",
                  description:
                    "Gain deep insights into your application's performance and user behavior.",
                },
                {
                  icon: Shield,
                  title: "Enterprise-Grade Security",
                  description:
                    "Benefit from built-in SSL, DDoS protection, and regular security audits.",
                },
                {
                  icon: RefreshCcw,
                  title: "Continuous Integration",
                  description:
                    "Automatically build, test, and deploy your code with every commit.",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <feature.icon className="h-8 w-8 mb-2 text-lime-400" />
                    <CardTitle className="text-lime-400">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-200">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Simple, Transparent Pricing
            </h2>
            <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annual">
                  Annual Billing (Save 20%)
                </TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Starter",
                      price: "$29",
                      features: [
                        "Up to 5 Projects",
                        "50GB Bandwidth",
                        "5 Custom Domains",
                        "Basic Analytics",
                        "Community Support",
                      ],
                    },
                    {
                      name: "Pro",
                      price: "$99",
                      features: [
                        "Unlimited Projects",
                        "500GB Bandwidth",
                        "Unlimited Custom Domains",
                        "Advanced Analytics",
                        "Priority Support",
                        "CI/CD Integration",
                      ],
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      features: [
                        "Everything in Pro",
                        "Dedicated Infrastructure",
                        "99.99% Uptime SLA",
                        "24/7 Phone Support",
                        "Custom Integrations",
                        "On-premises Deployment Option",
                      ],
                    },
                  ].map((plan) => (
                    <Card
                      key={plan.name}
                      className="flex flex-col text-lime-300 bg-zinc-800 border-zinc-700"
                    >
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">
                          {plan.name}
                        </CardTitle>
                        <CardDescription className="text-center">
                          <span className="text-4xl font-bold text-white">
                            {plan.price}
                          </span>
                          {plan.price !== "Custom" && (
                            <span className="text-sm">/month</span>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-zinc-400"
                            >
                              <CheckCircle className="text-lime-400 mr-2 h-4 w-4" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-lime-400 text-black">
                          {plan.price === "Custom"
                            ? "Contact Sales"
                            : "Choose Plan"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="annual">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Starter",
                      price: "$278",
                      features: [
                        "Up to 5 Projects",
                        "50GB Bandwidth",
                        "5 Custom Domains",
                        "Basic Analytics",
                        "Community Support",
                      ],
                    },
                    {
                      name: "Pro",
                      price: "$948",
                      features: [
                        "Unlimited Projects",
                        "500GB Bandwidth",
                        "Unlimited Custom Domains",
                        "Advanced Analytics",
                        "Priority Support",
                        "CI/CD Integration",
                      ],
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      features: [
                        "Everything in Pro",
                        "Dedicated Infrastructure",
                        "99.99% Uptime SLA",
                        "24/7 Phone Support",
                        "Custom Integrations",
                        "On-premises Deployment Option",
                      ],
                    },
                  ].map((plan) => (
                    <Card
                      key={plan.name}
                      className="flex flex-col bg-zinc-800 border-zinc-700"
                    >
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center text-lime-400">
                          {plan.name}
                        </CardTitle>
                        <CardDescription className="text-center">
                          <span className="text-4xl font-bold text-white">
                            {plan.price}
                          </span>
                          {plan.price !== "Custom" && (
                            <span className="text-sm">/year</span>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm text-zinc-400"
                            >
                              <CheckCircle className="text-lime-400 mr-2 h-4 w-4" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-lime-400 text-black">
                          {plan.price === "Custom"
                            ? "Contact Sales"
                            : "Choose Plan"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Alex Johnson",
                  role: "CTO, TechCorp",
                  quote:
                    "DeployNow has revolutionized our deployment process. We've cut our time-to-market by 50%.",
                },
                {
                  name: "Sarah Lee",
                  role: "Lead Developer, InnovateCo",
                  quote:
                    "The scalability and performance of DeployNow's infrastructure is unmatched. It's a game-changer for our team.",
                },
                {
                  name: "Michael Zhang",
                  role: "Founder, StartupX",
                  quote:
                    "As a startup, DeployNow's pricing and features allowed us to punch above our weight. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-lime-400 border-lime-400 hover:bg-white"
                >
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <CardDescription className="text-black text-md">
                      {testimonial.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm  text-zinc-900 ">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Get in Touch
            </h2>
            <div className="mx-auto max-w-lg space-y-4">
              <p className="text-center text-zinc-400">
                Have questions or need help? Our team is here to assist you.
                Reach out and we'll get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-zinc-900 border-zinc-800"
                />
                <Input
                  placeholder="Your Email"
                  type="email"
                  className="bg-zinc-900 border-zinc-800"
                />
                <textarea
                  className="w-full h-32 px-3 py-2 text-white bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                  placeholder="Your Message"
                ></textarea>
                <Button className="w-full text-black bg-lime-400 hover:bg-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm text-zinc-400">
                DeployNow is revolutionizing the way developers deploy and
                manage their applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>

              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-center text-xs text-zinc-400">
              © 2024 DeployNow Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { BackgroundBeams } from "@/components/ui/background-beams";
// import { SparklesCore } from "@/components/ui/sparkles";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import { TracingBeam } from "@/components/ui/tracing-beam";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
// import { Spotlight } from "@/components/ui/spotlight";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { Tabs } from "@/components/ui/tabs";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { PinContainer } from "@/components/ui/3d-pin";
// import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
// import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// import { Meteors } from "@/components/ui/meteors";
// // import { HeroParallax } from "@/components/ui/hero-parallax";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowRight,
//   Check,
//   Globe,
//   Code,
//   Palette,
//   PenTool,
//   Layers,
//   Users,
//   Zap,
//   Menu,
// } from "lucide-react";

// export default function WebsiteBuilderLanding() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     {
//       name: "Home",
//       link: "#",
//     },
//     {
//       name: "Features",
//       link: "#features",
//     },
//     {
//       name: "Templates",
//       link: "#templates",
//     },
//     {
//       name: "Pricing",
//       link: "#pricing",
//     },
//     {
//       name: "Testimonials",
//       link: "#testimonials",
//     },
//   ];

//   const features = [
//     {
//       title: "Drag & Drop Editor",
//       description:
//         "Build websites without code using our intuitive drag & drop interface with 100+ pre-designed elements.",
//       icon: <PenTool className="h-6 w-6 text-lime-400" />,
//     },
//     {
//       title: "Responsive Design",
//       description:
//         "All websites automatically adapt to any screen size for perfect mobile, tablet, and desktop viewing.",
//       icon: <Layers className="h-6 w-6 text-lime-400" />,
//     },
//     {
//       title: "Custom Code Integration",
//       description:
//         "Add your own custom HTML, CSS and JavaScript for unlimited customization possibilities.",
//       icon: <Code className="h-6 w-6 text-lime-400" />,
//     },
//     {
//       title: "SEO Optimization",
//       description:
//         "Built-in tools to maximize your search rankings and attract more organic traffic.",
//       icon: <Globe className="h-6 w-6 text-lime-400" />,
//     },
//     {
//       title: "Team Collaboration",
//       description:
//         "Work together with teammates in real-time with version control and role management.",
//       icon: <Users className="h-6 w-6 text-lime-400" />,
//     },
//     {
//       title: "Fast Performance",
//       description:
//         "Lightning-fast page loading with automatic optimization and global CDN distribution.",
//       icon: <Zap className="h-6 w-6 text-lime-400" />,
//     },
//   ];

//   const testimonials = [
//     {
//       quote:
//         "This website builder transformed our online presence completely. The tools are intuitive and the results are professional.",
//       name: "Sarah Johnson",
//       title: "Marketing Director",
//       company: "TechCraft Solutions",
//     },
//     {
//       quote:
//         "I launched my e-commerce store in just 3 days with zero coding knowledge. The templates are beautiful and highly customizable.",
//       name: "Michael Chen",
//       title: "Founder",
//       company: "ArtisanGoods",
//     },
//     {
//       quote:
//         "The collaborative features allowed our entire team to work together seamlessly. Best decision we've made for our web presence.",
//       name: "Emma Rodriguez",
//       title: "Creative Director",
//       company: "Visionary Studios",
//     },
//     {
//       quote:
//         "We migrated from WordPress and haven't looked back. The speed improvements alone were worth the switch.",
//       name: "David Kim",
//       title: "CTO",
//       company: "NextGen Startups",
//     },
//   ];

//   const teamMembers = [
//     {
//       name: "Alex Morgan",
//       designation: "Founder & CEO",
//       image: "/api/placeholder/300/300",
//     },
//     {
//       name: "Jenna Williams",
//       designation: "Chief Product Officer",
//       image: "/api/placeholder/300/300",
//     },
//     {
//       name: "Marcus Lee",
//       designation: "Head of Design",
//       image: "/api/placeholder/300/300",
//     },
//     {
//       name: "Sophia Chen",
//       designation: "Engineering Lead",
//       image: "/api/placeholder/300/300",
//     },
//   ];

//   const templates = [
//     {
//       title: "E-commerce",
//       description: "Ready-to-use online store templates",
//       image: "/api/placeholder/400/300",
//     },
//     {
//       title: "Portfolio",
//       description: "Showcase your work with style",
//       image: "/api/placeholder/400/300",
//     },
//     {
//       title: "Business",
//       description: "Professional corporate templates",
//       image: "/api/placeholder/400/300",
//     },
//     {
//       title: "Blog",
//       description: "Beautiful content-focused designs",
//       image: "/api/placeholder/400/300",
//     },
//     {
//       title: "Landing Page",
//       description: "High-converting sales pages",
//       image: "/api/placeholder/400/300",
//     },
//     {
//       title: "Education",
//       description: "Perfect for courses and schools",
//       image: "/api/placeholder/400/300",
//     },
//   ];

//   const pricingPlans = [
//     {
//       title: "Starter",
//       price: "$19",
//       period: "/month",
//       features: [
//         "1 website",
//         "100 pages",
//         "5GB storage",
//         "Free domain for 1 year",
//         "Basic templates",
//         "Standard support",
//       ],
//       cta: "Get Started",
//       popular: false,
//     },
//     {
//       title: "Professional",
//       price: "$49",
//       period: "/month",
//       features: [
//         "10 websites",
//         "Unlimited pages",
//         "50GB storage",
//         "Free domain for life",
//         "Premium templates",
//         "Priority support",
//         "Advanced analytics",
//       ],
//       cta: "Choose Pro",
//       popular: true,
//     },
//     {
//       title: "Enterprise",
//       price: "$129",
//       period: "/month",
//       features: [
//         "Unlimited websites",
//         "Unlimited pages",
//         "200GB storage",
//         "Free domain for life",
//         "All templates",
//         "24/7 dedicated support",
//         "White labeling",
//         "API access",
//       ],
//       cta: "Contact Sales",
//       popular: false,
//     },
//   ];

//   const content = [
//     {
//       title: "Lightning Fast Development",
//       description:
//         "Build websites in minutes, not weeks. Our drag-and-drop editor combined with pre-built components means you'll launch faster than ever before.",
//       content: (
//         <div className="h-full w-full bg-zinc-900 rounded-xl p-4 flex items-center justify-center">
//           <Zap className="h-24 w-24 text-lime-400" />
//         </div>
//       ),
//     },
//     {
//       title: "Responsive By Default",
//       description:
//         "Every template and component is fully responsive out of the box. Your websites look perfect on every device without any extra work.",
//       content: (
//         <div className="h-full w-full bg-zinc-900 rounded-xl p-4 flex items-center justify-center">
//           <Layers className="h-24 w-24 text-lime-400" />
//         </div>
//       ),
//     },
//     {
//       title: "Design Freedom",
//       description:
//         "Customize every aspect of your website with our powerful design tools. From colors and fonts to animations and effects, you have complete creative control.",
//       content: (
//         <div className="h-full w-full bg-zinc-900 rounded-xl p-4 flex items-center justify-center">
//           <Palette className="h-24 w-24 text-lime-400" />
//         </div>
//       ),
//     },
//     {
//       title: "Team Collaboration",
//       description:
//         "Work together seamlessly with real-time collaboration tools. Multiple team members can edit simultaneously with no conflicts.",
//       content: (
//         <div className="h-full w-full bg-zinc-900 rounded-xl p-4 flex items-center justify-center">
//           <Users className="h-24 w-24 text-lime-400" />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-zinc-900 overflow-hidden">
//       {/* Navigation */}
//       <FloatingNav navItems={navItems} />

//       {/* Mobile Menu Button */}
//       <div className="block md:hidden fixed top-4 right-4 z-50">
//         <Button
//           variant="outline"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className="bg-zinc-800 border-zinc-700 text-lime-400 hover:bg-zinc-700"
//         >
//           <Menu className="h-5 w-5" />
//         </Button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-zinc-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
//           {navItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               className="text-lime-400 text-2xl font-bold hover:text-lime-300 transition-colors"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           <Button
//             onClick={() => setIsMenuOpen(false)}
//             className="mt-8 bg-lime-500 text-zinc-900 hover:bg-lime-400"
//           >
//             Close
//           </Button>
//         </div>
//       )}

//       {/* Hero Section with SpotLight and HeroParallax */}
//       <Spotlight className="hidden lg:block">
//         <section className="relative h-screen w-full">
//           <div className="absolute inset-0 w-full h-full bg-zinc-900 z-10">
//             <SparklesCore
//               id="hero-sparkles"
//               background="transparent"
//               minSize={0.5}
//               maxSize={1.5}
//               particleDensity={50}
//               className="w-full h-full"
//               particleColor="#84cc16"
//             />
//           </div>
//           <div className="relative h-full w-full flex flex-col items-center justify-center z-20 px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-center max-w-4xl"
//             >
//               <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
//                 <TextGenerateEffect words="Build Beautiful Websites Without Code" />
//               </h1>
//               <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
//                 Create professional websites in minutes with our intuitive
//                 visual builder. No coding required. 100+ templates to get you
//                 started.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <HoverBorderGradient className="w-full sm:w-auto">
//                   <Button className="w-full sm:w-auto bg-lime-500 hover:bg-lime-400 text-zinc-900 font-bold py-3 px-8 rounded-lg text-lg">
//                     Start Building Free
//                   </Button>
//                 </HoverBorderGradient>
//                 <Button
//                   variant="outline"
//                   className="w-full sm:w-auto border-lime-500 text-lime-400 hover:bg-zinc-800 font-bold py-3 px-8 rounded-lg text-lg"
//                 >
//                   Watch Demo
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </Spotlight>

//       {/* Mobile Hero Section */}
//       <section className="relative h-screen w-full lg:hidden">
//         <div className="absolute inset-0 w-full h-full bg-zinc-900 z-10">
//           <SparklesCore
//             id="hero-sparkles-mobile"
//             background="transparent"
//             minSize={0.5}
//             maxSize={1.5}
//             particleDensity={30}
//             className="w-full h-full"
//             particleColor="#84cc16"
//           />
//         </div>
//         <div className="relative h-full w-full flex flex-col items-center justify-center z-20 px-4">
//           <div className="text-center max-w-4xl">
//             <h1 className="text-4xl font-bold text-white mb-6">
//               Build Beautiful Websites Without Code
//             </h1>
//             <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
//               Create professional websites in minutes with our intuitive visual
//               builder. No coding required.
//             </p>
//             <div className="flex flex-col gap-4 justify-center">
//               <Button className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-900 font-bold py-3 px-6 rounded-lg text-lg">
//                 Start Building Free
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full border-lime-500 text-lime-400 hover:bg-zinc-800 font-bold py-3 px-6 rounded-lg text-lg"
//               >
//                 Watch Demo
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section with BentoGrid */}
//       <section id="features" className="py-20 px-4 md:px-8 bg-zinc-900">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Powerful Features for Modern Websites
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             Everything you need to create, launch, and grow your online presence
//           </p>
//         </div>
//         <BentoGrid className="max-w-6xl mx-auto">
//           {features.map((feature, i) => (
//             <BentoGridItem
//               key={i}
//               title={feature.title}
//               description={feature.description}
//               header={
//                 <div className="flex items-center justify-center w-full h-full bg-zinc-800 rounded-lg p-4">
//                   {feature.icon}
//                 </div>
//               }
//               className="border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors"
//             />
//           ))}
//         </BentoGrid>
//       </section>

//       {/* How It Works with StickyScroll */}
//       <section className="py-20 px-4 md:px-0 bg-zinc-800">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             How It Works
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             Building your dream website is easier than you think
//           </p>
//         </div>
//         <div className="h-[80vh]">
//           <StickyScroll content={content} />
//         </div>
//       </section>

//       {/* Templates with Tabs */}
//       <section id="templates" className="py-20 px-4 md:px-8 bg-zinc-900">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Ready-to-Use Templates
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             Start with a professionally designed template and customize it to
//             match your brand
//           </p>
//         </div>
//         <Tabs
//           tabs={templates.map((tab) => ({
//             title: tab.title,
//             value: tab.title.toLowerCase(),
//           }))}
//           containerClassName="max-w-6xl mx-auto"
//           contentClassName="bg-zinc-800 p-6 rounded-lg"
//           tabClassName="bg-zinc-800 hover:bg-zinc-700 data-[state=active]:bg-lime-500 data-[state=active]:text-zinc-900"
//         >
//           {templates.map((template, i) => (
//             <div
//               key={i}
//               value={template.title.toLowerCase()}
//               className="flex flex-col md:flex-row gap-8"
//             >
//               <div className="w-full md:w-1/2">
//                 <img
//                   src={template.image}
//                   alt={template.title}
//                   className="rounded-lg w-full h-auto object-cover aspect-video"
//                 />
//               </div>
//               <div className="w-full md:w-1/2 flex flex-col justify-center">
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   {template.title} Templates
//                 </h3>
//                 <p className="text-lg text-zinc-300 mb-6">
//                   {template.description}
//                 </p>
//                 <ul className="space-y-3 mb-6">
//                   <li className="flex items-center text-zinc-300">
//                     <Check className="h-5 w-5 text-lime-400 mr-2" /> Fully
//                     responsive design
//                   </li>
//                   <li className="flex items-center text-zinc-300">
//                     <Check className="h-5 w-5 text-lime-400 mr-2" />{" "}
//                     Customizable layout and colors
//                   </li>
//                   <li className="flex items-center text-zinc-300">
//                     <Check className="h-5 w-5 text-lime-400 mr-2" />{" "}
//                     Industry-specific content sections
//                   </li>
//                   <li className="flex items-center text-zinc-300">
//                     <Check className="h-5 w-5 text-lime-400 mr-2" />{" "}
//                     SEO-optimized structure
//                   </li>
//                 </ul>
//                 <Button className="bg-lime-500 hover:bg-lime-400 text-zinc-900 font-bold py-2 px-6 rounded-lg w-full md:w-auto">
//                   Browse {template.title} Templates
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </Tabs>
//       </section>

//       {/* Pricing with PinContainer */}
//       <section id="pricing" className="py-20 px-4 md:px-8 bg-zinc-800">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             Choose the plan that works best for your needs
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {pricingPlans.map((plan, i) => (
//             <PinContainer key={i} title={plan.title}>
//               <div
//                 className={`h-full w-full p-6 rounded-lg ${
//                   plan.popular
//                     ? "bg-zinc-800 border-2 border-lime-500"
//                     : "bg-zinc-800 border border-zinc-700"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="bg-lime-500 text-zinc-900 font-bold py-1 px-3 rounded text-sm inline-block mb-4">
//                     Most Popular
//                   </div>
//                 )}
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {plan.title}
//                 </h3>
//                 <div className="flex items-baseline mb-6">
//                   <span className="text-4xl font-bold text-white">
//                     {plan.price}
//                   </span>
//                   <span className="text-zinc-400 ml-1">{plan.period}</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, j) => (
//                     <li key={j} className="flex items-center text-zinc-300">
//                       <Check className="h-5 w-5 text-lime-400 mr-2" /> {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Button
//                   className={`w-full py-3 ${
//                     plan.popular
//                       ? "bg-lime-500 hover:bg-lime-400 text-zinc-900"
//                       : "bg-zinc-700 hover:bg-zinc-600 text-white"
//                   } font-bold rounded-lg`}
//                 >
//                   {plan.cta}
//                 </Button>
//               </div>
//             </PinContainer>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials with InfiniteMovingCards */}
//       <section id="testimonials" className="py-20 px-4 md:px-8 bg-zinc-900">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             What Our Customers Say
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             Join thousands of satisfied customers building their online presence
//           </p>
//         </div>
//         <div className="max-w-6xl mx-auto">
//           <InfiniteMovingCards
//             items={testimonials.map((testimonial) => (
//               <div className="bg-zinc-800 border border-zinc-700 p-6 rounded-lg max-w-md">
//                 <p className="text-zinc-300 italic mb-4">{testimonial.quote}</p>
//                 <div>
//                   <p className="text-white font-bold">{testimonial.name}</p>
//                   <p className="text-zinc-400">
//                     {testimonial.title}, {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             ))}
//             direction="right"
//             speed="slow"
//           />
//         </div>
//       </section>

//       {/* Team with AnimatedTooltip */}
//       <section className="py-20 px-4 md:px-8 bg-zinc-800">
//         <div className="max-w-6xl mx-auto mb-16 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//             Meet Our Team
//           </h2>
//           <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
//             The passionate people behind our website builder
//           </p>
//         </div>
//         <div className="flex flex-wrap items-center justify-center gap-8 max-w-3xl mx-auto">
//           <AnimatedTooltip items={teamMembers} />
//         </div>
//       </section>

//       {/* CTA with BackgroundBeams and MeteorsDemo */}
//       <section className="relative py-20 px-4 md:px-8 bg-zinc-900">
//         <BackgroundBeams />
//         <div className="relative z-10 max-w-3xl mx-auto text-center">
//           <Meteors>
//             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
//               Ready to Build Your Website?
//             </h2>
//             <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
//               Start creating your website today with our easy-to-use builder. No
//               credit card required.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="w-full sm:w-auto bg-lime-500 hover:bg-lime-400 text-zinc-900 font-bold py-3 px-8 rounded-lg text-lg">
//                 Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="w-full sm:w-auto border-lime-500 text-lime-400 hover:bg-zinc-800 font-bold py-3 px-8 rounded-lg text-lg"
//               >
//                 Schedule Demo
//               </Button>
//             </div>
//           </Meteors>
//         </div>
//       </section>

//       {/* Footer with TracingBeam */}
//       <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-4 md:px-8">
//         <TracingBeam>
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               <div>
//                 <h3 className="text-xl font-bold text-white mb-4">BuildrWeb</h3>
//                 <p className="text-zinc-400 mb-4">
//                   Create stunning websites without code using our powerful
//                   visual website builder.
//                 </p>
//                 <div className="flex space-x-4">
//                   {/* Social icons could go here */}
//                 </div>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-4">Product</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Features
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Templates
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Pricing
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Enterprise
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Documentation
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Tutorials
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Blog
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Support
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold text-white mb-4">Company</h4>
//                 <ul className="space-y-2">
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Careers
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Press
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="text-zinc-400 hover:text-lime-400">
//                       Contact
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//               <p className="text-zinc-400 text-sm mb-4 md:mb-0">
//                 © 2025 BuildrWeb. All rights reserved.
//               </p>
//               <div className="flex space-x-6">
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 text-sm"
//                 >
//                   Privacy Policy
//                 </a>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 text-sm"
//                 >
//                   Terms of Service
//                 </a>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 text-sm"
//                 >
//                   Cookie Policy
//                 </a>
//               </div>
//             </div>
//           </div>
//         </TracingBeam>
//       </footer>
//     </div>
//   );
// }
