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
  CheckCircle,
} from "lucide-react";
import styles from "./about.module.css";

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
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "React, Next.js",
      emoji: "⚛️",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      name: "PostgreSQL, MongoDB, Redis",
      emoji: "🐘",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Node.js, Express JS",
      emoji: "🟢",
      color: "from-green-500 to-green-600",
    },
    {
      name: "CSS, Styled Components, Tailwind",
      emoji: "🎨",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Framer Motion, SVG animation",
      emoji: "🌊",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "React Query, Redux",
      emoji: "🔄",
      color: "from-red-500 to-red-600",
    },
  ];

  const bgClass = darkMode ? styles.bgDark : styles.bgLight;
  const textClass = darkMode ? styles.textDark : styles.textLight;
  const mutedClass = darkMode ? styles.mutedDark : styles.mutedLight;
  const cardClass = darkMode ? styles.cardDark : styles.cardLight;

  return (
    <div className={`${styles.container} ${bgClass} ${textClass}`}>
      {/* Header */}
      <section className={styles.aboutSection}>
        {/* <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </div> */}

        <div className={styles.aboutContent}>
          <div className={styles.greeting}>
            <p className={styles.greetingText}>
              Hey there, Welcome! I'm glad you're here. My name is Rajib Das and
              I'm a Software Engineer. I've been sharing educational lessons on
              various software engineering concepts and tools as I learn them.
              I'm absolutely positive you'll love the way I articulate them and
              find them useful.
            </p>
          </div>

          <div className={styles.story}>
            <h3 className={styles.storyTitle}>A Little Background</h3>
            <p className={styles.storyText}>
              I studied computer science at university but I was never into
              taking it seriously until shortly before my penultimate year. At
              that time, I was on a quest to become useful. And for that, I
              started getting a feel for "how to code" and thankfully, it didn't
              take too long to become obsessed with it.
            </p>
            <p className={styles.storyText}>
              I tried to attempt my programming experience with C/C++ but sooner
              I was introduced with a great teacher,{" "}
              <span className={styles.highlight}>Mr. Jonas Schmedtmann</span>,
              which pivoted my game plan by and large. His wonderful teaching
              skills made me fall in love with JavaScript and programming in
              general.
            </p>
            <p className={styles.storyText}>
              Circling back to that time brings one important realization -
              there were too many programming topics that felt foreign to me and
              still do, but with time it's getting easier to deal with.
            </p>
          </div>

          <div className={styles.learningPath}>
            <h3 className={styles.sectionTitle}>
              Topics I'm aiming to educate myself:
            </h3>
            <div className={styles.topicsGrid}>
              <div className={styles.topicCard}>
                <p className={styles.topicDesc}>
                  Database, Scaling Backend Services, REST APIs Design
                </p>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicContent}>
                  <p className={styles.topicDesc}>
                    Data Structures, Algorithms
                  </p>
                </div>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicContent}>
                  <p className={styles.topicDesc}>
                    Pointers, OOP Design, Functional Paradigm
                  </p>
                </div>
              </div>
              <div className={styles.topicCard}>
                <div className={styles.topicContent}>
                  <p className={styles.topicDesc}>
                    UI side of things: State Management, Core Web Vitals,
                    Different Rendering Trade-offs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.techStack}>
            <h3 className={styles.sectionTitle}>
              Commitment of the above deepening my relationships with these
              languages:
            </h3>
            <div className={styles.stackCategories}>
              <div className={styles.stackCategory}>
                <span className={styles.categoryLabel}>Backend</span>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>PostgreSQL</span>
                  <span className={styles.techTag}>NestJS</span>
                </div>
              </div>
              <div className={styles.stackCategory}>
                <span className={styles.categoryLabel}>Languages</span>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>JavaScript</span>
                  <span className={styles.techTag}>TypeScript</span>
                  <span className={styles.techTag}>C++</span>
                </div>
              </div>
              <div className={styles.stackCategory}>
                <span className={styles.categoryLabel}>Styling</span>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>CSS</span>
                  <span className={styles.techTag}>Tailwind</span>
                  <span className={styles.techTag}>Styled Components</span>
                </div>
              </div>
              <div className={styles.stackCategory}>
                <span className={styles.categoryLabel}>Frontend</span>
                <div className={styles.techTags}>
                  <span className={styles.techTag}>React</span>
                  <span className={styles.techTag}>Next.js</span>
                  <span className={styles.techTag}>React Query</span>
                  <span className={styles.techTag}>Redux</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <h3 className={styles.sectionTitle}>
              Other platforms where you can view my works:
            </h3>
            <div className={styles.linkCards}>
              <a
                href="https://github.com/rajib18197"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkName}>GitHub</span>
                  <span className={styles.linkUrl}>@rajib18197</span>
                </div>
              </a>
              <a
                href="https://leetcode.com/rajib_zest/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkName}>LeetCode</span>
                  <span className={styles.linkUrl}>@rajib_zest</span>
                </div>
              </a>
              <a
                href="https://hackernoon.com/about/raju01"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkCard}
              >
                <div className={styles.linkIcon}>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0v24h24V0H0zm14.14 10.74c-.1.07-.2.13-.32.18-.11.05-.24.08-.37.1-.14.02-.28.03-.43.03H9.98v3.02h2.47c.22 0 .43-.01.63-.04.2-.03.37-.08.52-.15.15-.07.27-.17.36-.29.09-.12.13-.28.13-.46 0-.21-.05-.38-.16-.52-.11-.14-.25-.25-.43-.33-.18-.08-.38-.14-.61-.17-.23-.03-.46-.05-.69-.05h-.65v-1.33h.64c.28 0 .53-.02.75-.07.22-.05.41-.12.56-.22.15-.1.26-.23.34-.38.08-.15.12-.33.12-.54 0-.18-.04-.33-.11-.45-.07-.12-.17-.21-.29-.28-.12-.07-.26-.12-.42-.15-.16-.03-.32-.05-.49-.05h-2.5V7.26h3.04c.15 0 .3.01.44.03.14.02.27.05.39.09.12.04.23.1.32.16.09.07.17.15.24.24.07.09.12.2.16.32.04.12.06.25.06.39 0 .27-.06.5-.18.68-.12.18-.28.33-.48.44z" />
                  </svg>
                </div>
                <div className={styles.linkContent}>
                  <span className={styles.linkName}>HackerNoon</span>
                  <span className={styles.linkUrl}>@raju01</span>
                </div>
              </a>
            </div>
          </div>

          <div className={styles.closingNote}>
            <p className={styles.closingText}>
              Good to see that you're still with me. Looking forward to getting
              to know you.{" "}
              <a href="https://www.linkedin.com/in/rajuzest/" target="_blank">
                You can connect with me on LinkedIn.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Experience */}
        <section className={styles.section}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle}>Career So Far</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={`${styles.experienceCard} ${cardClass}`}>
            <div className={styles.experienceHeader}>
              <div className={styles.experienceTitle}>
                <h3 className={styles.companyName}>Nexily</h3>
                <p className={styles.role}>Software Engineer</p>
              </div>
              <div className={`${styles.experienceMeta} ${mutedClass}`}>
                <p className={styles.location}>Mirpur-10, Dhaka, Bangladesh</p>
                <p>Feb 2025 - Present</p>
              </div>
            </div>
            <div className={styles.achievements}>
              <div className={styles.achievement}>
                <CheckCircle size={20} className={styles.achievementIcon} />
                <p>
                  Led and Developed the Frontend Application of “Investment
                  Marketplace Platform” used by investors and founders across
                  Bangladesh. Collaborating closely with clients, UI/UX designer
                  and Backend Developers to ensure optimal results.
                </p>
              </div>

              {/* 2 */}
              <div className={styles.achievement}>
                <CheckCircle size={20} className={styles.achievementIcon} />
                <div className={styles.achievementContent}>
                  <p className={styles.achievementText}>
                    Advocate for and led a re-architecture from{" "}
                    <code className={styles.code}>useEffect()</code> and{" "}
                    <code className={styles.code}>fetch()</code> to{" "}
                    <span className={styles.pattern}>
                      "Three Layers of Data"
                    </span>{" "}
                    pattern:
                  </p>
                  <div className={styles.layers}>
                    <div className={styles.layer}>
                      <span className={styles.layerNumber}>01</span>
                      <div className={styles.layerContent}>
                        <span className={styles.tech}>
                          React Server Components
                        </span>
                        <span className={styles.purpose}>
                          Initial data fetching
                        </span>
                      </div>
                    </div>
                    <div className={styles.layer}>
                      <span className={styles.layerNumber}>02</span>
                      <div className={styles.layerContent}>
                        <span className={styles.tech}>React Query</span>
                        <span className={styles.purpose}>
                          Client-side caching and updates
                        </span>
                      </div>
                    </div>
                    <div className={styles.layer}>
                      <span className={styles.layerNumber}>03</span>
                      <div className={styles.layerContent}>
                        <span className={styles.tech}>Optimistic Updates</span>
                        <span className={styles.purpose}>
                          Instant UI feedback
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className={styles.achievement}>
                <CheckCircle size={20} className={styles.achievementIcon} />
                <p>
                  Designed and Developed a Customer-facing website of Nexily and
                  an admin-only backend app to manage everything about its
                  content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle}>Academic Qualification</h2>
            <div className={styles.titleUnderline}></div>
          </div>

          <div className={`${styles.educationCard} ${cardClass}`}>
            <div className={styles.educationHeader}>
              <div className={styles.educationTitle}>
                <h3 className={styles.universityName}>
                  Bangladesh University of Business and Technology
                </h3>
                <p className={styles.degree}>
                  BSc in Computer Science and Engineering (2019 — 2023)
                </p>
              </div>
              <div className={`${styles.educationMeta} ${mutedClass}`}>
                <p className={styles.duration}>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className={`${styles.footer} ${mutedClass}`}>
        <p>Built with React, Tailwind, and a lot of ☕</p>
      </footer> */}
    </div>
  );
}
