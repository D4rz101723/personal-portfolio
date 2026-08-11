import { ExternalLink, ArrowUpRight, FolderCode } from "lucide-react";
import { FaReact, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Clarion Date & Time Converter",
      description:
        "A modern web-based converter for converting Clarion date and time values into standard JavaScript date and time formats. Built with a clean interface and responsive design.",
      image: "/images/clarion-converter.png",
      technologies: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ],
      github: "https://github.com/D4rz101723/clarion-date-time-converter",
      demo: "#",
      featured: true,
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website designed to showcase my development skills, projects, experience, and technical background.",
      image: "/images/portfolio.png",
      technologies: [
        { name: "React.js", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
      ],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "POS System",
      description:
        "A point-of-sale system project focused on transaction processing, database integration, and improving operational workflows.",
      image: "/images/pos-system.png",
      technologies: [
        { name: "JavaScript", icon: FaJs },
        { name: "SQL", icon: FolderCode },
        { name: "Git", icon: FaGitAlt },
      ],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden py-24 sm:py-28"
    >
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-(--primary)" />
            <span>My Projects</span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-(--primary)" />
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-bold leading-tight tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            Things I've <span className="gradient-text">Built</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            A selection of projects I've built while learning, experimenting,
            and solving real-world development problems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-(--border) bg-(--surface)/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-(--border-hover) hover:shadow-(--shadow-hover)"
            >
              {project.featured && (
                <div className="absolute left-4 top-4 z-10 rounded-full border border-(--primary)/30 bg-(--background)/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-(--primary) backdrop-blur-md">
                  Featured
                </div>
              )}

              <div className="relative aspect-video overflow-hidden bg-(--surface-light)">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-(--background)/90 via-(--background)/10 to-transparent opacity-70" />

                <div className="absolute inset-0 flex items-center justify-center bg-(--background)/35 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full border border-(--primary)/40 bg-(--surface)/80 text-(--primary) shadow-(--shadow) backdrop-blur-md transition-transform duration-300 group-hover:scale-100">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-['Orbitron'] text-base font-semibold leading-tight text-(--text) transition-colors duration-300 group-hover:text-(--primary) sm:text-lg">
                      {project.title}
                    </h3>

                    <div className="mt-2 h-px w-8 bg-(--primary) opacity-70 transition-all duration-300 group-hover:w-14" />
                  </div>

                  <FolderCode
                    size={20}
                    className="shrink-0 text-(--text-muted) transition-colors duration-300 group-hover:text-(--primary)"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-4 text-xs leading-6 text-(--text-secondary) sm:text-sm">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => {
                    const TechnologyIcon = technology.icon;

                    return (
                      <span
                        key={technology.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-(--border) bg-(--background)/40 px-2.5 py-1.5 text-[10px] font-medium text-(--text-secondary) transition-all duration-200 hover:border-(--border-hover) hover:text-(--primary)"
                      >
                        <TechnologyIcon size={12} aria-hidden="true" />
                        {technology.name}
                      </span>
                    );
                  })}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex items-center gap-1.5 rounded-lg border border-(--border) bg-(--surface-light)/30 px-3.5 py-2.5 text-[11px] font-semibold text-(--text) transition-all duration-300 hover:-translate-y-0.5 hover:border-(--border-hover) hover:text-(--primary)"
                  >
                    <FaGithub size={15} aria-hidden="true" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-(--primary) px-3.5 py-2.5 text-[11px] font-bold text-slate-950 shadow-(--shadow) transition-all duration-300 hover:-translate-y-0.5 hover:shadow-(--shadow-hover)"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/D4rz101723"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--surface)/50 px-5 py-3 text-sm font-semibold text-(--text) backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--border-hover) hover:text-(--primary) hover:shadow-(--shadow-hover)"
          >
            <FaGithub size={18} aria-hidden="true" />
            <span>View More on GitHub</span>
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div
          className="mt-16 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
          <span className="h-1.5 w-10 rounded-full bg-(--primary) opacity-75" />
          <span className="h-1.5 w-1.5 rounded-full bg-(--primary) opacity-45 shadow-[0_0_10px_var(--primary)]" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
