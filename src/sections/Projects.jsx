import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaChartLine, FaUtensils, FaFilm,FaGamepad } from "react-icons/fa";
import Section from "../components/Section";
import { projects } from "../data";
import { GiLinkedRings } from "react-icons/gi";

const icons = {
  movie: FaFilm,
  chart: FaChartLine,
  food: FaUtensils,
  gaming: FaGamepad,

  wedding: GiLinkedRings,
};

function ProjectCard({ p, i }) {
  const Icon = icons[p.icon];
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="glass group flex flex-col overflow-hidden"
    >
      {/* Swap this block for <img src={...} alt="..." loading="lazy" /> when you have screenshots */}
      <div className="overflow-hidden">
        <div
          className={`grid h-44 place-items-center bg-gradient-to-br ${p.gradient} transition duration-500 group-hover:scale-105`}
          role="img"
          aria-label={`${p.title} preview placeholder`}
        >
          <Icon className="text-5xl text-white/80" />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {p.desc}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex gap-3">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 !py-2"
          >
            <FiExternalLink /> Live Demo
          </a>
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost flex-1 !py-2"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work that shows how I build, style and ship interfaces."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
