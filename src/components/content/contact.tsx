import BlurFade from '@/components/magicui/blur-fade'
import { ANIMATION } from '@/lib/constants'
import Link from 'next/link'

export function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={ANIMATION.BLUR_FADE_DELAY * 17}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm font-mono">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <div className="text-muted-foreground">
              If you'd like to get in touch, feel free to{' '}
              <Link
                href="mailto:charlielamb20@icloud.com"
                className="text-foreground underline"
              >
                email me
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
