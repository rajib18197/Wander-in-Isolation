"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Sparkles,
  BookOpen,
  Github,
  ExternalLink,
  Sun,
  Moon,
  Coffee,
  Boxes,
  Terminal,
  Zap,
  InfoIcon,
  ArrowBigRight,
} from "lucide-react";
import { ArrowRightCircle, CheckCircle } from "react-feather";
// import Education from "../components/Education";

export default function InteractiveResume() {
  const [darkMode, setDarkMode] = useState(true);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [particlePos, setParticlePos] = useState([]);
  const [codeLines, setCodeLines] = useState(0);
  const canvasRef = useRef(null);

  // Particle animation on coffee click
  const createParticles = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i * 360) / 12,
      color: ["#60a5fa", "#a78bfa", "#f472b6", "#fbbf24"][
        Math.floor(Math.random() * 4)
      ],
    }));

    setParticlePos((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticlePos((prev) =>
        prev.filter((p) => !newParticles.find((np) => np.id === p.id))
      );
    }, 1000);
  };

  // Animated code counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines((prev) => {
        const target = 47382;
        if (prev < target) {
          return Math.min(prev + 234, target);
        }
        return target;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Canvas wave animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 200;

    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x + frame) * 0.02) * 30 +
          Math.sin((x + frame) * 0.03) * 20;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = darkMode
        ? "rgba(96, 165, 250, 0.3)"
        : "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 3;
      ctx.stroke();

      frame += 2;
      requestAnimationFrame(animate);
    };

    animate();
  }, [darkMode]);

  const techStack = [
    {
      name: "JavaScript / TypeScript",
      emoji: "🔷",
      // description: "Type-safe JavaScript that scales",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "React, Next.js",
      emoji: "⚛️",
      // description: "Building component-driven UIs",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "PostgreSQL, MongoDB, Redis",
      emoji: "🐘",
      // description: "Relational database mastery",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Node.js, Express JS",
      emoji: "🟢",
      // description: "Backend JavaScript runtime",
      color: "from-green-500 to-green-600",
    },
    {
      name: "CSS, Styled Components, Tailwind",
      emoji: "🎨",
      // description: "Styling with modern techniques",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Framer Motion, SVG animation",
      emoji: "🌊",
      // description: "Smooth animations and transitions",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "React Query, Redux",
      emoji: "🔄",
      // description: "Async state management done right",
      color: "from-red-500 to-red-600",
    },
  ];

  const bgClass = darkMode ? "bg-slate-950" : "bg-slate-50";
  const textClass = darkMode ? "text-white" : "text-slate-900";
  const mutedClass = darkMode ? "text-slate-400" : "text-slate-600";
  const cardClass = darkMode
    ? "bg-slate-900 border-slate-800"
    : "bg-white border-slate-200";

  return (
    <div
      className={`min-h-screen ${textClass} transition-colors duration-500 relative`}
    >
      <div className="max-w-7xl flex flex-col gap-[40px] mx-auto px-6 py-16">
        {/* Experience */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-950 rounded-full" />
              <h2 className="text-[26px] font-semiBold text-slate-50 tracking-tight">
                <Boxes className="inline mr-3 text-blue-500" />
                Career So Far
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-slate-950 to-slate-400 rounded-full" />
            </div>
          </div>

          <div
            className={`${cardClass} border rounded-2xl p-8`}
            style={{
              background: "hsl(256deg 20% 4%)",
              border: "2px dashed rgb(85, 99, 233)",
              "border-radius": "0.6rem",
            }}
          >
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  Nexily
                </h3>
                <p className="text-[22px]">Software Developer</p>
              </div>
              <div className={`text-right ${mutedClass}`}>
                <p>Dhaka, Bangladesh</p>
                <p className="text-lg">Feb 2025 - Present</p>
              </div>
            </div>

            <div
              className={`${mutedClass} space-y-5 leading-relaxed text-[16px] text-slate-200`}
              style={{ marginBottom: "-20px" }}
            >
              <div className="flex gap-3 items-start">
                <div>
                  <CheckCircle />
                </div>
                Leading and Developing the Frontend Web Application of
                “Investment Marketplace Platform” used by investors and founders
                across Bangladesh.
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <CheckCircle />
                </div>
                Collaborating closely with clients, UI/UX designer and Backend
                Developers to ensure optimal results.
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <CheckCircle />
                </div>
                Applying various Software Engineering Principles, Design
                Patterns
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <CheckCircle />
                </div>
                Utilizing React.js Server Components Paradigm, Next.js Caching,
                Next.js, different Rendering Strategies (SSR, ISR, SSG, CSR)
              </div>
              <div className="flex gap-3 items-start">
                <div>
                  <CheckCircle />
                </div>
                React Query for Async State management, Form Validation,
                React.js Server Action for data mutation, Suspense API to avoid
                layout shift, Lazy Loading for defer loading JS code until it's
                needed, Optimistic UI
              </div>
            </div>

            <WhimsicalWave />
          </div>
        </section>

        {/* Learning Section */}
        <AlwaysLearningSection />
        {/* <Education /> */}

        {/* Education */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-950 rounded-full" />
              <h2 className="text-[26px] font-semiBold text-slate-50 tracking-tight">
                <BookOpen className="inline mr-3 text-green-500" />
                Academic Qualification
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-slate-950 to-slate-400 rounded-full" />
            </div>
          </div>

          <div
            className={`${cardClass} border rounded-2xl p-8 text-center`}
            style={{
              background: "hsl(256deg 20% 4%)",
              border: "2px dashed rgb(85, 99, 233)",
              "border-radius": "0.6rem",
            }}
          >
            <h3 className="text-[22px] font-bold mb-2">
              Bangladesh University of Business and Technology
            </h3>
            <p
              className="text-[16px] mb-2"
              style={{ color: "rgb(85, 99, 233)" }}
            >
              BSc in Computer Science and Engineering (2019 — 2023)
            </p>
            <p className={`${mutedClass} text-[14px]`}>Dhaka, Bangladesh</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center">
          <p className={mutedClass}>
            Built with React, Tailwind, and a lot of ☕
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          display: inline-block;
          transform-origin: 70% 70%;
        }
        @keyframes particle-float {
          to {
            transform: rotate(var(--angle)) translateY(-100px);
            opacity: 0;
          }
        }
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand {
          transform-origin: left;
          animation: expand 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

function AlwaysLearningSection() {
  const skills = [
    {
      title: "Backend & Data",
      icon: Database,
      items: ["Database intricacies", "REST API development"],
    },
    {
      title: "Computer Science",
      icon: Terminal,
      items: [
        "Data structures & algorithms",
        "Pointers, OOP Paradigm",
        "Functional programming",
      ],
    },
    {
      title: "Frontend Excellence",
      icon: Sparkles,
      items: [
        "Web animations",
        "Accessible UI (a11y)",
        "Modern CSS architecture",
      ],
    },
    {
      title: "Application Specific",
      icon: Zap,
      items: ["feature rich and dynamic web apps", "Data Caching"],
    },
  ];

  return (
    <section className="relative mb-32 px-4">
      <div className="relative">
        {/* Refined header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-950 rounded-full" />
            <h2 className="text-[26px] font-semiBold text-slate-50 tracking-tight">
              Invest Time and Energy Mostly on Educating Myself
            </h2>
            <div className="w-1 h-8 bg-gradient-to-b from-slate-950 to-slate-400 rounded-full" />
          </div>
        </div>

        {/* Main content card with depth */}
        <div className="relative">
          <div
            style={{
              background: "hsl(256deg 20% 4%)",
              // border: "2px groove rgb(85, 99, 233)",
              // "border-radius": "0.6rem",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
            className="relative rounded-[10px] overflow-hidden"
          >
            {/* Skills grid */}
            <div className="relative grid md:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const isLeft = index % 2 === 0;
                const isTop = index < 2;

                return (
                  <div key={skill.title} className={`px-10 py-8`}>
                    {/* Header */}
                    <div
                      className="flex items-center gap-3 mb-6 pb-4"
                      style={{
                        borderBottom: "2px solid rgb(85, 99, 233)",
                        // "border-radius": "0.6rem",
                      }}
                    >
                      <div className="p-2.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950">
                        <Icon
                          className="text-white"
                          size={20}
                          strokeWidth={2}
                        />
                      </div>
                      <h4
                        style={{
                          "background-image":
                            "linear-gradient(45deg, rgb(115, 43, 247) 0%, rgb(125, 48, 248) 13%)",
                          "background-size": "100%",
                          "background-clip": "text",
                          "-webkit-text-fill-color": "transparent",
                        }}
                        className="font-semibold text-[20px]"
                      >
                        {skill.title}
                      </h4>
                    </div>

                    {/* Items */}
                    <ul className="space-y-3.5">
                      {skill.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-100 group/item"
                        >
                          <ArrowRightCircle />
                          <span className="leading-relaxed text-[16px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Footer note with elegant separation */}
            <div
              className="relative flex items-start gap-3 px-10 py-8 text-[16px]"
              style={{
                background: "hsl(176deg 55% 10%)",
                color: "hsl(160deg 80% 40%)",
              }}
            >
              <div>
                <CheckCircle />
              </div>
              <p className="leading-relaxed">
                Though I’m not working with{" "}
                <span className="font-semibold text-green-500">
                  C/C++, Java
                </span>{" "}
                in my day-to-day job but to get better intuition of Pointers,
                OOP and other low level things I went through the learning
                materials of these languages quite a bit on my initial days and
                constantly try to keep in touch with them for betterment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhimsicalWave() {
  const svgRef = useRef(null);

  useEffect(() => {
    // No manual animation logic needed as animation handled via CSS keyframes
    // This is a placeholder hook to comply with your React components structure
  }, []);

  return (
    <section className="relative overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-48"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(15, 23, 42, 0.3)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0)" />
          </linearGradient>
        </defs>

        {/* Background gentle wave */}
        <path
          fill="url(#wave-gradient)"
          className="wave1"
          d="M0 240 Q 360 200 720 240 T 1440 240 L1440 320 L0 320 Z"
        />

        {/* Middle wave */}
        <path
          fill="rgba(15, 23, 42, 0.15)"
          className="wave2"
          d="M0 220 Q 360 180 720 220 T 1440 220 L1440 320 L0 320 Z"
        />

        {/* Foreground wave - main swoop */}
        <path
          fill="rgba(15, 23, 42, 0.25)"
          className="wave3"
          d="M0 200 Q 360 160 720 200 T 1440 200 L1440 320 L0 320 Z"
        />
      </svg>

      <style jsx>{`
        .wave1 {
          animation: slideWave 30s linear infinite,
            floatWave1 10s ease-in-out infinite;
        }
        .wave2 {
          animation: slideWave 20s linear infinite reverse,
            floatWave2 8s ease-in-out infinite;
        }
        .wave3 {
          animation: slideWave 15s linear infinite,
            floatWave3 12s ease-in-out infinite;
        }
        @keyframes slideWave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes floatWave1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes floatWave2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatWave3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
}
