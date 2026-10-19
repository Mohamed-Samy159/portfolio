export const profile = {
  name: "Mohamed Samy",
  role: "Front-End Developer",
  headline: "Front-End Developer Building Modern Web Experiences",
  email: "mosamykamal@gmail.com",
  phone: "01123822442",
  cv: "/Mohamed_Samy_CV.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/mohamed-samy-2835a7287/",
    github: "https://github.com/Mohamed-Samy159",
    facebook: "https://www.facebook.com/share/1MnEsTeUVp/",
    photo: "../assets/WhatsApp Image 2026-06-17 at 11.56.34 PM.jpeg",
  },
};

export const typingWords = [
  "React Interfaces",
  "Responsive Websites",
  "Accessible UIs",
  "Clean Components",
  "Modern Web Experiences",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  // { id: 'experience', label: 'Experience' },
  { id: "education", label: "Education" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" },
];

export const about = {
  summary:
    "I am a junior Front-End Developer who turns designs into fast, responsive and accessible interfaces. I work mainly with React, TypeScript and Tailwind CSS, and I care about clean component structure and details users notice.",
  objective:
    "I am looking for an internship or junior role on a product team where I can ship real features, learn from experienced engineers and grow into a well-rounded front-end engineer.",
  strengths: [
    {
      title: "Detail-oriented",
      text: "Pixel-accurate layouts that hold up on every screen size.",
    },
    {
      title: "Fast learner",
      text: "I pick up new tools quickly and apply them in real projects.",
    },
    {
      title: "Team player",
      text: "Comfortable with Git workflows, code reviews and clear communication.",
    },
    {
      title: "Problem solver",
      text: "I break complex UI problems into small, reusable components.",
    },
  ],
};

export const skills = {
  Frontend: [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 70 },
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 65 },
    { name: "Tailwind CSS", level: 100 },
    { name: "Bootstrap", level: 100 },
  ],
  Tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 100 },
  ],
};

export const projects = [
  {
    title: "Mazen&Mona-Wedding",
    icon: "wedding",
    gradient: "from-white to-black-900",
    desc: "An elegant interactive wedding invitation featuring a romantic design, animated envelope opening, live countdown, love story timeline, and wedding venue directions..",
    tech: ["React", "Tailwind CSS", "Context API"],
    live: "https://mazen-mona-wedding-7wnn.vercel.app/",
    repo: "https://github.com/Mohamed-Samy159/Mazen-Mona_Wedding",
  },
  {
    title: "Halcyon Movie",
    icon: "movie",
    gradient: "from-cyan-500 to-blue-700",
    desc: "Destination browsing, booking enquiry form and a responsive photo gallery.",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://halcyon-movie-tely.vercel.app/",
    repo: "https://github.com/Mohamed-Samy159/halcyon-movie",
  },
  {
    title: "Gaming Space",
    icon: "gaming",
    gradient: "from-violet-600 to-purple-800",
    desc: "Analytics dashboard with charts, data tables, and light/dark themes.",
    tech: ["React", "TypeScript", "Recharts"],
    live: "https://gamingspace.vercel.app/",
    repo: "https://github.com/Mohamed-Samy159/Gaming-Space",
  },
  // {
  //   title: "Restaurant Landing Page",
  //   icon: "food",
  //   gradient: "from-fuchsia-600 to-purple-700",
  //   desc: "Fast single-page site with menu, reservations and an optimized image strategy.",
  //   tech: ["HTML5", "CSS3", "JavaScript"],
  //   live: "#",
  //   repo: "https://github.com/Mohamed-Samy159",
  // },
  // {
  //   title: "Personal Portfolio",
  //   icon: "user",
  //   gradient: "from-indigo-500 to-violet-700",
  //   desc: "This portfolio: component-based, animated, accessible and SEO-friendly.",
  //   tech: ["React", "Vite", "Tailwind CSS"],
  //   live: "#",
  //   repo: "https://github.com/Mohamed-Samy159",
  // },
];

export const education = [
  {
    title: "HISS in Tour Guide ",
    place: "Future Academy",
    period: "2023 - 2027",
    points: [
      "Studying Tourism Guidance while developing skills in Front-End Development, web technologies, and creating modern, user-friendly websites.",
    ],
  },
  {
    title: "Front-End Web Development Certificate (Course)",
    place: "Training Provider",
    period: "2026",
    points: ["React, JavaScript, responsive design and Git workflows."],
  },
  
];
