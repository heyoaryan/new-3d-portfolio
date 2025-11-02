const config = {
  title: "Aryan Singh Thakur | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aryan Singh Thakur, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Aryan Singh Thakur, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Aryan Singh Thakur",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Aryan Singh Thakur",
  email: "iamaryan721@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/aryan-singh-thakur-12a422281/",
    instagram: "https://www.instagram.com/thakurraryan_?igsh=MXJtYXR6cTZ4MzNsMA==",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/heyoaryan",
  },
};
export { config };
