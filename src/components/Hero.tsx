"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenText,
  Cpu,
  Globe,
  GraduationCap,
  Layers3,
  TerminalSquare,
} from "lucide-react";

const resumeUrl = "https://drive.google.com/file/d/1KY5VMfRHEzbXxgEvgbGM85Rgl20zzv3Y/view?usp=drive_link";

const studentProfile = {
  name: "Apurv Patel",
  university: "Dhirubhai Ambani University",
  role: "B.Tech Final Year Student",
  interests: ["Software Engineering", "Full Stack", "Distributed Systems", "Problem Solving"],
  projects: [
    "HourGlass",
    "VaaniKaam",
    "Portfolio Website",
  ],
  technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Python","C++", "Java", "SQL", "MongoDB"],
};

const editorLines = [
  "student = {",
  "  name: 'Apurv Patel',",
  "  university: 'Dhirubhai Ambani University',",
  "  role: 'B.Tech Final Year Student',",
  "  focus: ['Software Engineering', 'Full Stack', 'Distributed Systems', 'Problem Solving'],",
  "  current_project: 'Building useful products with clean engineering',",
  "  stack: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'C++', 'Java', 'SQL', 'MongoDB'],",
  "};",
];

function StatPill({ icon: Icon, label, value }: Readonly<{ icon: React.ElementType; label: string; value: string }>) {
  return (
    <div className="rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 text-white dark:bg-white dark:text-gray-950">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{label}</div>
          <div className="mt-1 text-sm font-semibold text-gray-950 dark:text-white">{value}</div>
        </div>
      </div>
    </div>
  );
}

const CoderProfileCard = () => {
  return (
    <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white/80 shadow-[0_24px_80px_-28px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0b1020]/85">
      <div className="flex items-center justify-between border-b border-gray-200/80 px-5 py-4 dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-400">
          <TerminalSquare className="h-3.5 w-3.5" />
          student-profile.ts
        </div>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[1.2fr_0.8fr] lg:p-6">
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="space-y-1">
              {editorLines.map((line) => (
                <div key={line} className="font-mono text-[12px] leading-6 text-gray-700 dark:text-gray-300">
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <StatPill icon={GraduationCap} label="University" value={studentProfile.university} />
            <StatPill icon={Cpu} label="Role" value={studentProfile.role} />
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              <BookOpenText className="h-4 w-4" />
              Interests
            </div>
            <div className="flex flex-wrap gap-2">
              {studentProfile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              <Layers3 className="h-4 w-4" />
              Projects
            </div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {studentProfile.projects.map((project) => (
                <li key={project} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-950 dark:bg-white" />
                  <span className="font-medium">{project}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4 dark:border-white/10 dark:bg-white/5">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              <Globe className="h-4 w-4" />
              Technologies
            </div>
            <div className="flex flex-wrap gap-2">
              {studentProfile.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-gray-950"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#f6f7fb] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-[#050816]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_top_right,rgba(17,24,39,0.1),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.85),rgba(246,247,251,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_20%),linear-gradient(to_bottom,rgba(5,8,22,0.96),rgba(5,8,22,1))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/20" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/75 px-4 py-2 text-xs font-medium text-gray-600 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {' '}
            Available for internships and product projects
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-white/10 dark:bg-white/10">
                <Image
                  src="/apurv-patel.png"
                  alt="Portrait of Apurv Patel"
                  width={413}
                  height={532}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-950 sm:text-5xl lg:text-7xl dark:text-white">
                Apurv Patel
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
              B.Tech ICT Student at Dhirubhai Ambani University focused on Software Engineering, Full Stack, Distributed Systems, and Problem Solving.
            </p>
            <p className="max-w-xl text-base leading-7 text-gray-500 sm:text-lg dark:text-gray-400">
              Building scalable software through clean engineering and continuous learning.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              More About Me
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-900 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Focus</div>
              <div className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">Engineering Mindset</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Interest</div>
              <div className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">Scalable Software</div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Goal</div>
              <div className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">Building Useful Products</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-400/20" />
          <div className="absolute -right-8 bottom-8 h-40 w-40 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-400/15" />
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <CoderProfileCard />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}