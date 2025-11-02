import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "tic-tac-toe",
    category: "Game",
    title: "Tic Tac Toe",
    src: "/assets/projects-screenshots/tic-tac-toe/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    live: "#",
    github: "https://github.com/heyoaryan/Tic-Tac-Toe",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Classic Tic Tac Toe Game
          </TypographyP>
          <TypographyP className="font-mono ">
            A classic and fun Tic Tac Toe game built with modern web technologies. 
            This is my second project where I created an interactive game that brings 
            the timeless Tic Tac Toe experience to your browser. Perfect for quick 
            games and practicing game logic!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Interactive game board with smooth UI
          </p>
          <p className="font-mono mb-2">
            • Win detection and game state management
          </p>
          <p className="font-mono mb-2">
            • Responsive design for all devices
          </p>
          <p className="font-mono mb-2">
            • Clean and intuitive user interface
          </p>
        </div>
      );
    },
  },
  {
    id: "taskflow-tracker",
    category: "Task Management",
    title: "Task Flow Tracker",
    src: "/assets/projects-screenshots/task-flow-tracker/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/heyoaryan/taskflow-tracker",
    skills: {
      frontend: [PROJECT_SKILLS.ts, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Task Flow Tracker is a powerful task management application designed 
            to help you organize and track your workflow efficiently. Built with 
            TypeScript and modern React patterns, it provides an intuitive interface 
            for managing your daily tasks and projects.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Create, update, and delete tasks with ease
          </p>
          <p className="font-mono mb-2">
            • Organize tasks by categories and priorities
          </p>
          <p className="font-mono mb-2">
            • Track task progress and completion status
          </p>
          <p className="font-mono mb-2">
            • Clean and minimalistic UI for better productivity
          </p>
        </div>
      );
    },
  },
  {
    id: "mind-mitra",
    category: "Healthcare AI",
    title: "Mind Mitra - Mental Health Chatbot",
    src: "/assets/projects-screenshots/mind-mitra/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/heyoaryan/mind-mitra",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Mind Mitra is a mental health chatbot with emotional intelligence, 
            designed to provide support and guidance for mental wellness. This 
            innovative project uses AI to understand emotional context and provide 
            empathetic responses, making mental health support more accessible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • AI-powered emotional intelligence for empathetic responses
          </p>
          <p className="font-mono mb-2">
            • 24/7 availability for mental health support
          </p>
          <p className="font-mono mb-2">
            • Safe and confidential conversation environment
          </p>
          <p className="font-mono mb-2">
            • Contextual understanding of user emotions
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Built as a hackathon project focusing on mental health awareness, 
            Mind Mitra aims to bridge the gap in accessible mental health support 
            using technology.
          </p>
        </div>
      );
    },
  },
  {
    id: "zero-waste-delhi",
    category: "Environmental",
    title: "Zero Waste Delhi",
    src: "/assets/projects-screenshots/zero-waste-delhi/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/heyoaryan/zero-waste-delhi",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Zero Waste Delhi is an environmental initiative platform designed to 
            promote waste reduction and sustainable practices in Delhi. The platform 
            connects communities, provides resources, and tracks progress toward 
            a zero-waste lifestyle, making environmental consciousness more accessible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Community engagement for waste reduction initiatives
          </p>
          <p className="font-mono mb-2">
            • Resources and guides for sustainable living
          </p>
          <p className="font-mono mb-2">
            • Track and monitor waste reduction progress
          </p>
          <p className="font-mono mb-2">
            • Connect with like-minded individuals and organizations
          </p>
          <TypographyH3 className="my-4 mt-8">Mission</TypographyH3>
          <p className="font-mono mb-2">
            Created to address Delhi&apos;s waste management challenges and promote 
            sustainable practices for a cleaner, greener future.
          </p>
        </div>
      );
    },
  },
  {
    id: "ambu-now",
    category: "Healthcare",
    title: "Ambu Now",
    src: "/assets/projects-screenshots/ambu-now/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/heyoaryan/ambu-now",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ambu Now is an emergency medical services platform that connects users 
            with the nearest ambulance services quickly and efficiently. Designed to 
            save lives by reducing response time, this application ensures rapid 
            emergency medical assistance when every second counts.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Real-time location tracking for nearest ambulances
          </p>
          <p className="font-mono mb-2">
            • Quick emergency request system
          </p>
          <p className="font-mono mb-2">
            • Live ambulance status and ETA tracking
          </p>
          <p className="font-mono mb-2">
            • Emergency contact integration
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Built to address critical gaps in emergency medical services, Ambu Now 
            aims to make healthcare more accessible and response times faster during 
            emergencies.
          </p>
        </div>
      );
    },
  },
  {
    id: "cargo-crazee",
    category: "Logistics",
    title: "Cargo Crazee",
    src: "/assets/projects-screenshots/cargo-crazee/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/heyoaryan/cargo-crazee",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Cargo Crazee is a logistics and shipping management platform that 
            simplifies cargo handling and transportation. Designed for businesses 
            and individuals, it streamlines the entire shipping process from 
            booking to delivery, making cargo management efficient and hassle-free.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            • Easy cargo booking and management system
          </p>
          <p className="font-mono mb-2">
            • Real-time shipment tracking
          </p>
          <p className="font-mono mb-2">
            • Automated logistics workflow
          </p>
          <p className="font-mono mb-2">
            • Cost calculation and payment integration
          </p>
          <TypographyH3 className="my-4 mt-8">Value Proposition</TypographyH3>
          <p className="font-mono mb-2">
            Cargo Crazee revolutionizes cargo management by providing a centralized 
            platform that connects shippers with logistics providers, ensuring 
            smooth and transparent operations.
          </p>
        </div>
      );
    },
  },
];
export default projects;
