import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  Zap,
  Code,
  Edit,
  Download,
  Eye,
  Globe,
  CheckCircle,
  ChevronRight,
  MoveRight,
  Sparkles,
} from "lucide-react";

// Main service page component
export default function Services() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* <Header /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <TemplateSection />
      <AISection />
      <DeploymentSection />
      <Testimonials />
      <FAQ />
      <PricingSection />
      <CallToAction></CallToAction>
      {/* <Footer /> */}
    </div>
  );
}

// Header component
// function Header() {
//   return (
//     <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800">
//       <div className="container mx-auto flex items-center justify-between py-4">
//         <div className="flex items-center gap-2">
//           <div className="bg-lime-500 p-1 rounded">
//             <Zap size={24} className="text-zinc-900" />
//           </div>
//           <span className="text-xl font-bold">WebCraft</span>
//         </div>
//         <nav className="hidden md:flex items-center gap-8">
//           <a href="#features" className="hover:text-lime-400 transition">
//             Features
//           </a>
//           <a href="#how-it-works" className="hover:text-lime-400 transition">
//             How It Works
//           </a>
//           <a href="#templates" className="hover:text-lime-400 transition">
//             Templates
//           </a>
//           <a href="#ai-power" className="hover:text-lime-400 transition">
//             AI Builder
//           </a>
//           <a href="#pricing" className="hover:text-lime-400 transition">
//             Pricing
//           </a>
//         </nav>
//         <div className="flex items-center gap-4">
//           <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition">
//             Login
//           </button>
//           <button className="px-4 py-2 bg-lime-500 text-zinc-900 hover:bg-lime-400 rounded-md font-medium transition">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// Hero section with 3D illustration
function Hero() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-lime-500/10 via-zinc-900/0 to-zinc-900/0 pointer-events-none"></div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20">
            <span className="text-sm font-medium">
              The future of web development is here
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Create stunning websites with{" "}
            <span className="text-lime-400">templates</span> or{" "}
            <span className="text-lime-400">AI magic</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            WebCraft combines the simplicity of template-based design with the
            power of AI to help you build and deploy professional websites in
            minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-lime-500 text-zinc-900 hover:bg-lime-400 rounded-md font-medium transition flex items-center justify-center gap-2">
              Start Building <MoveRight size={18} />
            </button>
            <button className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-md transition flex items-center justify-center gap-2">
              Watch Demo <Eye size={18} />
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <ThreeDWebsiteModel />
        </div>
      </div>
    </section>
  );
}

