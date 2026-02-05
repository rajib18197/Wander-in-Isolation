"use client";

import React, { useState, useEffect } from "react";
import {
  Database,
  Terminal,
  Sparkles,
  Zap,
  ArrowRightCircle,
  CheckCircle,
  Code2,
  BookOpen,
  ExternalLink,
  FileText,
  Lightbulb,
  X,
  ChevronRight,
} from "lucide-react";

function Education() {
  const [activeCard, setActiveCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showInsights, setShowInsights] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setHasAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    {
      title: "Backend & Data",
      icon: Database,
      items: ["Database intricacies", "REST API development"],
      description: "Building robust server-side systems and data architectures",
      tools: ["Node.js", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "rgba(59, 130, 246, 0.1)",
      insights: [
        {
          concept: "Database Indexing",
          learned: "Indexes are like book indexes - they help find data fast",
          impact: "Reduced query time from 3s to 50ms in production",
        },
        {
          concept: "REST API Design",
          learned: "Resources are nouns, HTTP methods are verbs",
          impact: "Created consistent API patterns across 15+ endpoints",
        },
        {
          concept: "Connection Pooling",
          learned: "Reusing database connections instead of creating new ones",
          impact: "Handled 10x more concurrent users with same resources",
        },
      ],
      projects: [
        {
          name: "E-commerce API",
          description:
            "Built RESTful API with JWT auth, handled 50k+ requests/day",
          tech: ["Express", "PostgreSQL", "JWT"],
        },
        {
          name: "Real-time Chat Backend",
          description:
            "WebSocket server with Redis pub/sub for message delivery",
          tech: ["Socket.io", "Redis", "MongoDB"],
        },
      ],
      articles: [
        {
          title: "Optimizing Database Queries: From Theory to Practice",
          platform: "HackerNoon",
          featured: true,
        },
      ],
    },
    {
      title: "Computer Science",
      icon: Terminal,
      items: [
        "Data structures & algorithms",
        "Pointers, OOP Paradigm",
        "Functional programming",
      ],
      description:
        "Mastering fundamental CS concepts for efficient problem-solving",
      tools: ["C/C++", "Java", "Python", "Rust"],
      color: "from-emerald-500 to-teal-500",
      bgGlow: "rgba(16, 185, 129, 0.1)",
      insights: [
        {
          concept: "Pointers & Memory",
          learned: "Pointer is just a variable storing memory address",
          impact: "Built custom data structures, understood language internals",
        },
        {
          concept: "Hash Tables",
          learned: "Array + Hash function = O(1) lookup magic",
          impact: "Optimized search from O(n) to O(1) in critical paths",
        },
        {
          concept: "OOP vs Functional",
          learned: "OOP models real world, FP models transformations",
          impact: "Choose right paradigm based on problem domain",
        },
        {
          concept: "Dynamic Programming",
          learned: "Break problems into overlapping subproblems, cache results",
          impact: "Solved complex optimization problems efficiently",
        },
      ],
      projects: [
        {
          name: "Custom Memory Allocator",
          description:
            "Built malloc/free implementation in C to understand heap",
          tech: ["C", "Memory Management"],
        },
        {
          name: "Algorithm Visualizer",
          description: "Interactive tool showing sorting & graph algorithms",
          tech: ["JavaScript", "Canvas API"],
        },
      ],
      articles: [
        {
          title: "Understanding Pointers: The Memory Perspective",
          platform: "HackerNoon",
          featured: true,
        },
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
      description: "Crafting beautiful, accessible user experiences",
      tools: ["React", "Tailwind", "Framer Motion", "GSAP"],
      color: "from-purple-500 to-pink-500",
      bgGlow: "rgba(168, 85, 247, 0.1)",
      insights: [
        {
          concept: "Component Composition",
          learned: "Build with small, reusable pieces like LEGO blocks",
          impact: "Reduced code duplication by 60%, faster feature development",
        },
        {
          concept: "CSS Custom Properties",
          learned: "Variables that cascade and can be changed with JavaScript",
          impact: "Built dynamic theming system used across entire app",
        },
        {
          concept: "ARIA & Accessibility",
          learned: "Screen readers navigate by landmarks, roles, and labels",
          impact: "Made apps usable for 15% more users with disabilities",
        },
        {
          concept: "Animation Timing",
          learned: "60fps = 16.67ms per frame. Keep it under that.",
          impact: "Smooth animations on low-end devices",
        },
      ],
      projects: [
        {
          name: "Design System Library",
          description: "40+ accessible components with Storybook documentation",
          tech: ["React", "TypeScript", "Storybook"],
        },
        {
          name: "Interactive Portfolio",
          description: "Award-winning portfolio with advanced animations",
          tech: ["Next.js", "GSAP", "Three.js"],
        },
      ],
      articles: [
        {
          title: "Building Accessible Web Animations",
          platform: "HackerNoon",
          featured: true,
        },
        {
          title: "Modern CSS Architecture: From BEM to Utility-First",
          platform: "HackerNoon",
          featured: false,
        },
      ],
    },
    {
      title: "Application Specific",
      icon: Zap,
      items: ["Feature rich and dynamic web apps", "Data Caching"],
      description: "Creating performant, production-ready applications",
      tools: ["Next.js", "Redux", "React Query", "TypeScript"],
      color: "from-orange-500 to-red-500",
      bgGlow: "rgba(249, 115, 22, 0.1)",
      insights: [
        {
          concept: "Redux Flow",
          learned:
            "Actions describe WHAT happened, Reducers describe HOW state changes",
          impact: "Predictable state management across complex apps",
        },
        {
          concept: "Data Caching Strategy",
          learned: "Cache at multiple layers: browser, CDN, server, database",
          impact: "Page load improved from 2.5s to 400ms",
        },
        {
          concept: "Code Splitting",
          learned: "Load only what user needs, when they need it",
          impact: "Initial bundle size reduced by 70%",
        },
        {
          concept: "Optimistic Updates",
          learned: "Update UI immediately, sync with server in background",
          impact: "App feels instant even on slow connections",
        },
      ],
      projects: [
        {
          name: "Task Management Platform",
          description: "Real-time collaborative app with offline support",
          tech: ["React", "Redux", "Firebase"],
        },
        {
          name: "Analytics Dashboard",
          description: "Data visualization with complex filtering and exports",
          tech: ["Next.js", "Chart.js", "React Query"],
        },
      ],
      articles: [
        {
          title: "Redux Mental Model: Actions vs Reducers Explained",
          platform: "HackerNoon",
          featured: true,
        },
        {
          title: "Advanced Caching Strategies for Modern Web Apps",
          platform: "HackerNoon",
          featured: true,
        },
      ],
    },
  ];

  const toggleInsight = (skillIndex, insightIndex) => {
    const key = `${skillIndex}-${insightIndex}`;
    setShowInsights((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="relative mb-32 px-4">
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-3 mb-4"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "translateY(0)" : "translateY(-20px)",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <div
              className="w-1 h-8 bg-gradient-to-b from-slate-400 to-slate-950 rounded-full"
              style={{
                transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
                transition:
                  "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
                transformOrigin: "top",
              }}
            />
            <h2 className="text-[26px] font-semiBold text-slate-50 tracking-tight">
              Invest Time and Energy Mostly on Educating Myself
            </h2>
            <div
              className="w-1 h-8 bg-gradient-to-b from-slate-950 to-slate-400 rounded-full"
              style={{
                transform: hasAnimated ? "scaleY(1)" : "scaleY(0)",
                transition:
                  "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
                transformOrigin: "bottom",
              }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="relative">
          <div
            style={{
              background: "hsl(256deg 20% 4%)",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "scale(1)" : "scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s",
            }}
            className="relative rounded-[10px] overflow-hidden"
          >
            {/* Skills grid */}
            <div className="relative grid md:grid-cols-2">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const isActive = activeCard === index;
                const isExpanded = expandedCard === index;
                const delay = 0.6 + index * 0.15;

                return (
                  <div
                    key={skill.title}
                    className="relative"
                    style={{
                      gridColumn: isExpanded ? "1 / -1" : "auto",
                      opacity: hasAnimated ? 1 : 0,
                      transform: hasAnimated
                        ? "translateY(0)"
                        : "translateY(30px)",
                      transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
                    }}
                  >
                    <div
                      className="px-10 py-8 relative cursor-pointer h-full"
                      onMouseEnter={() => !isExpanded && setActiveCard(index)}
                      onMouseLeave={() => setActiveCard(null)}
                      style={{
                        background:
                          isActive || isExpanded ? skill.bgGlow : "transparent",
                        transition: "background 0.3s ease",
                      }}
                    >
                      {/* Header */}
                      <div
                        className="flex items-center justify-between mb-6 pb-4 relative z-10"
                        style={{
                          borderBottom: "2px solid rgb(85, 99, 233)",
                          transition: "border-color 0.3s ease",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950"
                            style={{
                              transform: isActive
                                ? "scale(1.1) rotate(5deg)"
                                : "scale(1) rotate(0deg)",
                              transition:
                                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                            }}
                          >
                            <Icon
                              className="text-white"
                              size={20}
                              strokeWidth={2}
                            />
                          </div>
                          <h4
                            style={{
                              backgroundImage:
                                "linear-gradient(45deg, rgb(115, 43, 247) 0%, rgb(125, 48, 248) 13%)",
                              backgroundSize: "100%",
                              backgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                            }}
                            className="font-semibold text-[20px]"
                          >
                            {skill.title}
                          </h4>
                        </div>
                        <button
                          onClick={() =>
                            setExpandedCard(isExpanded ? null : index)
                          }
                          className="text-slate-400 hover:text-purple-400 transition-colors"
                          style={{
                            transform: isExpanded
                              ? "rotate(45deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          {isExpanded ? (
                            <X size={20} />
                          ) : (
                            <ChevronRight size={20} />
                          )}
                        </button>
                      </div>

                      {/* Collapsed View */}
                      {!isExpanded && (
                        <>
                          {/* Description */}
                          <div
                            className="mb-4 overflow-hidden relative z-10"
                            style={{
                              maxHeight: isActive ? "100px" : "0",
                              opacity: isActive ? 1 : 0,
                              transition:
                                "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                              marginBottom: isActive ? "16px" : "0",
                            }}
                          >
                            <p className="text-slate-300 text-[14px] leading-relaxed flex items-start gap-2">
                              <BookOpen
                                size={16}
                                className="mt-1 flex-shrink-0"
                              />
                              <span>{skill.description}</span>
                            </p>
                          </div>

                          {/* Items */}
                          <ul className="space-y-3.5 relative z-10">
                            {skill.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-3 text-slate-100"
                                style={{
                                  opacity: hasAnimated ? 1 : 0,
                                  transform: hasAnimated
                                    ? "translateX(0)"
                                    : "translateX(-20px)",
                                  transition: `all 0.5s ease ${
                                    delay + 0.2 + i * 0.1
                                  }s`,
                                }}
                              >
                                <ArrowRightCircle
                                  size={20}
                                  style={{
                                    transform: isActive
                                      ? "translateX(4px)"
                                      : "translateX(0)",
                                    transition: "transform 0.3s ease",
                                    color: isActive
                                      ? "rgb(168, 85, 247)"
                                      : "currentColor",
                                  }}
                                />
                                <span className="leading-relaxed text-[16px]">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>

                          {/* Tools */}
                          <div
                            className="mt-4 flex items-center gap-2 flex-wrap relative z-10"
                            style={{
                              opacity: isActive ? 1 : 0,
                              transform: isActive
                                ? "translateY(0)"
                                : "translateY(10px)",
                              transition:
                                "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
                              maxHeight: isActive ? "100px" : "0",
                              overflow: "hidden",
                            }}
                          >
                            <Code2 size={14} className="text-slate-400" />
                            {skill.tools.map((tool, i) => (
                              <span
                                key={i}
                                className="text-[12px] px-2 py-1 rounded-md bg-slate-800/50 text-slate-300 border border-slate-700"
                                style={{
                                  opacity: isActive ? 1 : 0,
                                  transform: isActive
                                    ? "scale(1)"
                                    : "scale(0.8)",
                                  transition: `all 0.3s ease ${0.05 * i}s`,
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>

                          {/* Expand hint */}
                          <div
                            className="mt-6 text-center relative z-10"
                            style={{
                              opacity: isActive ? 1 : 0,
                              transform: isActive
                                ? "translateY(0)"
                                : "translateY(10px)",
                              transition: "all 0.4s ease 0.2s",
                            }}
                          >
                            <button
                              onClick={() => setExpandedCard(index)}
                              className="text-[13px] text-purple-400 hover:text-purple-300 flex items-center gap-2 mx-auto"
                            >
                              <Lightbulb size={14} />
                              Click to see insights, projects & articles
                              <ChevronRight size={14} />
                            </button>
                          </div>
                        </>
                      )}

                      {/* Expanded View */}
                      {isExpanded && (
                        <div className="relative z-10">
                          {/* Description */}
                          <div className="mb-6">
                            <p className="text-slate-300 text-[15px] leading-relaxed flex items-start gap-2">
                              <BookOpen
                                size={18}
                                className="mt-1 flex-shrink-0 text-purple-400"
                              />
                              <span>{skill.description}</span>
                            </p>
                          </div>

                          <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column: Insights */}
                            <div>
                              <h5 className="text-slate-200 font-semibold text-[17px] mb-4 flex items-center gap-2">
                                <Lightbulb
                                  size={18}
                                  className="text-yellow-400"
                                />
                                Key Insights
                              </h5>
                              <div className="space-y-3">
                                {skill.insights.map((insight, i) => {
                                  const isInsightOpen =
                                    showInsights[`${index}-${i}`];
                                  return (
                                    <div
                                      key={i}
                                      className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 hover:border-purple-500/50 transition-all cursor-pointer"
                                      onClick={() => toggleInsight(index, i)}
                                      style={{
                                        opacity: 0,
                                        transform: "translateX(-20px)",
                                        animation: `slideInLeft 0.5s ease forwards ${
                                          i * 0.1
                                        }s`,
                                      }}
                                    >
                                      <div className="flex items-start justify-between gap-2">
                                        <h6 className="text-slate-100 font-medium text-[15px]">
                                          {insight.concept}
                                        </h6>
                                        <ChevronRight
                                          size={16}
                                          className="text-slate-400 flex-shrink-0 mt-1"
                                          style={{
                                            transform: isInsightOpen
                                              ? "rotate(90deg)"
                                              : "rotate(0deg)",
                                            transition: "transform 0.3s ease",
                                          }}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          maxHeight: isInsightOpen
                                            ? "500px"
                                            : "0",
                                          opacity: isInsightOpen ? 1 : 0,
                                          overflow: "hidden",
                                          transition:
                                            "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                        }}
                                      >
                                        <div className="mt-3 space-y-2">
                                          <div className="flex items-start gap-2">
                                            <span className="text-[12px] text-purple-400 font-medium mt-0.5">
                                              What I learned:
                                            </span>
                                            <p className="text-[13px] text-slate-300 leading-relaxed flex-1">
                                              {insight.learned}
                                            </p>
                                          </div>
                                          <div className="flex items-start gap-2">
                                            <span className="text-[12px] text-green-400 font-medium mt-0.5">
                                              Impact:
                                            </span>
                                            <p className="text-[13px] text-slate-300 leading-relaxed flex-1">
                                              {insight.impact}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Right Column: Projects & Articles */}
                            <div>
                              {/* Projects */}
                              <h5 className="text-slate-200 font-semibold text-[17px] mb-4 flex items-center gap-2">
                                <Code2 size={18} className="text-blue-400" />
                                Projects Built
                              </h5>
                              <div className="space-y-3 mb-8">
                                {skill.projects.map((project, i) => (
                                  <div
                                    key={i}
                                    className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 hover:border-blue-500/50 transition-all"
                                    style={{
                                      opacity: 0,
                                      transform: "translateX(20px)",
                                      animation: `slideInRight 0.5s ease forwards ${
                                        i * 0.1 + 0.2
                                      }s`,
                                    }}
                                  >
                                    <h6 className="text-slate-100 font-medium text-[15px] mb-2">
                                      {project.name}
                                    </h6>
                                    <p className="text-[13px] text-slate-400 mb-3 leading-relaxed">
                                      {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {project.tech.map((tech, j) => (
                                        <span
                                          key={j}
                                          className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Articles */}
                              <h5 className="text-slate-200 font-semibold text-[17px] mb-4 flex items-center gap-2">
                                <FileText
                                  size={18}
                                  className="text-green-400"
                                />
                                Published Articles
                              </h5>
                              <div className="space-y-3">
                                {skill.articles.map((article, i) => (
                                  <div
                                    key={i}
                                    className="bg-slate-900/50 rounded-lg p-4 border border-slate-800 hover:border-green-500/50 transition-all"
                                    style={{
                                      opacity: 0,
                                      transform: "translateX(20px)",
                                      animation: `slideInRight 0.5s ease forwards ${
                                        i * 0.1 + 0.4
                                      }s`,
                                    }}
                                  >
                                    <div className="flex items-start gap-2 mb-2">
                                      <h6 className="text-slate-100 font-medium text-[14px] flex-1 leading-snug">
                                        {article.title}
                                      </h6>
                                      <ExternalLink
                                        size={14}
                                        className="text-slate-400 flex-shrink-0 mt-0.5"
                                      />
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[12px] text-slate-400">
                                        {article.platform}
                                      </span>
                                      {article.featured && (
                                        <span className="text-[11px] px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-700/50">
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="relative flex items-start gap-3 px-10 py-8 text-[16px]"
              style={{
                background: "hsl(176deg 55% 10%)",
                color: "hsl(160deg 80% 40%)",
                opacity: hasAnimated ? 1 : 0,
                transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s",
              }}
            >
              <div
                style={{
                  transform: hasAnimated
                    ? "scale(1) rotate(0deg)"
                    : "scale(0) rotate(-180deg)",
                  transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s",
                }}
              >
                <CheckCircle />
              </div>
              <p className="leading-relaxed">
                Though I'm not working with{" "}
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

      <style>{`
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Education;
