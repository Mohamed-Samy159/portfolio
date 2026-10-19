import { motion } from 'framer-motion'
import Section from '../components/Section'
import { about } from '../data'

export default function About() {
  return (
    <Section id="about" title="About Me" subtitle="A quick look at who I am and what I'm aiming for.">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass p-7">
          <h3 className="text-xl font-semibold">Professional summary</h3>
          <p className="mt-3 leading-relaxed text-slate-400">{about.summary}</p>
          <h3 className="mt-6 text-xl font-semibold">Career objective</h3>
          <p className="mt-3 leading-relaxed text-slate-400">{about.objective}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {about.strengths.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass p-5"
            >
              <h3 className="gradient-text font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.text}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
