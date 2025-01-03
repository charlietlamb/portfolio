import {
  Hero,
  About,
  Work,
  Education,
  Skills,
  Technology,
  Projects,
  Contact,
} from '@/components/content'

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      <Hero />
      <About />
      <Work />
      <Education />
      <Skills />
      <Technology />
      <Projects />
      <Contact />
    </main>
  )
}
