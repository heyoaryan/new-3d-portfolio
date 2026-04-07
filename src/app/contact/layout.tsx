import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact Aryan Singh Thakur | Hire a Full-Stack Developer",
  description:
    "Get in touch with Aryan Singh Thakur for freelance web development. Available for frontend, backend, and full-stack projects. Based in Delhi, India.",
  keywords: [
    "contact Aryan Singh Thakur",
    "hire aryan thakur",
    "aryan thakur contact",
    "aryan singh thakur hire",
    "freelance developer Delhi",
    "hire full stack developer India",
    "web developer for hire Delhi",
    ...config.keywords,
  ],
  alternates: { canonical: `${config.site}/contact` },
  openGraph: {
    title: "Contact Aryan Singh Thakur | Hire a Full-Stack Developer",
    description:
      "Looking for a full-stack developer? Reach out to Aryan Singh Thakur for freelance projects. Based in Delhi, India.",
    url: `${config.site}/contact`,
    siteName: "Aryan Singh Thakur",
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "Contact Aryan Singh Thakur" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Aryan Singh Thakur | Hire a Full-Stack Developer",
    description: "Reach out for freelance web development. Frontend, backend, full-stack. Delhi, India.",
    images: [config.ogImg],
    creator: config.social.twitterHandle,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
