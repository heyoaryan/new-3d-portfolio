import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Achievements | Aryan Singh Thakur — Hackathon Winner",
  description:
    "Aryan Singh Thakur's hackathon achievements. Smart India Hackathon 2024 Finalist, Industrial Ideathon 2025 Winner, Hack4Delhi Top 30, Smart Delhi Ideathon Qualifier. 25+ hackathons, 5+ wins.",
  keywords: [
    "Aryan Singh Thakur achievements",
    "aryan thakur hackathon",
    "aryan singh thakur awards",
    "Smart India Hackathon finalist aryan",
    "Industrial Ideathon winner 2025",
    "Hack4Delhi top 30",
    "Smart Delhi Ideathon",
    "hackathon winner Delhi",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/achievements` },
  openGraph: {
    title: "Achievements | Aryan Singh Thakur — Hackathon Winner",
    description:
      "SIH 2024 Finalist, Industrial Ideathon 2025 Winner, Hack4Delhi Top 30. 25+ hackathons, 5+ wins. Aryan Singh Thakur's competitive journey.",
    url: `${config.site}/achievements`,
    siteName: "Aryan Singh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Aryan Singh Thakur Achievements" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achievements | Aryan Singh Thakur",
    description: "SIH Finalist, Industrial Ideathon Winner, Hack4Delhi Top 30. 25+ hackathons.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
