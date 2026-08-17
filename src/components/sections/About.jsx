import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Award,
  Code2,
  UserRound,
} from "lucide-react";

function About() {
  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Flexibility",
    "Computer Literacy",
    "Willingness to Learn",
    "Communication",
  ];
  const expertise = [
    "Web Development",
    "Technical Troubleshooting",
    "Ticket Management Systems",
    "SQL & Data Analysis",
    "POS Systems & Deployment",
    "IT Support",
  ];
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "SQL",
    "Git",
  ];
  const languages = ["Filipino", "English", "Bolinao"];

  const achievements = [
    { year: "February 2025", title: "Google Fundamentals: Data, Everywhere" },
    { year: "August 2024", title: "Data Camp — Introduction to SQL" },
    { year: "August 2024", title: "Data Camp — Intermediate SQL" },
  ];

  const card =
    "rounded-(--radius-lg) border border-(--border) bg-(--surface)/60 p-5 backdrop-blur-md sm:p-6";

  const iconBox =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-(--border) bg-(--surface-light)/50 text-(--primary)";

  const item =
    "flex items-center gap-2 rounded-lg border border-(--border) bg-(--background)/30 px-2.5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-(--border-hover) hover:bg-(--primary)/5";

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-8">
          <div className="mb-2 flex items-center justify-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            <span className="h-px w-7 bg-linear-to-r from-transparent to-(--primary)" />
            <span>About Myself</span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-(--primary)" />
          </div>
          <h2 className="font-['Orbitron'] text-4xl font-bold leading-tight tracking-tight text-(--text) sm:text-4xl">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            A quick look at my background, experience, education, skills, and
            the technologies I use to build practical digital solutions.
          </p>
        </div>

        {/* Profile + Introduction */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          {/* Profile */}
          <div
            className={`${card} group relative overflow-hidden transition-all duration-500 hover:border-(--border-hover) hover:shadow-(--shadow-hover)`}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-(--primary)/5 blur-3xl group-hover:bg-(--primary)/10" />

            <div className="relative">
              <div className="mx-auto mb-7 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-linear-to-r from-(--primary) via-(--secondary) to-(--accent) opacity-30 blur-md" />
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-(--primary)/25 bg-(--surface-light) shadow-(--shadow)">
                    <img
                      src="/images/DarzCatbagan.png"
                      alt="Darwin Catbagan"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-['Orbitron'] text-xl font-bold text-(--text)">
                  Darwin Catbagan
                </h3>
                <p className="mt-1 text-sm font-medium text-(--primary)">
                  Front-End Developer
                </p>
              </div>

              <div className="mt-3 flex items-center gap-3 rounded-xl border border-(--border) bg-(--background)/50 px-5 py-2">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--secondary) opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-(--accent2)" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-(--text)">
                    Available for opportunities
                  </p>
                  <p className="mt-1 text-[10px] text-(--text-muted)">
                    Open to interesting projects and collaborations
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="mailto:darwincatbagan23@gmail.com"
                  className={`${item} group/contact`}
                >
                  <div className={iconBox}>
                    <Mail size={17} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
                      Email
                    </p>
                    <p className="mt-1 truncate text-xs font-medium text-(--text-secondary)">
                      darwincatbagan23@gmail.com
                    </p>
                  </div>
                </a>

                <div className={item}>
                  <div className={iconBox}>
                    <MapPin size={17} />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
                      Address
                    </p>
                    <p className="mt-1 text-xs font-medium leading-5 text-(--text-secondary)">
                      Blk 2 Lot 18 Pook Marilag
                      <br />
                      Brgy. U.P. Campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className={`${card} relative lg:p-10`}>
            <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-(--primary) to-transparent opacity-60" />

            <div className="flex items-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              <UserRound size={15} />
              <span>About Myself</span>
            </div>

            <h3 className="mt-4 max-w-3xl font-['Orbitron'] text-2xl font-bold leading-tight text-(--text) sm:text-3xl lg:text-4xl">
              Building Practical Solutions Through{" "}
              <span className="gradient-text">Technology</span>
            </h3>

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-7 text-(--text)">
                Hi! I'm Darwin Catbagan, an aspiring Front-End Developer
                passionate about building clean, responsive, and user-friendly
                web applications.
              </p>
              <p className="text-sm leading-7 text-(--text-secondary)">
                I enjoy transforming ideas into functional digital experiences
                while continuously improving my skills in modern web
                development, troubleshooting, data analysis, and technical
                support.
              </p>
              <p className="text-sm leading-7 text-(--text-secondary)">
                With experience in IT support and web development, I approach
                problems with a practical mindset and focus on creating
                solutions that are reliable, maintainable, and easy to use.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["2+", "Years Experience"],
                ["7+", "Technologies"],
                ["3", "Languages"],
                ["IT", "Support"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-(--border) bg-(--background)/30 p-4"
                >
                  <p className="font-['Orbitron'] text-xl font-bold text-(--primary)">
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-(--text-muted)">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`mt-8 ${card} lg:p-10`}>
          <div className="flex items-center gap-3">
            <div className={iconBox}>
              <BriefcaseBusiness size={20} />
            </div>
            <div>
              <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
                Professional Experience
              </p>
              <h3 className="mt-1 font-['Orbitron'] text-xl font-bold text-(--text)">
                IT Support
              </h3>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.25fr_0.75fr]">
            <div>
              <p className="text-xs font-semibold text-(--text)">
                2023 - Present
              </p>
              <p className="mt-2 text-xs text-(--text-secondary)">
                Beacon Solutions, Inc.
              </p>
            </div>
            <p className="text-sm leading-7 text-(--text-secondary)">
              Currently working as an IT Support Specialist assigned to
              Enchanted Kingdom, supporting Point of Sale (POS) systems and
              Retail Information Site Consolidator (RISSC) backend. My
              responsibilities include deploying and configuring POS hardware
              and software, maintaining system data, troubleshooting technical
              issues, managing user accounts and permissions, and providing
              technical assistance to ensure smooth business operations.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className={`mt-8 ${card} lg:p-10`}>
          <div className="mb-7 flex items-center gap-3">
            <div className={iconBox}>
              <GraduationCap size={21} />
            </div>
            <div>
              <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
                Academic Background
              </p>
              <h3 className="mt-1 font-['Orbitron'] text-xl font-bold text-(--text)">
                Education
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                year: "2019 - 2023",
                title: "Bachelor of Science in Information Technology",
                school: "Pangasinan State University",
                location: "Alvear E, Poblacion, Lingayen, Pangasinan",
              },
              {
                year: "2017 - 2019",
                title: "Science, Technology, Engineering, and Mathematics",
                school: "Bolinao Integrated School - SHS",
                location: "Germinal, Bolinao, Pangasinan",
              },
            ].map((education) => (
              <div key={education.school} className={`${item} block p-5`}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-(--primary)">
                  {education.year}
                </p>
                <h4 className="mt-3 font-semibold text-(--text)">
                  {education.title}
                </h4>
                <p className="mt-2 text-xs font-medium text-(--text-secondary)">
                  {education.school}
                </p>
                <p className="mt-1 text-[11px] text-(--text-muted)">
                  {education.location}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills + Expertise */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {[
            {
              icon: <CheckCircle2 size={20} />,
              label: "Personal Strengths",
              title: "Soft Skills",
              data: softSkills,
              itemIcon: <CheckCircle2 size={16} />,
            },
            {
              icon: <Code2 size={20} />,
              label: "What I Do",
              title: "Expertise",
              data: expertise,
              itemIcon: <Code2 size={15} />,
            },
          ].map((section) => (
            <div key={section.title} className={card}>
              <div className="mb-6 flex items-center gap-3">
                <div className={iconBox}>{section.icon}</div>
                <div>
                  <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
                    {section.label}
                  </p>
                  <h3 className="mt-1 font-['Orbitron'] text-xl font-bold text-(--text)">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {section.data.map((value) => (
                  <div key={value} className={item}>
                    <span className="shrink-0 text-(--primary)">
                      {section.itemIcon}
                    </span>
                    <span className="text-xs font-medium text-(--text-secondary)">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className={`mt-8 ${card}`}>
          <div className="mb-5 flex items-center gap-3">
            <Code2 size={20} className="text-(--primary)" />
            <div>
              <p className="font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.15em] text-(--primary)">
                Technical Stack
              </p>
              <h3 className="mt-1 font-['Orbitron'] text-xl font-bold text-(--text)">
                Technologies I Work With
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-(--border) bg-(--background)/40 px-4 py-2 text-xs font-medium text-(--text-secondary) transition-all duration-300 hover:-translate-y-0.5 hover:border-(--border-hover) hover:bg-(--primary)/5 hover:text-(--primary)"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Languages + Achievements */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className={card}>
            <div className="mb-6 flex items-center gap-3">
              <Languages size={20} className="text-(--primary)" />
              <h3 className="font-['Orbitron'] text-xl font-bold text-(--text)">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-xl border border-(--border) bg-(--background)/30 px-4 py-3 text-xs font-medium text-(--text-secondary)"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          <div className={card}>
            <div className="mb-6 flex items-center gap-3">
              <Award size={20} className="text-(--primary)" />
              <h3 className="font-['Orbitron'] text-xl font-bold text-(--text)">
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {achievements.map(({ year, title }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-(--primary) shadow-[0_0_10px_var(--primary)]" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-(--primary)">
                      {year}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-(--text-secondary)">
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#skills"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-(--primary) px-6 py-3.5 text-sm font-bold text-slate-950 shadow-(--shadow) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-hover)"
          >
            <span>Explore My Skills</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Bottom Decoration */}
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

export default About;
