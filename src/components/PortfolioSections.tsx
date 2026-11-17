import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import {
  SiApachehadoop,
  SiApachespark,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

const resumeUrl =
  "https://drive.google.com/file/d/1KY5VMfRHEzbXxgEvgbGM85Rgl20zzv3Y/view?usp=drive_link";
const githubUrl = "https://github.com/PatelApurv22";
const linkedinSearchUrl =
  "https://www.linkedin.com/search/results/people/?keywords=Apurv%20Patel%20Dhirubhai%20Ambani%20University";
const personalEmailAddress = "patelapurv2238@gmail.com";
const academicEmailAddress = "202301230@dau.ac.in";

const projects = [
  {
    name: "VaaniKaam",
    category: "Voice-first service marketplace",
    description:
      "A multilingual marketplace that helps workers discover and apply for local jobs in Gujarati, Hindi, and English. The system combines role-based workflows, Firebase OTP authentication, REST APIs, OpenStreetMap, and Cloudinary in a pnpm monorepo.",
    stack: "Next.js · TypeScript · Node.js · Express · MongoDB",
    href: githubUrl,
  },
  {
    name: "HourGlass",
    category: "Time tracking and project management",
    description:
      "A full-stack platform for managing projects, tasks, members, and timesheets. It includes JWT authentication, email OTP verification, role-based authorization, API validation, and Jest-powered testing.",
    stack: "Node.js · Express · MongoDB · JWT · Jest",
    href: "https://github.com/PatelApurv22/Hour-Glass_24",
  },
  {
    name: "Database of AgriMart",
    category: "Database engineering project",
    description:
      "A normalized relational database for an agricultural marketplace connecting farmers, buyers, dealers, and transport providers, with BCNF design and analytical SQL queries for reporting and retrieval.",
    stack: "PostgreSQL · SQL · ER Modeling",
    href: "https://github.com/PatelApurv22/Database-of-AgriMart",
  },
  {
    name: "Word Cloud Generator",
    category: "C++ application",
    description:
      "A modular C++17 application that processes large text files, filters noise, computes word frequencies with STL containers, and supports both terminal and GUI variants.",
    stack: "C++17 · STL · File I/O",
    href: "https://github.com/PatelApurv22/DS_Crafters-Capstone",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      ["C++", SiCplusplus],
      ["Java", FaJava],
      ["Python", FaPython],
      ["JavaScript", SiJavascript],
      ["TypeScript", SiTypescript],
    ] as Array<[string, IconType]>,
  },
  {
    icon: BriefcaseBusiness,
    title: "Web and backend",
    skills: [
      ["React", FaReact],
      ["Next.js", SiNextdotjs],
      ["Node.js", FaNodeJs],
      ["Express", SiExpress],
      ["HTML", FaHtml5],
      ["CSS", FaCss3Alt],
    ] as Array<[string, IconType]>,
  },
  {
    icon: Database,
    title: "Data and cloud",
    skills: [
      ["MongoDB", SiMongodb],
      ["PostgreSQL", SiPostgresql],
      ["Firebase", SiFirebase],
      ["Hadoop", SiApachehadoop],
      ["Spark", SiApachespark],
    ] as Array<[string, IconType]>,
  },
  {
    icon: BarChart3,
    title: "Engineering strengths",
    skills: [
      ["Data Structures"],
      ["Algorithms"],
      ["DBMS"],
      ["Operating Systems"],
      ["Authentication"],
      ["API Design"],
      ["Debugging"],
    ] as Array<[string]>,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: Readonly<{ eyebrow: string; title: string; description: string }>) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default function PortfolioSections() {
  return (
    <div className="bg-white dark:bg-[#050816]">
      <section
        id="about"
        className="scroll-mt-24 border-t border-gray-200/80 px-4 py-20 sm:px-6 lg:px-8 dark:border-white/10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About me"
              title="I turn complex problems into useful, dependable software."
              description="I’m Apurv Patel, a final-year B.Tech Information and Communication Technology student at Dhirubhai Ambani University. I enjoy working across the stack, especially where thoughtful backend design, clean interfaces, and real user needs meet."
            />
            <div className="space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                My work spans full-stack product development, database design,
                distributed systems, and algorithmic problem solving. I like
                understanding a problem deeply before choosing the simplest
                architecture that can solve it reliably.
              </p>
              <p>
                Recently, I have been building multilingual and
                authentication-heavy products, designing REST APIs, testing
                backend behavior, and learning how to make software easier to
                operate and extend. I am open to internships and product
                engineering opportunities where I can learn quickly and
                contribute with ownership.
              </p>
            </div>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              View my resume
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
                Education
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                B.Tech in Information and Communication Technology
                <br />
                Dhirubhai Ambani University · 2023–Present
                <br />
                <br />
                HSC · 78.76%
                <br />
                Smt. V.B.N. Shah Jeevanbharti, Surat · 2022–2023
                <br />
                <br />
                SSC · 84.00%
                <br />
                Shree R. D. Ghael Jeevanbharti, Surat · 2020–2021
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-white/5">
              <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
                Problem solving
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                600+ algorithmic problems solved across LeetCode, Codeforces,
                and CodeChef; LeetCode rating of 1749.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:col-span-2 lg:col-span-1 dark:border-white/10 dark:bg-white/5">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
                Currently focused on
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Backend development, scalable applications, distributed
                systems, and product engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 bg-gray-50/80 px-4 py-20 sm:px-6 lg:px-8 dark:bg-white/[0.03]"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects built to solve practical problems."
            description="A selection of product, backend, and database work. Each card links to the relevant public GitHub repository or my profile when the project repository is not public."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#0b1020]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-gray-950 dark:text-white">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="rounded-full border border-gray-200 p-2 text-gray-600 transition hover:border-gray-950 hover:text-gray-950 dark:border-white/10 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
                  >
                    <SiGithub className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <p className="mt-6 border-t border-gray-200 pt-4 text-xs font-medium text-gray-500 dark:border-white/10 dark:text-gray-400">
                  {project.stack}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit for building end-to-end products."
            description="I bring together programming fundamentals, modern web technologies, database thinking, and the debugging discipline needed to ship reliable software."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <group.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map(([skill, SkillIcon]) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                    >
                      {SkillIcon ? (
                        <SkillIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      ) : null}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="achievements"
        className="scroll-mt-24 bg-gray-50/80 px-4 py-20 sm:px-6 lg:px-8 dark:bg-white/[0.03]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Beyond the code"
            title="Curious, consistent, and always learning."
            description="The extra tab brings together the habits and experiences that shape how I work with people and solve problems."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["1749", "LeetCode rating"],
              ["600+", "Problems solved"],
              ["1056", "Best contest rank"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#0b1020]"
              >
                <p className="text-3xl font-semibold text-gray-950 dark:text-white">
                  {value}
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gray-950 p-8 text-white sm:p-12 dark:bg-white dark:text-gray-950">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-300 dark:text-blue-600">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Have a product or engineering problem to solve?
              </h2>
              <p className="leading-7 text-gray-300 dark:text-gray-600">
                I’m open to internships, collaborations, and conversations
                about building useful software.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${personalEmailAddress}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-800"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub profile"
                className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 dark:border-gray-950/20 dark:hover:bg-gray-950/10"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href={linkedinSearchUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Find Apurv Patel on LinkedIn"
                className="rounded-full border border-white/20 p-3 transition hover:bg-white/10 dark:border-gray-950/20 dark:hover:bg-gray-950/10"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-sm text-gray-300 dark:border-gray-950/15 dark:text-gray-600">
            <a href={`mailto:${personalEmailAddress}`} className="hover:text-white dark:hover:text-gray-950">
              {personalEmailAddress}
            </a>
            <a href={`mailto:${academicEmailAddress}`} className="hover:text-white dark:hover:text-gray-950">
              {academicEmailAddress}
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white dark:hover:text-gray-950">
              GitHub profile <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white dark:hover:text-gray-950">
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
