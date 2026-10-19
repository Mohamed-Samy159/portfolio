import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <ol className="relative ml-3 border-l border-white/15 sm:ml-4">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: i * 0.08 }}
          className="relative mb-8 ml-6 last:mb-0 sm:ml-8"
        >
          <span className="absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full gradient-bg ring-4 ring-ink sm:-left-[39px]" aria-hidden="true" />
          <article className="glass p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{item.period}</span>
            </div>
            <p className="gradient-text mt-1 text-sm font-medium">{item.place}</p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
              {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        </motion.li>
      ))}
    </ol>
  )
}
