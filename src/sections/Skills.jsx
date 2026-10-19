import { motion } from 'framer-motion'
import Section from '../components/Section'
import { skills } from '../data'

function Bar({ name, level, delay }) {
  return (
    <li>
      <div className="mb-1.5 flex justify-between text-sm">
        <span className="font-medium text-white">{name}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full gradient-bg"
        />
      </div>
    </li>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I use to build interfaces.">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="glass p-7">
            <h3 className="mb-6 text-xl font-semibold">{group}</h3>
            <ul className="space-y-5">
              {list.map((s, i) => <Bar key={s.name} {...s} delay={i * 0.06} />)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
