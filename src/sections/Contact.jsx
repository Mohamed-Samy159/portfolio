import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Section from '../components/Section'
import { profile } from '../data'

const info = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: HiMail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, Icon: HiPhone },
  { label: 'LinkedIn', value: 'Connect with me', href: profile.links.linkedin, Icon: FaLinkedin },
  { label: 'GitHub', value: 'Mohamed-Samy159', href: profile.links.github, Icon: FaGithub },
]

const field = 'mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Opens the visitor's mail app. Swap for Formspree / EmailJS / your API for in-page sending.
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <Section id="contact" title="Contact" subtitle="Open to internships and junior roles. Send a message and I'll reply soon.">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-4">
          {info.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <motion.a whileHover={{ x: 4 }} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="glass flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-xl text-white"><Icon /></span>
                <span>
                  <span className="block text-sm text-slate-400">{label}</span>
                  <span className="break-all font-medium text-white">{value}</span>
                </span>
              </motion.a>
            </li>
          ))}
        </ul>

        <form onSubmit={onSubmit} className="glass space-y-5 p-7">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
            <input id="name" name="name" required autoComplete="name" value={form.name} onChange={onChange} className={field} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={onChange} className={field} placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
            <textarea id="message" name="message" required rows={5} value={form.message} onChange={onChange} className={field} placeholder="How can I help?" />
          </div>
          <button type="submit" className="btn btn-primary w-full">Send message</button>
          <p role="status" className="min-h-5 text-center text-sm text-emerald-400">{sent ? 'Your mail app is opening with the message ready to send.' : ''}</p>
        </form>
      </div>
    </Section>
  )
}
