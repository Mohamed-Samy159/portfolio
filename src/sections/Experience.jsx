import Section from '../components/Section'
import Timeline from '../components/Timeline'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="Where I've applied my skills so far.">
      <Timeline items={experience} />
    </Section>
  )
}
