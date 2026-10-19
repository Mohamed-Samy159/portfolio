import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks, profile } from '../data'
import useActiveSection from '../hooks/useActiveSection'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav aria-label="Main" className="glass mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-bold text-white">
          <span className="gradient-text">MS</span> {profile.name}
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'page' : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${active === l.id ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="rounded-lg p-1.5 text-2xl text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-auto mt-2 max-w-6xl bg-ink/90 p-3 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-slate-200 hover:bg-white/10">
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
