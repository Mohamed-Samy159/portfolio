import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

const Projects = lazy(() => import('./sections/Projects'))
const Experience = lazy(() => import('./sections/Experience'))
const Education = lazy(() => import('./sections/Education'))
const GitHubStats = lazy(() => import('./sections/GitHubStats'))
const Contact = lazy(() => import('./sections/Contact'))

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={null}>
          <Projects />
          {/* <Experience /> */}
          <Education />
          <GitHubStats />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  )
}
