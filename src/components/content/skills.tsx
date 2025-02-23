import BlurFade from '@/components/magicui/blur-fade'
import { Badge } from '@/components/ui/badge'
import { DATA } from '@/data/resume'
import { ANIMATION } from '@/lib/constants'

export function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={ANIMATION.BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade
              key={skill}
              delay={ANIMATION.BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <Badge className="font-mono" key={skill}>
                {skill}
              </Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
