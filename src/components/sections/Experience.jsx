import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      period: "2023 – Present",
      role: "IT Support Specialist",
      company: "Beacon Solutions, Inc.",
      location: "Enchanted Kingdom",
      current: true,
      description:
        "Supporting Point of Sale (POS) systems and the Retail Information Site System Consolidator (RISSC) backend to help maintain reliable and efficient business operations.",
      responsibilities: [
        "Deploying and configuring POS hardware and software.",
        "Maintaining system data and supporting backend integration.",
        "Troubleshooting technical issues involving POS systems and related applications.",
        "Managing user accounts, permissions, and system access.",
        "Performing system updates and maintaining system security.",
        "Providing technical assistance to minimize downtime and ensure smooth business operations.",
      ],
    },
    // {
    //   period: "2019 – 2023",
    //   role: "Previous Role",
    //   company: "Beacon Solutions, Inc.",
    //   location: "Enchanted Kingdom",
    //   current: false,
    //   description:
    //     "Professional experience at Beacon Solutions, Inc. contributing to technical operations and business support.",
    //   responsibilities: [
    //     "Role details can be added here.",
    //     "Key responsibilities and achievements can be added here.",
    //   ],
    // },
    // {
    //   period: "2017 – 2019",
    //   role: "Previous Role",
    //   company: "Beacon Solutions, Inc.",
    //   location: "Enchanted Kingdom",
    //   current: false,
    //   description:
    //     "Professional experience at Beacon Solutions, Inc. supporting business and technical operations.",
    //   responsibilities: [
    //     "Role details can be added here.",
    //     "Key responsibilities and achievements can be added here.",
    //   ],
    // },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden py-24 sm:py-28"
    >
      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3 font-['Orbitron'] text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-(--primary)" />
            <span>Career Journey</span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-(--primary)" />
          </div>

          <h2 className="font-['Orbitron'] text-4xl font-bold leading-tight tracking-tight text-(--text) sm:text-5xl lg:text-6xl">
            My <span className="gradient-text">Experience</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--text-secondary) sm:text-base">
            My professional journey, technical experience, and the roles that
            have helped me develop my skills in IT support, software systems,
            and modern web development.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="absolute bottom-0 left-5 top-0 w-px bg-linear-to-b from-(--primary) via-(--secondary) to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={`${experience.period}-${experience.role}`}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className="absolute left-5 top-8 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-(--background) bg-(--primary) shadow-[0_0_15px_var(--primary)] md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  <div
                    className={`hidden pt-7 md:flex ${
                      isEven
                        ? "justify-end pr-12 text-right"
                        : "col-start-2 row-start-1 justify-start pl-12 text-left"
                    }`}
                  >
                    <div>
                      <div className="inline-flex items-center gap-2 font-['Orbitron'] text-sm font-semibold tracking-wide text-(--primary)">
                        <CalendarDays size={15} aria-hidden="true" />
                        <span>{experience.period}</span>
                      </div>

                      {experience.current && (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-(--primary)/30 bg-(--primary)/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-(--primary)">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--primary)" />
                          Current Position
                        </div>
                      )}
                    </div>
                  </div>

                  <div
                    className={`pl-10 md:pl-0 ${
                      !isEven
                        ? "md:col-start-1 md:row-start-1 md:pr-12"
                        : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <article className="group relative overflow-hidden rounded-lg border border-(--border) bg-(--surface)/60 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-(--border-hover) hover:shadow-(--shadow-hover) sm:p-7">
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-(--primary)/5 blur-3xl transition-all duration-500 group-hover:bg-(--primary)/10" />

                      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-(--primary) to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        <div className="mb-5 flex flex-wrap items-center gap-2 md:hidden">
                          <div className="inline-flex items-center gap-2 font-['Orbitron'] text-xs font-semibold text-(--primary)">
                            <CalendarDays size={14} aria-hidden="true" />
                            <span>{experience.period}</span>
                          </div>

                          {experience.current && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-(--primary)/30 bg-(--primary)/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-(--primary)">
                              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--primary)" />
                              Current
                            </span>
                          )}
                        </div>

                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--surface-light)/60 text-(--primary) transition-all duration-300 group-hover:border-(--border-hover) group-hover:bg-(--primary)/10">
                          <BriefcaseBusiness size={22} aria-hidden="true" />
                        </div>

                        <h3 className="font-['Orbitron'] text-lg font-semibold leading-tight text-(--text) transition-colors duration-300 group-hover:text-(--primary) sm:text-xl">
                          {experience.role}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <p className="text-sm font-semibold text-(--text-secondary)">
                            {experience.company}
                          </p>

                          <span
                            className="hidden text-(--text-muted) sm:inline"
                            aria-hidden="true"
                          >
                            •
                          </span>

                          <div className="flex items-center gap-1.5 text-xs text-(--text-muted)">
                            <MapPin size={13} aria-hidden="true" />
                            <span>{experience.location}</span>
                          </div>
                        </div>

                        <div className="mt-5 h-px w-10 bg-(--primary) opacity-60 transition-all duration-300 group-hover:w-16" />

                        <p className="mt-5 text-sm leading-7 text-(--text-secondary)">
                          {experience.description}
                        </p>

                        <div className="mt-6">
                          <p className="mb-3 font-['Orbitron'] text-[10px] font-semibold uppercase tracking-[0.15em] text-(--text-muted)">
                            Key Responsibilities
                          </p>

                          <ul className="space-y-2.5">
                            {experience.responsibilities.map(
                              (responsibility) => (
                                <li
                                  key={responsibility}
                                  className="flex items-start gap-3 text-xs leading-6 text-(--text-secondary)"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary) shadow-[0_0_8px_var(--primary)]" />
                                  <span>{responsibility}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-(--border) pt-4">
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-(--text-muted)">
                            Professional Experience
                          </span>

                          <ArrowUpRight
                            size={17}
                            className="text-(--text-muted) transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-(--primary)"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </article>
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

export default Experience;
