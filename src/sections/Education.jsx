import Section from '../components/Section'
import Timeline from '../components/Timeline'
import { education } from '../data'

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications" subtitle="Formal studies and courses behind my skills.">
      <Timeline items={education} />
    </Section>
  )
}
