import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'
import { profile } from '../data'

const items = [
  { label: 'GitHub', href: profile.links.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: FaLinkedinIn },
  { label: 'Facebook', href: profile.links.facebook, Icon: FaFacebookF },
]

export default function SocialLinks() {
  return (
    <ul className="flex gap-3">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}
