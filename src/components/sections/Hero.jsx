import { ArrowDown, ArrowRight, FileText } from "lucide-react";
import TypingText from "../ui/TypingText";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="container-custom relative z-10 w-full py-24 sm:py-28 lg:py-32">
        {/* =========================================
            HERO GRID
        ========================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* =========================================
              HERO CONTENT
          ========================================== */}

          <div className="hero-content">
            {/* Availability Status */}
            <div className="hero-status mb-6">
              <span className="hero-status-dot" />

              <span>Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="font-['Orbitron'] text-sm font-medium uppercase tracking-[0.25em] text-(--primary) sm:text-base">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="max-w-2xl font-['Orbitron'] text-4xl font-bold leading-[1.05] tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
              Darwin <span className="gradient-text">Catbagan</span>
            </h1>

            {/* Typing Role */}
            <div className="mt-4">
              <h2 className="font-['Orbitron'] text-xl font-semibold leading-tight text-(--text-secondary)">
                <TypingText
                  words={[
                    "Software Developer",
                    "React Developer",
                    "Frontend Developer",
                    "IT Support",
                  ]}
                  typingSpeed={90}
                  deletingSpeed={40}
                  pauseDuration={1800}
                />
              </h2>

              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-(--text-muted) sm:text-base">
                <span>React.js</span>

                <span className="text-(--primary)">•</span>

                <span>JavaScript</span>

                <span className="text-(--primary)">•</span>

                <span>Modern Web Development</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-(--text-secondary) sm:text-lg sm:leading-8">
              I build modern, responsive, and user-focused web applications with
              clean code, thoughtful interfaces, and reliable functionality.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* View Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-(--shadow) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-hover)"
              >
                <span>View Projects</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              {/* Resume */}
              <a
                href="/documents/Darwin-Catbagan-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--surface)/50 px-6 py-3.5 text-sm font-semibold text-(--text) backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--border-hover) hover:text-(--primary) hover:shadow-(--shadow-hover)"
              >
                <FileText size={18} aria-hidden="true" />

                <span>View Resume</span>
              </a>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-(--text-muted)">
                Working with
              </p>

              <div className="flex flex-wrap gap-2">
                {["React", "JavaScript", "Tailwind CSS", "SQL", "Git"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-(--border) bg-(--surface)/50 px-3 py-1.5 text-xs font-medium text-(--text-secondary) backdrop-blur-sm transition-all duration-300 hover:border-(--border-hover) hover:text-(--primary)"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* =========================================
              HERO VISUAL
          ========================================== */}

          <div className="hero-visual relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="hero-image-container">
              {/* =====================================
                  ANIMATED RINGS
              ====================================== */}

              <div className="hero-ring hero-ring-one" aria-hidden="true" />

              <div className="hero-ring hero-ring-two" aria-hidden="true" />

              {/* =====================================
                  IMAGE GLOW
              ====================================== */}

              <div className="hero-image-glow" aria-hidden="true" />

              {/* =====================================
                  FLOATING TECH ICONS
              ====================================== */}

              {/* React */}
              <div
                className="hero-tech-icon hero-tech-icon-react"
                aria-label="React"
              >
                <span>⚛</span>
              </div>

              {/* JavaScript */}
              <div
                className="hero-tech-icon hero-tech-icon-js"
                aria-label="JavaScript"
              >
                <span>JS</span>
              </div>

              {/* Git */}
              <div
                className="hero-tech-icon hero-tech-icon-git"
                aria-label="Git"
              >
                <span>Git</span>
              </div>

              {/* Code */}
              <div
                className="hero-tech-icon hero-tech-icon-code"
                aria-label="Web Development"
              >
                <span>&lt;/&gt;</span>
              </div>

              {/* SQL */}
              <div
                className="hero-tech-icon hero-tech-icon-sql"
                aria-label="SQL"
              >
                <span>SQL</span>
              </div>

              {/* CSS */}
              <div
                className="hero-tech-icon hero-tech-icon-css"
                aria-label="CSS"
              >
                <span>CSS</span>
              </div>

              {/* =====================================
                  MAIN PROFILE IMAGE
              ====================================== */}

              <div className="hero-image-frame">
                <div className="hero-image-wrapper">
                  <img
                    src="/images/DarzCatbagan.png"
                    alt="Darwin Catbagan"
                    className="hero-profile-image"
                  />
                </div>
              </div>

              {/* =====================================
                  FLOATING CARD — CLEAN CODE
              ====================================== */}

              <div className="hero-floating-card hero-floating-card-one glass">
                <span className="hero-floating-icon">{"</>"}</span>

                <div>
                  <p className="text-xs font-semibold text-(--text)">
                    Clean Code
                  </p>

                  <p className="mt-0.5 text-[10px] text-(--text-muted)">
                    Built with purpose
                  </p>
                </div>
              </div>

              {/* =====================================
                  FLOATING CARD — MODERN UI
              ====================================== */}

              <div className="hero-floating-card hero-floating-card-two glass">
                <span className="hero-floating-icon">{"{}"}</span>

                <div>
                  <p className="text-xs font-semibold text-(--text)">
                    Modern UI
                  </p>

                  <p className="mt-0.5 text-[10px] text-(--text-muted)">
                    Responsive by design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SCROLL INDICATOR
        ========================================== */}

        <div className="mt-12 sm:mt-16">
          <a
            href="#about"
            className="hero-scroll-indicator"
            aria-label="Scroll to About section"
          >
            <span>Scroll to explore</span>

            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
