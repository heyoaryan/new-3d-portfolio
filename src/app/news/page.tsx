"use client";
import React from "react";
import { BlurIn, BoxReveal } from "@/components/reveal-animations";
import { Mail, Zap, Users, Rocket } from "lucide-react";

const NEWSLETTER_CONTENT = [
  {
    icon: <Rocket size={40} className="text-orange-500" />,
    title: "Industrial Ideathon Winner 25",
    content: "Secured victory in the Industrial Ideathon 2025, demonstrating excellence in innovation and problem-solving.",
  },
  {
    icon: <Zap size={40} className="text-yellow-500" />,
    title: "Smart Delhi Ideathon 25 Qualifier",
    content: "Qualified for Smart Delhi Ideathon 2025, showcasing technical prowess and creative solutions.",
  },
  {
    icon: <Users size={40} className="text-blue-500" />,
    title: "Smart India Hackathon 24 Finalist",
    content: "Achieved finalist status in Smart India Hackathon 2024, competing among India's brightest minds.",
  },
  {
    icon: <Mail size={40} className="text-purple-500" />,
    title: "20+ Hackathons Experience",
    content: "Gained extensive real-world experience through 20+ hackathons, building impactful projects and collaborating with talented developers.",
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20 min-h-screen">
      <BlurIn delay={0.3}>
        <div className="flex items-center gap-3 mb-4">
          <Mail size={40} className="text-zinc-400" />
          <h1 className="text-4xl md:text-5xl font-bold">Newsletter</h1>
        </div>
        <p className="text-zinc-400 mb-12 text-lg">
          Stay updated with my latest achievements, hackathon wins, and project milestones
        </p>
      </BlurIn>

      <BlurIn delay={0.6}>
        <div
          className="p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-600 mb-12"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-6">About Me</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p className="text-lg">
              Hey! I&apos;m <strong className="text-zinc-200">Aryan Singh Thakur</strong>, a passionate 
              tech enthusiast currently pursuing my <strong className="text-zinc-200">3rd year BCA</strong> 
              from <strong className="text-zinc-200">Guru Gobind Singh Indraprastha University (GGSIPU)</strong>. 
              I&apos;m studying at <strong className="text-zinc-200">Kasturi Ram College of Higher Education</strong>, 
              which is affiliated with GGSIPU.
            </p>
            <p className="text-lg">
              As a tech enthusiast, I&apos;m constantly exploring new technologies, building innovative projects, 
              and participating in hackathons to push my boundaries. My journey combines academic excellence 
              with real-world problem-solving, making me a well-rounded full-stack developer.
            </p>
            <p className="text-lg">
              Through this newsletter, I share my latest achievements, hackathon experiences, project updates, 
              and insights from my journey as a developer. Stay tuned for exciting updates!
            </p>
          </div>
        </div>
      </BlurIn>

      <BlurIn delay={0.8}>
        <div
          className="p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-600 mb-12"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <p className="text-zinc-400 leading-relaxed">
            Welcome to my newsletter! Here you&apos;ll find updates about my hackathon achievements, 
            project launches, and insights from my journey as a full-stack developer. From winning 
            competitions to building innovative solutions, I share my experiences and learnings here.
          </p>
        </div>
      </BlurIn>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {NEWSLETTER_CONTENT.map((item, index) => (
          <BoxReveal key={item.title} delay={1.0 + index * 0.15} width="100%">
            <div
              className="p-6 md:p-8 rounded-2xl border-[.5px] border-zinc-600 hover:border-zinc-500 transition-all duration-300 h-full"
              style={{
                backdropFilter: "blur(2px)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          </BoxReveal>
        ))}
      </div>

      <BlurIn delay={1.6} className="mt-16">
        <div
          className="p-8 md:p-10 rounded-2xl border-[.5px] border-zinc-600"
          style={{
            backdropFilter: "blur(2px)",
          }}
        >
          <h2 className="text-3xl font-semibold mb-6">My Hackathon Story</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p className="text-lg">
              My hackathon journey has been nothing short of transformative. Starting with local 
              competitions, I quickly developed a passion for rapid development and innovative 
              problem-solving. The adrenaline rush of building something meaningful in 24-48 hours 
              kept me coming back for more.
            </p>
            <p className="text-lg">
              The pinnacle of my achievements includes being a <strong className="text-zinc-200">Finalist 
              in Smart India Hackathon 2024</strong>, one of India&apos;s most prestigious tech competitions. 
              This experience taught me how to work under extreme pressure, collaborate effectively 
              with diverse teams, and deliver production-ready solutions in record time.
            </p>
            <p className="text-lg">
              Winning the <strong className="text-zinc-200">Industrial Ideathon 2025</strong> was a 
              testament to my growth as a developer and innovator. Qualifying for the <strong className="text-zinc-200">
              Smart Delhi Ideathon 2025</strong> further reinforced my commitment to excellence.
            </p>
            <p className="text-lg">
              Through 20+ hackathons, I&apos;ve not just won prizes but gained invaluable experience in 
              full-stack development, cloud deployments, AI integration, and creating user-centric 
              solutions. Each competition has been a stepping stone in my journey toward becoming a 
              better developer and a more creative problem-solver.
            </p>
          </div>
        </div>
      </BlurIn>
    </div>
  );
}

export default Page;

