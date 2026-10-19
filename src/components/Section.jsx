import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 id={`${id}-title`} className="text-3xl font-bold sm:text-4xl">{title}</h2>
        <div className="mt-3 h-1 w-16 rounded-full gradient-bg" />
        {subtitle && <p className="mt-4 max-w-xl text-slate-400">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  )
}
