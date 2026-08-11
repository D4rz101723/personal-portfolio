import { ArrowRight, CheckCircle2 } from "lucide-react";

function About() {
  const technologies = ["React.js", "JavaScript", "Tailwind CSS", "SQL", "Git"];
  const highlights = [
    "Responsive Web Development",
    "Clean & Maintainable Code",
    "Modern UI / UX",
    "Problem Solving",
  ];

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden py-28"
    >
      <div className="container-custom">
        <div className="grid items-center gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* LEFT — PORTRAIT IMAGE */}
          <div className="flex w-full items-center justify-center">
            <div className="about-image-container">
              <div className="about-image-border" aria-hidden="true" />
              <div className="about-image-glow" aria-hidden="true" />

              <div className="relative z-2 h-full w-full overflow-hidden rounded-xl border border-(--primary)/35 bg-(--surface) shadow-(--shadow) transition-all duration-500 hover:-translate-y-1.5 hover:border-(--border-hover) hover:shadow-(--shadow-hover)">
                <img
                  src="/images/DarzCatbagan.png"
                  alt="Darwin Catbagan"
                  className="block h-full w-full object-cover object-center saturate-[1.05] contrast-[1.03] transition-transform duration-700 hover:scale-[1.035]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--background)/55"
                  aria-hidden="true"
                />
              </div>

              {/* IMAGE CAPTION */}
              <div className="glass absolute -right-8.75 bottom-6 z-4 flex min-w-51.25 items-center gap-3 rounded-[0.9rem] px-4 py-3.5">
                <span className="about-caption-status" />
                <div>
                  <p className="text-[0.72rem] font-semibold text-(--text)">
                    Software Developer
                  </p>
                  <span className="mt-0.5 block text-[0.6rem] text-(--text-muted)">
                    Building digital experiences
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — ABOUT CONTENT */}
          <div className="w-full max-w-175">
            <div className="mb-5 flex items-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              <span className="h-px w-10 bg-linear-to-r from-(--primary) to-transparent" />
              <span>About Me</span>
            </div>

            <h2 className="max-w-170 font-['Orbitron'] text-[clamp(2.25rem,5vw,2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-(--text)">
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Experiences</span>
            </h2>

            <div className="mt-7 flex flex-col gap-4">
              <p className="text-[1.1rem] leading-[1.8] text-(--text)">
                I'm a software developer passionate about creating modern,
                responsive, and user-focused web applications.
              </p>
              <p className="text-[0.95rem] leading-[1.85] text-(--text-secondary)">
                I work with technologies such as React.js, JavaScript, Tailwind
                CSS, SQL, and Git to build applications that are functional,
                maintainable, and visually engaging.
              </p>
              <p className="text-[0.95rem] leading-[1.85] text-(--text-secondary)">
                I enjoy solving problems, learning new technologies, and turning
                ideas into practical digital solutions.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-7 grid max-w-145 grid-cols-1 gap-2.5 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="group flex items-center gap-2.5 rounded-[0.7rem] border border-(--border) bg-(--surface)/40 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--border-hover) hover:bg-(--primary)/5"
                >
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-(--primary)"
                    aria-hidden="true"
                  />
                  <span className="text-[0.7rem] font-semibold text-(--text-secondary)">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* TECHNOLOGIES */}
            <div className="mt-7">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-(--text-muted)">
                Technologies I work with
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-(--border) bg-(--surface)/50 px-3 py-1.5 text-[0.68rem] font-medium text-(--text-secondary) backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-(--border-hover) hover:bg-(--primary)/7 hover:text-(--primary)"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#skills"
                className="group inline-flex items-center justify-center gap-2 rounded-[0.8rem] bg-(--primary) px-5 py-3 text-sm font-bold text-slate-950 shadow-(--shadow) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-hover)"
              >
                <span>Explore My Skills</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM DECORATION */}
        <div
          className="mt-20 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
          <span className="h-1.5 w-9 rounded-full bg-(--primary) opacity-75" />
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </section>
  );
}

export default About;
