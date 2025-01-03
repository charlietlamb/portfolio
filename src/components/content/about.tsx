import BlurFade from '@/components/magicui/blur-fade'
import { DATA } from '@/data/resume'
import { ANIMATION } from '@/lib/constants'
import Markdown from 'react-markdown'

export function About() {
  return (
    <section id="about">
      <BlurFade delay={ANIMATION.BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={ANIMATION.BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  )
}
