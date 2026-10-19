import SocialLinks from './SocialLinks'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="text-sm text-slate-400">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  )
}
