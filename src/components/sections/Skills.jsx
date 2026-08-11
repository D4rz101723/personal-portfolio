import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import {
  Code2,
  Database,
  Wrench,
  MonitorSmartphone,
  Bug,
  Lightbulb,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using modern frontend technologies.",
      icon: Code2,
      skills: [
        {
          name: "React.js",
          icon: FaReact,
          description: "Component-based UI development",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          description: "Modern JavaScript development",
        },
        { name: "HTML5", icon: FaHtml5, description: "Semantic web structure" },
        {
          name: "CSS3",
          icon: FaCss3Alt,
          description: "Responsive styling and layouts",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          description: "Utility-first CSS framework",
        },
      ],
    },
    {
      title: "Backend & Database",
      description:
        "Working with databases and backend technologies to build reliable application functionality.",
      icon: Database,
      skills: [
        {
          name: "SQL",
          icon: Database,
          description: "Queries and data management",
        },
        {
          name: "Node.js",
          icon: FaNodeJs,
          description: "JavaScript runtime environment",
        },
        {
          name: "REST APIs",
          icon: Code2,
          description: "API integration and communication",
        },
        {
          name: "Database Management",
          icon: Database,
          description: "Data organization and maintenance",
        },
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Using modern development tools to maintain efficient and organized workflows.",
      icon: Wrench,
      skills: [
        { name: "Git", icon: FaGitAlt, description: "Version control" },
        {
          name: "GitHub",
          icon: FaGithub,
          description: "Repository and collaboration",
        },
        { name: "Vite", icon: SiVite, description: "Modern frontend tooling" },
        {
          name: "VS Code",
          icon: Code2,
          description: "Development environment",
        },
      ],
    },
  ];

  const additionalSkills = [
    {
      title: "Responsive Design",
      description:
        "Creating interfaces that work across desktop, tablet, and mobile devices.",
      icon: MonitorSmartphone,
    },
    {
      title: "Problem Solving",
      description:
        "Breaking down technical problems into practical and maintainable solutions.",
      icon: Lightbulb,
    },
    {
      title: "Debugging",
      description:
        "Identifying issues, analyzing problems, and improving application reliability.",
      icon: Bug,
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden py-24 sm:py-28"
    >
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-(--primary)" />
            <span>Skills & Technologies</span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-(--primary)" />
          </div>

          <h2 className="font-['Orbitron'] text-2xl font-bold leading-tight tracking-tight text-(--text) sm:text-5xl lg:text-5xl">
            What I <span className="gradient-text">Work With</span>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            A collection of technologies, tools, and development skills I use to
            build modern and reliable applications.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="group relative overflow-hidden rounded-lg border border-(--border) bg-(--surface)/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-(--border-hover) hover:shadow-(--shadow-hover)"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-(--primary)/5 blur-3xl transition-all duration-500 group-hover:bg-(--primary)/10" />

                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--surface-light)/60 text-(--primary) transition-all duration-300 group-hover:border-(--border-hover) group-hover:bg-(--primary)/10">
                    <CategoryIcon size={23} aria-hidden="true" />
                  </div>

                  <h3 className="font-['Orbitron'] text-base font-semibold text-(--text)">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-(--text-muted)">
                    {category.description}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-col gap-2.5">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-xl border border-(--border) bg-(--background)/40 px-3 py-3 transition-all duration-300 hover:border-(--border-hover) hover:bg-(--primary)/5"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-(--surface-light)/60 text-(--primary)">
                          <SkillIcon size={19} aria-hidden="true" />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-(--text)">
                            {skill.name}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-(--text-muted)">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-(--primary)" />
            <h3 className="font-['Orbitron'] text-sm font-semibold uppercase tracking-[0.15em] text-(--text)">
              Other Strengths
            </h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {additionalSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group flex items-start gap-4 rounded-md border border-(--border) bg-(--surface)/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--border-hover) hover:bg-(--primary)/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-(--border) bg-(--surface-light)/50 text-(--primary) transition-colors duration-300 group-hover:border-(--border-hover)">
                    <Icon size={20} aria-hidden="true" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-(--text)">
                      {skill.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-6 text-(--text-muted)">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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

export default Skills;
