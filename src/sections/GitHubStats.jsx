import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Section from '../components/Section'
import { profile } from '../data'

const stats = [
  { label: 'Repositories', value: '4' },
  { label: 'Commits this year', value: '17' },
  { label: 'Pull requests', value: '--' },
  { label: 'Stars earned', value: '--' },
]
const shades = ['bg-white/5', 'bg-blue-900/70', 'bg-blue-700/80', 'bg-indigo-500', 'bg-purple-500']

export default function GitHubStats() {
  // Placeholder graph: swap for real data or an embed such as github-readme-stats / ghchart
  const cells = useMemo(() => Array.from({ length: 7 * 26 }, (_, i) => (i * 7 + ((i * i) % 17)) % 5), [])

  return (
    <Section id="github" title="GitHub Activity" subtitle="Placeholder stats. Connect the GitHub API or an embed to show live numbers.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass p-5 text-center">
            <p className="gradient-text font-display text-3xl font-bold">{s.value}</p>
            <p className="mt-1 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass mt-6 p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">Contribution graph</h3>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2"><FaGithub /> View profile</a>
        </div>
        <div className="overflow-x-auto pb-2">
          <div role="img" aria-label="Contribution graph placeholder" className="grid min-w-[560px] grid-flow-col grid-rows-7 gap-1">
            {cells.map((v, i) => <span key={i} className={`h-3 w-3 rounded-sm ${shades[v]}`} />)}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
