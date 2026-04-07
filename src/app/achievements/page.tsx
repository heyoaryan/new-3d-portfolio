"use client";
import React from "react";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Trophy, Award, Target, Code2, Star, Zap, Users, Rocket, Medal } from "lucide-react";
import Image from "next/image";

const ACHIEVEMENT_IMAGES = [
  "1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",
];

const row1 = ACHIEVEMENT_IMAGES.slice(0, 4);
const row2 = ACHIEVEMENT_IMAGES.slice(4, 8);

const ACHIEVEMENTS = [
  {
    title: "Industrial Ideathon Winner",
    icon: <Trophy size={36} className="text-yellow-400" />,
    description: "Won the Industrial Ideathon 2025 — presented an innovative solution that stood out among all competing teams. A proud moment that validated my problem-solving and development skills.",
    year: "2025",
    badge: "🥇 Winner",
    badgeColor: "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30",
  },
  {
    title: "Hack4Delhi — Top 30 Finalist",
    icon: <Medal size={36} className="text-orange-400" />,
    description: "Secured a Top 30 position at Hack4Delhi — a competitive Delhi-focused hackathon with participants from across the city. Built and pitched a solution under tight deadlines.",
    year: "2025",
    badge: "🔥 Top 30",
    badgeColor: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
  },
  {
    title: "Smart India Hackathon Finalist",
    icon: <Award size={36} className="text-green-400" />,
    description: "Reached the finals of Smart India Hackathon 2024 — one of India's largest and most prestigious national-level hackathons. Competed against top talent from colleges across the country.",
    year: "2024",
    badge: "🏆 Finalist",
    badgeColor: "bg-green-500/20 text-green-400 border border-green-500/30",
  },
  {
    title: "Smart Delhi Ideathon Qualifier",
    icon: <Target size={36} className="text-blue-400" />,
    description: "Qualified for Smart Delhi Ideathon 2025 — a city-level competition focused on smart solutions for Delhi. Selected among hundreds of applicants for the final round.",
    year: "2025",
    badge: "✅ Qualifier",
    badgeColor: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  },
];

const HACKATHON_STATS = [
  { label: "Hackathons Participated", value: "25+", icon: <Code2 size={28} className="text-purple-400" /> },
  { label: "Wins & Top Finishes", value: "5+", icon: <Trophy size={28} className="text-yellow-400" /> },
  { label: "Projects Built", value: "15+", icon: <Rocket size={28} className="text-orange-400" /> },
  { label: "Team Collaborations", value: "20+", icon: <Users size={28} className="text-blue-400" /> },
];

