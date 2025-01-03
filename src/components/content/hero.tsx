import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LoaderCircle } from 'lucide-react'
import { DATA } from '@/data/resume'
import { ANIMATION } from '@/lib/constants'

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={ANIMATION.BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
            />
            <BlurFadeText
              className="max-w-[600px] md:text-lg font-mono text-muted-foreground"
              delay={ANIMATION.BLUR_FADE_DELAY}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={ANIMATION.BLUR_FADE_DELAY}>
            <Avatar className="size-28 border flex justify-center items-center">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover object-[center_20%]"
              />
              <AvatarFallback>
                {
                  <LoaderCircle className="size-10 animate-spin text-muted-foreground" />
                }
              </AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