// Animated 3D Website Model (simulated with CSS)
function ThreeDWebsiteModel() {
  return (
    <div className="relative h-96 w-full perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center animate-float">
        <div className="website-model relative w-64 h-64">
          <div className="absolute inset-0 bg-zinc-800 rounded-lg border border-zinc-700 shadow-xl transform rotate-y-20 rotate-x-10 transition-transform duration-1000 flex items-center justify-center">
            <div className="w-full h-full p-4 flex flex-col">
              <div className="h-4 w-full bg-zinc-700 rounded-sm mb-2"></div>
              <div className="flex-1 bg-zinc-700/50 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute -bottom-12 -right-8 w-48 h-48 bg-lime-500/30 blur-3xl rounded-full"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-lime-500/20 blur-xl rounded-full"></div>

          {/* Code particles animation */}
          <div className="code-particle absolute top-1/4 left-1/4 bg-lime-400 h-2 w-2 rounded-full animate-float-slow"></div>
          <div className="code-particle absolute top-3/4 right-1/4 bg-lime-400 h-1 w-1 rounded-full animate-float-slow animation-delay-300"></div>
          <div className="code-particle absolute bottom-1/4 left-1/2 bg-lime-400 h-1.5 w-1.5 rounded-full animate-float-slow animation-delay-500"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate3d(1, 1, 1, 0deg);
          }
          50% {
            transform: translateY(-10px) rotate3d(1, 1, 1, 2deg);
          }
          100% {
            transform: translateY(0) rotate3d(1, 1, 1, 0deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-20 {
          transform: rotateY(20deg);
        }
        .rotate-x-10 {
          transform: rotateX(10deg);
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        @keyframes float-slow {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(10px, -15px) scale(1.5);
            opacity: 0.7;
          }
          100% {
            transform: translate(20px, -30px) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-slow {
          animation: float-slow 4s ease-out infinite;
        }
      `}</style>
    </div>
  );
}

// Features section
function Features() {
  const features = [
    {
      icon: <Plus className="text-lime-400" />,
      title: "Template-Based Creation",
      description:
        "Choose from dozens of professional templates and customize with a simple form to generate your website instantly.",
    },
    {
      icon: <Sparkles className="text-lime-400" />,
      title: "AI-Powered Generation",
      description:
        "Describe your website in plain language and watch as our AI generates complete HTML, CSS, and JS code.",
    },
    {
      icon: <Edit className="text-lime-400" />,
      title: "Fully Editable",
      description:
        "Modify any aspect of your site with our intuitive editor or directly edit the code for complete control.",
    },
    {
      icon: <Eye className="text-lime-400" />,
      title: "Live Preview",
      description:
        "See changes in real-time with our live preview feature to perfect your website before deployment.",
    },
    {
      icon: <Download className="text-lime-400" />,
      title: "Code Download",
      description:
        "Download your website's code to host anywhere or continue development in your favorite tools.",
    },
    {
      icon: <Globe className="text-lime-400" />,
      title: "One-Click Deployment",
      description:
        "Deploy your website instantly with our integrated hosting solution and get a custom domain.",
    },
  ];

  const [activeTile, setActiveTile] = useState(null);

  return (
    <section id="features" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            WebCraft combines the best of both worlds - template simplicity and
            AI innovation - to give you the ultimate website creation
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10"
              onMouseEnter={() => setActiveTile(index)}
              onMouseLeave={() => setActiveTile(null)}
            >
              <div
                className={`p-3 mb-4 inline-flex rounded-lg ${
                  activeTile === index
                    ? "bg-lime-500 text-zinc-900"
                    : "bg-zinc-700"
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How it works section
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Approach",
      description:
        "Select between template-based or AI-powered website creation based on your needs and preferences.",
      highlight: "Template or AI",
    },
    {
      number: "02",
      title: "Customize or Prompt",
      description:
        "Fill a simple form to customize a template or write a detailed prompt for AI to generate your website.",
      highlight: "Form or Prompt",
    },
    {
      number: "03",
      title: "Edit and Refine",
      description:
        "Use our intuitive editor to adjust your template-based site or modify the AI-generated code directly.",
      highlight: "Visual or Code Editor",
    },
    {
      number: "04",
      title: "Preview and Deploy",
      description:
        "Test your website with our live preview feature, then deploy with a single click when you're satisfied.",
      highlight: "Preview & Deploy",
    },
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Creating a professional website has never been easier. Follow these
            simple steps to go from idea to fully deployed website in minutes.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-16 h-16 bg-lime-500/10 rounded-full flex items-center justify-center border border-lime-500/20">
                    <span className="text-lime-400 font-bold text-xl">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-lime-500/50 to-transparent"></div>
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-zinc-400 mb-3">{step.description}</p>
                <span className="inline-block bg-lime-500/10 text-lime-400 px-3 py-1 rounded-full text-sm">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Template section
function TemplateSection() {
  return (
    <section
      id="templates"
      className="py-24 bg-zinc-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 order-2 lg:order-1">
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-zinc-500">Template Form</div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Website Name
                  </label>
                  <input
                    type="text"
                    value="Mountain Adventures"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-2 text-zinc-200"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Color Theme
                  </label>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-full ring-2 ring-white"></div>
                    <div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
                    <div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
                    <div className="w-6 h-6 bg-zinc-700 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Features
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="text-lime-500"
                        checked
                        readOnly
                      />
                      <span className="text-sm">Gallery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="text-lime-500"
                        checked
                        readOnly
                      />
                      <span className="text-sm">Contact Form</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="text-lime-500"
                        checked
                        readOnly
                      />
                      <span className="text-sm">Blog</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="text-lime-500"
                        checked
                        readOnly
                      />
                      <span className="text-sm">Newsletter</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 bg-lime-500 text-zinc-900 rounded-md font-medium">
                  Generate Website
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Template-Based Website Creation
              </h2>
              <p className="text-zinc-400">
                Our template approach makes website creation accessible to
                everyone. No coding required - just fill out a simple form with
                your preferences and content.
              </p>
              <ul className="space-y-3">
                {[
                  "Access 100+ professionally designed templates",
                  "Customize colors, fonts, and layouts with simple inputs",
                  "Add your content with easy-to-use forms",
                  "Generate a complete website in under 5 minutes",
                  "Make visual edits with our drag-and-drop editor",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-lime-400 mt-1 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-md transition flex items-center gap-2">
                  Explore Templates <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Section
function AISection() {
  return (
    <section id="ai-power" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-lime-500/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                AI-Powered Website Generation
              </h2>
              <p className="text-zinc-400">
                Harness the power of artificial intelligence to create fully
                custom websites from a simple text prompt. Our advanced AI
                understands your needs and generates complete code instantly.
              </p>
              <ul className="space-y-3">
                {[
                  "Describe your ideal website in natural language",
                  "AI generates complete HTML, CSS, and JavaScript code",
                  "Edit the generated code directly in our code editor",
                  "See changes in real-time with live preview",
                  "Download the code or deploy with one click",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-lime-400 mt-1 flex-shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <button className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-md transition flex items-center gap-2">
                  Try AI Builder <Sparkles size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-zinc-500">AI Prompt</div>
              </div>
              <div className="space-y-4">
                <div>
                  <textarea
                    className="w-full h-32 bg-zinc-700 border border-zinc-600 rounded-md p-3 text-zinc-200 resize-none"
                    value="Create a modern single-page website for a mountain adventure tour company. It should have a hero section with a large image, about us section, services with cards, a photo gallery, testimonials, and a contact form. Use blue and white as primary colors with orange accents."
                    readOnly
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-zinc-400">
                    AI will generate complete HTML, CSS, and JS
                  </div>
                  <button className="px-4 py-2 bg-lime-500 text-zinc-900 rounded-md font-medium flex items-center gap-2">
                    <Sparkles size={16} /> Generate
                  </button>
                </div>
                <div>
                  <div className="flex border-b border-zinc-700">
                    <button className="py-2 px-4 border-b-2 border-lime-500 text-lime-400">
                      HTML
                    </button>
                    <button className="py-2 px-4 text-zinc-400">CSS</button>
                    <button className="py-2 px-4 text-zinc-400">JS</button>
                  </div>
                  <div className="bg-zinc-900 p-3 rounded-b-md text-zinc-300 font-mono text-sm h-32 overflow-y-auto">
                    <div>&lt;!DOCTYPE html&gt;</div>
                    <div>&lt;html lang="en"&gt;</div>
                    <div>&lt;head&gt;</div>
                    <div>&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;</div>
                    <div>
                      &nbsp;&nbsp;&lt;meta name="viewport"
                      content="width=device-width, initial-scale=1.0"&gt;
                    </div>
                    <div>
                      &nbsp;&nbsp;&lt;title&gt;Mountain Adventures&lt;/title&gt;
                    </div>
                    <div>
                      &nbsp;&nbsp;&lt;link rel="stylesheet"
                      href="styles.css"&gt;
                    </div>
                    <div>&lt;/head&gt;</div>
                    <div>&lt;body&gt;</div>
                    <div>&nbsp;&nbsp;&lt;header class="hero"&gt;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;nav&gt;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Deployment Section
function DeploymentSection() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Deploy in Seconds</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Once your website is ready, deploying it to the world is just a
            click away. Choose how you want to share your creation with flexible
            options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10">
            <div className="p-3 mb-4 inline-flex rounded-lg bg-zinc-700">
              <Globe className="text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">One-Click Deploy</h3>
            <p className="text-zinc-400 mb-4">
              Deploy your website directly to our fast, secure hosting platform
              with a single click. Get a free subdomain included.
            </p>
            <span className="text-sm text-lime-400">Instant deployment</span>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10">
            <div className="p-3 mb-4 inline-flex rounded-lg bg-zinc-700">
              <Download className="text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Download Code</h3>
            <p className="text-zinc-400 mb-4">
              Download your complete website code as a ZIP file to host anywhere
              or continue development in your preferred environment.
            </p>
            <span className="text-sm text-lime-400">Full ownership</span>
          </div>

          <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10">
            <div className="p-3 mb-4 inline-flex rounded-lg bg-zinc-700">
              <Code className="text-lime-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Domain</h3>
            <p className="text-zinc-400 mb-4">
              Connect your own domain name to your website with our simple DNS
              management tools for a professional online presence.
            </p>
            <span className="text-sm text-lime-400">Professional branding</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials section
function Testimonials() {
  const testimonials = [
    {
      quote:
        "I created my business website in just 20 minutes using the template approach. The form-based customization was exactly what I needed as a non-technical person.",
      author: "Sarah K.",
      role: "Small Business Owner",
    },
    {
      quote:
        "As a developer, I was skeptical about AI-generated code, but I was blown away by the quality. I described my portfolio site and the AI created better HTML/CSS than I would have written myself.",
      author: "Marcus T.",
      role: "Frontend Developer",
    },
    {
      quote:
        "The ability to edit the AI-generated code directly in the browser saved me countless hours. I made a few tweaks and deployed my site the same day I started.",
      author: "Elena R.",
      role: "Graphic Designer",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people who've built
            websites with WebCraft have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 transition-all duration-300 hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-500/10 relative"
            >
              <div className="absolute -top-3 -left-3 text-5xl text-lime-500/20">
                "
              </div>
              <p className="mb-6 text-zinc-300 relative z-10">
                {testimonial.quote}
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-zinc-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQ() {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      question: "Do I need coding knowledge to use WebCraft?",
      answer:
        "Not at all! Our template-based approach requires no coding skills whatsoever. Simply fill out a form with your preferences and content. For the AI-powered approach, you just need to describe what you want in plain language. Of course, if you do know how to code, you can edit the generated code directly.",
    },
    {
      question: "Can I edit my website after it's generated?",
      answer:
        "Absolutely! For template-based websites, you can use our visual editor to make changes to any element. For AI-generated websites, you have full access to edit the HTML, CSS, and JavaScript code in our built-in code editor. All changes can be previewed in real-time.",
    },
    {
      question: "How does the AI website generation work?",
      answer:
        "Our AI has been trained on thousands of high-quality websites to understand design principles and code structure. When you provide a description of your desired website, it analyzes your requirements and generates clean, well-structured code that meets your specifications. You can refine the results by providing more detailed prompts.",
    },
    {
      question: "Can I use my own domain name with my website?",
      answer:
        "Yes! While we provide free subdomains with all plans, you can easily connect your own custom domain name to your website. Our platform offers simple DNS management tools to help you set up your domain quickly.",
    },
    {
      question: "What happens if I need help or support?",
      answer:
        "We offer comprehensive support for all users. Our knowledge base includes detailed tutorials and guides. Premium users get priority email support and live chat assistance. Our community forum is also a great place to connect with other users and share tips.",
    },
    {
      question: "Is my website mobile-friendly?",
      answer:
        "Absolutely! All templates and AI-generated websites are fully responsive and mobile-friendly by default. Your site will look great on desktops, tablets, and smartphones without any additional work required.",
    },
    {
      question: "Can I download my website's code?",
      answer:
        "Yes, you can download all the code for your website as a ZIP file. This gives you complete ownership and the flexibility to host it anywhere or continue development in your preferred environment.",
    },
  ];

  return (
    <section className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have questions about WebCraft? We've got answers. If you can't find
            what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left bg-zinc-800 hover:bg-zinc-700 transition"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronRight
                  size={20}
                  className={`transition-transform duration-300 ${
                    openItem === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className={`bg-zinc-800/50 overflow-hidden transition-all duration-300 ${
                  openItem === index ? "max-h-96 p-4" : "max-h-0"
                }`}
              >
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description:
        "Perfect for simple personal websites and trying out the platform.",
      features: [
        "Template-based website creation",
        "3 pages maximum",
        "Basic AI generation (5 prompts/month)",
        "WebCraft subdomain",
        "Community support",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      description:
        "For professionals who need more features and advanced customization.",
      features: [
        "Unlimited template websites",
        "Unlimited pages",
        "Advanced AI generation (50 prompts/month)",
        "Custom domain connection",
        "Code editor with syntax highlighting",
        "Priority support",
      ],
      cta: "Choose Pro",
      highlight: true,
    },
    {
      name: "Business",
      price: "$29",
      period: "per month",
      description: "For teams and businesses with advanced needs.",
      features: [
        "Everything in Pro",
        "Unlimited AI prompts",
        "Team collaboration",
        "Advanced analytics",
        "White-label options",
        "Dedicated support",
      ],
      cta: "Choose Business",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include both
            template-based and AI-powered website creation capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border ${
                plan.highlight
                  ? "border-lime-500 shadow-lg shadow-lime-500/20"
                  : "border-zinc-700"
              }`}
            >
              <div
                className={`p-6 ${
                  plan.highlight ? "bg-lime-500/10" : "bg-zinc-800"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlight ? "text-lime-300" : "text-zinc-400"
                    }`}
                  >
                    {" "}
                    {plan.period}
                  </span>
                </div>
                <p className="text-zinc-400 mb-6">{plan.description}</p>
                <button
                  className={`w-full py-2 rounded-md font-medium transition ${
                    plan.highlight
                      ? "bg-lime-500 text-zinc-900 hover:bg-lime-400"
                      : "bg-zinc-700 hover:bg-zinc-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
              <div className="p-6 bg-zinc-900">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className={`mt-0.5 flex-shrink-0 ${
                          plan.highlight ? "text-lime-400" : "text-zinc-500"
                        }`}
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
            All plans come with a 14-day money-back guarantee. No questions
            asked. Not sure which plan is right for you? Contact us for a
            personalized recommendation.
          </p>
          <button className="px-6 py-3 bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 rounded-md transition">
            Compare Plans in Detail
          </button>
        </div>
      </div>
    </section>
  );
}

// Call to action section
function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-lime-500/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lime-500/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-zinc-400 mb-8">
            Join thousands of users who have already created stunning websites
            with WebCraft. No coding required, no design skills needed. Just
            your vision and our tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-lime-500 text-zinc-900 hover:bg-lime-400 rounded-md font-medium transition flex items-center justify-center gap-2">
              Start Building Now <Sparkles size={20} />
            </button>
            <button className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-md transition flex items-center justify-center gap-2">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer component
// function Footer() {
//   return (
//     <footer className="bg-zinc-900 border-t border-zinc-800">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div className="col-span-1 md:col-span-1">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="bg-lime-500 p-1 rounded">
//                 <Zap size={20} className="text-zinc-900" />
//               </div>
//               <span className="text-xl font-bold">WebCraft</span>
//             </div>
//             <p className="text-zinc-400 mb-6">
//               The ultimate static website builder combining templates and AI for
//               effortless website creation.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="p-2 bg-zinc-800 rounded-full hover:bg-zinc-700 transition"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                   aria-hidden="true"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Features</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Templates
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   AI Builder
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Code Editor
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Deployment
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Custom Domains
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Resources</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Tutorials
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Community
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Support Center
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Company</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="text-zinc-400 hover:text-lime-400 transition"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-zinc-500 text-sm">
//             © 2025 WebCraft. All rights reserved.
//           </p>
//           <div className="mt-4 md:mt-0">
//             <div className="flex items-center space-x-2">
//               <span className="text-zinc-500 text-sm">Stay updated:</span>
//               <div className="flex rounded-md overflow-hidden">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="bg-zinc-800 border-0 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-lime-500"
//                 />
//                 <button className="bg-lime-500 text-zinc-900 px-4 py-2 text-sm font-medium">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
