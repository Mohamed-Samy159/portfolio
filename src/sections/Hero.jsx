import { motion } from "framer-motion";
import { HiDownload, HiArrowDown, HiMail } from "react-icons/hi";
import useTyping from "../hooks/useTyping";
import SocialLinks from "../components/SocialLinks";
import { profile, typingWords } from "../data";
import photo from "../assets/WhatsApp Image 2026-06-17 at 11.56.34 PM.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  const typed = useTyping(typingWords);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-purple-600/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="text-lg text-slate-300">
            Hi, I'm{" "}
            <span className="font-semibold text-white">{profile.name}</span>
          </motion.p>
          <motion.h1
            variants={item}
            className="mt-3 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            <span className="gradient-text">Front-End Developer</span> Building
            Modern Web Experiences
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 min-h-[2rem] text-lg text-slate-300"
            aria-live="off"
          >
            I craft <span className="font-semibold text-white">{typed}</span>
            <span
              className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-violet-400 align-middle"
              aria-hidden="true"
            />
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.cv}
              download="Mohamed_Samy_CV.pdf"
              className="btn btn-primary"
            >
              <HiDownload /> Download CV
            </a>

            <a href="#projects" className="btn btn-ghost">
              <HiArrowDown /> View Projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              <HiMail /> Contact Me
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="gradient-bg rounded-full p-1.5 "
          >
            <img
              src={photo}
              alt=" Mohamed Samy"
              className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
            />
            {/* <div role="img" aria-label="Profile image placeholder" className="grid h-64 w-64 place-items-center rounded-full bg-ink font-display text-7xl font-bold sm:h-72 sm:w-72">
              <span className="gradient-text">MS</span>
            </div> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
