"use client";
import React from "react";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Trophy, Award, Target, Code2 } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Industrial Ideathon Winner 25",
    icon: <Trophy size={40} className="text-yellow-500" />,
    description: "Won the prestigious Industrial Ideathon 2025, showcasing innovative solutions and problem-solving skills.",
    year: "2025",
  },
  {
    title: "Smart Delhi Ideathon 25 Qualifier",
    icon: <Award size={40} className="text-blue-500" />,
    description: "Successfully qualified for Smart Delhi Ideathon 2025, demonstrating technical excellence and creativity.",
    year: "2025",
  },
  {
    title: "Smart India Hackathon 24 Finalist",
    icon: <Target size={40} className="text-green-500" />,
    description: "Reached the finals of Smart India Hackathon 2024, one of India's largest hackathons, competing with top talent nationwide.",
    year: "2024",
  },
  {
    title: "20+ Hackathons Experience",
    icon: <Code2 size={40} className="text-purple-500" />,
    description: "Participated in 20+ hackathons, gaining extensive real-world experience, building innovative projects, and collaborating with talented developers.",
    year: "Ongoing",
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & Achievements</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          My journey through hackathons, competitions, and innovative projects
        </p>
      </BlurIn>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {ACHIEVEMENTS.map((achievement, index) => (
          <BoxReveal key={achievement.title} delay={0.5 + index * 0.2} width="100%">
            <div
              className="p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-600 hover:border-zinc-500 transition-all duration-300"
              style={{
                backdropFilter: "blur(2px)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-2">{achievement.title}</h2>
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full text-zinc-300">
                    {achievement.year}
                  </span>
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed mt-4">
                {achievement.description}
              </p>
            </div>
          </BoxReveal>
        ))}
      </div>

      <BlurIn delay={1.2} className="mt-16">
        <div
          className="p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-600"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <h2 className="text-3xl font-semibold mb-6">Hackathon Journey</h2>
          <p className="text-zinc-400 leading-relaxed text-lg mb-4">
            Over the past few years, I've immersed myself in the competitive world of hackathons, 
            participating in 20+ events that have shaped me as a developer and problem-solver. 
            These experiences have taught me the importance of rapid prototyping, teamwork, and 
            thinking outside the box.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg mb-4">
            From local competitions to national-level events like Smart India Hackathon, each 
            hackathon has been a learning opportunity. I've built projects ranging from mental 
            health chatbots with emotional intelligence to travel planning platforms and innovative 
            web applications.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg">
            The real-world constraints, tight deadlines, and collaborative environment of hackathons 
            have helped me develop not just technical skills, but also communication, leadership, 
            and the ability to deliver under pressure. These achievements reflect my passion for 
            innovation and my commitment to continuous learning.
          </p>
        </div>
      </BlurIn>
    </div>
  );
}

export default Page;