const HACKATHON_LIST = [
  { name: "Smart India Hackathon 2024", result: "Finalist", org: "Govt. of India" },
  { name: "Industrial Ideathon 2025", result: "Winner 🥇", org: "Industry Level" },
  { name: "Smart Delhi Ideathon 2025", result: "Qualifier", org: "Delhi Govt." },
  { name: "HackWithIndia", result: "Participated", org: "National Level" },
  { name: "HackJNU", result: "Participated", org: "JNU, Delhi" },
  { name: "HackIIIT", result: "Participated", org: "IIIT Delhi" },
  { name: "Code for Good", result: "Participated", org: "JP Morgan" },
  { name: "Hack36", result: "Participated", org: "NIT Agra" },
  { name: "HackCBS", result: "Participated", org: "CBS Delhi" },
  { name: "20+ More Hackathons", result: "Ongoing", org: "Various Orgs" },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-foreground pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-12 text-lg">
          My journey through hackathons, competitions, and real-world problem solving.
        </p>
      </BlurIn>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {HACKATHON_STATS.map((stat, index) => (
          <BoxReveal key={stat.label} delay={0.3 + index * 0.1} width="100%">
            <div
              className="p-5 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 text-center flex flex-col items-center gap-2"
              style={{ backdropFilter: "blur(2px)" }}
            >
              {stat.icon}
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-zinc-500 text-xs">{stat.label}</p>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Marquee Images */}
      <div className="mb-12 overflow-hidden space-y-4">
        {/* Row 1 - scrolls left */}
        <div className="flex w-max animate-marquee-left gap-4">
          {[...row1, ...row1].map((img, i) => (
            <div key={i} className="relative w-64 h-40 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 flex-shrink-0 group">
              <Image
                src={`/images/${img}`}
                alt={img.replace(".png", "")}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        {/* Row 2 - scrolls right */}
        <div className="flex w-max animate-marquee-right gap-4">
          {[...row2, ...row2].map((img, i) => (
            <div key={i} className="relative w-64 h-40 rounded-xl overflow-hidden border border-zinc-300 dark:border-zinc-700 flex-shrink-0 group">
              <Image
                src={`/images/${img}`}
                alt={img.replace(".png", "")}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <BlurIn delay={0.5}>
        <h2 className="text-2xl font-semibold mb-6">Top Achievements</h2>
      </BlurIn>
      <div className="grid md:grid-cols-2 gap-6 mb-16 items-stretch">
        {ACHIEVEMENTS.map((achievement, index) => (
          <BoxReveal key={achievement.title} delay={0.6 + index * 0.15} width="100%">
            <div
              className="p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600 hover:border-zinc-400 dark:hover:border-zinc-400 transition-all duration-300 h-full flex flex-col"
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="flex items-start justify-between mb-4">
                {achievement.icon}
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${achievement.badgeColor}`}>
                  {achievement.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
              <span className="text-xs text-zinc-500 mb-4">{achievement.year}</span>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm mt-auto">{achievement.description}</p>
            </div>
          </BoxReveal>
        ))}
      </div>

      {/* Journey */}
      <BlurIn delay={1.0}>
        <div
          className="p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-300 dark:border-zinc-600"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Star size={28} className="text-purple-400" />
            <h2 className="text-2xl font-semibold">The Journey</h2>
          </div>
          <div className="space-y-4 text-zinc-500 dark:text-zinc-400 leading-relaxed">
            <p>
              It started with a simple question — <strong className="text-zinc-800 dark:text-zinc-200">&quot;what can I build in 24 hours?&quot;</strong> 
              That curiosity turned into an obsession. 25+ hackathons later, it&apos;s not just a hobby — 
              it&apos;s shaped how I think, how I code, and how I solve problems under pressure.
            </p>
            <p>
              Every hackathon taught me something different. Some taught me how to <strong className="text-zinc-800 dark:text-zinc-200">ship fast without breaking things</strong>. 
              Some taught me how to <strong className="text-zinc-800 dark:text-zinc-200">pitch an idea to a room full of judges</strong> in under 3 minutes. 
              And some just taught me that chai at 3am hits different when you&apos;re debugging a production bug before demo day.
            </p>
            <p>
              I&apos;ve built a <strong className="text-zinc-800 dark:text-zinc-200">mental health chatbot</strong> that understood emotions, 
              an <strong className="text-zinc-800 dark:text-zinc-200">emergency ambulance platform</strong> that could save lives, 
              a <strong className="text-zinc-800 dark:text-zinc-200">zero waste initiative</strong> for Delhi, and a lot more — 
              each one solving a real problem, each one pushing me further than the last.
            </p>
            <p>
              Reaching the finals of <strong className="text-zinc-800 dark:text-zinc-200">Smart India Hackathon 2024</strong>, 
              winning the <strong className="text-zinc-800 dark:text-zinc-200">Industrial Ideathon 2025</strong>, 
              finishing in the <strong className="text-zinc-800 dark:text-zinc-200">Top 30 at Hack4Delhi</strong> — 
              these aren&apos;t just lines on a resume. They&apos;re proof that consistency and curiosity compound over time.
            </p>
            <p>
              The real flex? I&apos;m still going. Still showing up. Still building.
            </p>
          </div>
        </div>
      </BlurIn>
    </div>
  );
}

export default Page;
