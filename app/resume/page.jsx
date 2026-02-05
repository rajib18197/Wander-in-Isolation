"use client";

import React from "react";
import {
  Briefcase,
  BookOpen,
  Code2,
  GraduationCap,
  ExternalLink,
  Github,
  CheckCircle,
  Download,
} from "lucide-react";

export default function Resume() {
  const cardClass = "bg-slate-900 border-slate-800";
  const textClass = "text-white";
  const mutedClass = "text-slate-400";

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            @page {
              margin: 0.5in;
              size: letter;
            }
          }
        `}
      </style> */}
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-[4px] overflow-hidden mb-[200px]">
        {/* <div className="max-w-4xl mx-auto mb-4 print:hidden">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium ml-auto"
          >
            <Download size={20} />
            Download as PDF
          </button>
        </div> */}
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-12">
          <h1 className="text-5xl font-bold mb-6 tracking-tight">
            Rajib Das || Software Engineer
          </h1>
          <p className="text-[16px] text-indigo-100 mb-10 leading-relaxed">
            Helping to build rich & dynamic web apps with JavaScript /
            TypeScript | PostgreSQL | React JS | Next JS | Node JS | CSS |
            Animations | Accessible UI (a11y)
          </p>
          <div className="flex flex-wrap gap-4 text-lg">
            <a
              href="https://github.com/rajib18197"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://leetcode.com/rajib_zest/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Code2 size={16} />
              <span>LeetCode</span>
            </a>
            <a
              href="https://hackernoon.com/about/raju01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
            >
              <ExternalLink size={16} />
              <span>HackerNoon</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-12 space-y-20">
          {/* Experience Section */}
          <section>
            <div
              className="flex items-center gap-3 mb-6 pb-2"
              style={{
                borderBottom: "3px solid rgb(85, 99, 233)",
              }}
            >
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">Experience</h2>
            </div>

            <div className="border-l-4 border-indigo-200 pl-6 ml-3">
              <div className="bg-gradient-to-br from-slate-50 to-indigo-50 p-6 rounded-[4px]">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-bold text-slate-800">
                    Software Developer
                  </h3>
                  <span className="text-md font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    Feb 2025 - Present
                  </span>
                </div>
                <p className="text-xl font-medium text-indigo-600 mb-4">
                  Nexily
                </p>

                <div className="space-y-3 text-slate-700 leading-relaxed text-[17px]">
                  <p className="flex gap-2 ">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>
                      Leading frontend development for an investment consultancy
                      platform that bridges investors with entrepreneurs,
                      transforming how capital meets innovation.
                    </span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>
                      Championed a complete re-architecture from imperative
                      useEffect patterns to a sophisticated '3 layers of Data'
                      approach: server components for initial loads, React Query
                      for intelligent caching, and optimistic updates for
                      seamless user experience.
                    </span>
                  </p>
                  <p className="flex gap-2">
                    <span className="text-indigo-500 mt-1">▸</span>
                    <span>
                      Designed and built both a customer-facing website and a
                      comprehensive admin backend, creating a full ecosystem for
                      content management and user engagement.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Published Writing Section */}
          <section>
            <div
              className="flex items-center gap-3 mb-6 pb-2"
              style={{
                borderBottom: "3px solid rgb(85, 99, 233)",
              }}
            >
              <div className="bg-blue-100 p-2 rounded-lg">
                <BookOpen className="text-blue-600" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">
                Published Writings
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-[4px]">
                <h3 className="text-[16px] font-semibold text-slate-800 mb-2">
                  The Why behind Suspense API: Quest for the original Vision
                </h3>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-blue-600 font-medium">HackerNoon</span>
                  <span className="text-slate-400">•</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-[4px]">
                <h3 className="text-[16px] font-semibold text-slate-800 mb-2">
                  A look on making a react component lean towards cohesiveness
                  and reactivity
                </h3>
                <div className="flex items-center gap-2 text-lg">
                  <span className="text-blue-600 font-medium">HackerNoon</span>
                  <span className="text-slate-400">•</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                    Featured
                  </span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-[4px]">
                <h3 className="text-[16px] font-semibold text-slate-800">
                  Framing State Design
                </h3>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <div
              className="flex items-center gap-3 mb-6 pb-2"
              style={{
                borderBottom: "3px solid rgb(85, 99, 233)",
              }}
            >
              <div className="bg-purple-100 p-2 rounded-lg">
                <Code2 className="text-purple-600" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">
                Technical Skills
              </h2>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-[4px]">
              <div className="mb-12 text-[16px]">
                <p className="text-slate-700 leading-relaxed mb-4">
                  I invest my time and energy in deep learning, exploring the
                  fundamental building blocks that power modern applications:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Database architecture & REST API design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Data structures & algorithms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>OOP principles & pointer mechanics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Functional paradigms & state management</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Animation systems & accessible UI</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span>Dynamic, feature-rich web applications</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-3 text-[16px] mb-12">
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      PostgreSQL
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      MongoDB
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      JavaScript
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      React JS
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Next JS
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Node.js
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Express.js
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      React Query
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Redux
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Framer Motion
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Tailwind CSS
                    </span>
                    <span className="bg-white text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm">
                      Styled Components
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-[4px] flex items-start gap-3 px-10 py-8 text-[16px]"
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
                    in my day-to-day job but to get better intuition of
                    Pointers, OOP and other low level things I went through the
                    learning materials of these languages quite a bit on my
                    initial days and constantly try to keep in touch with them
                    for betterment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-32">
            <div
              className="flex items-center gap-3 mb-6 pb-2"
              style={{
                borderBottom: "3px solid rgb(85, 99, 233)",
              }}
            >
              <div className="bg-purple-100 p-2 rounded-lg">
                <Code2 className="text-purple-600" size={24} />
              </div>
              <h2 className="text-4xl font-bold text-slate-800">Education</h2>
            </div>

            <div
              className={`${cardClass} rounded-[4px] p-8 text-center`}
              style={{
                background: "hsl(256deg 20% 4%)",
                //   border: "2px dashed rgb(85, 99, 233)",
                //   "border-radius": "0.6rem",
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
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-100 to-blue-100 p-8 text-center text-[14px]">
          <p className="text-slate-600 italic leading-relaxed max-w-2xl mx-auto">
            "I believe in the power of continuous learning and thoughtful
            engineering. Every line of code is an opportunity to create
            something meaningful, and every challenge is a chance to grow."
          </p>
        </div>
      </div>
    </>
  );
}
