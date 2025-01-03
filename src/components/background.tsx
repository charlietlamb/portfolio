import { cn } from '@/lib/utils'
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern'

export function Background() {
  return (
    <div className="fixed top-0 w-full h-screen left-0 right-0 pointer-events-none -z-20">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          '',
          '[mask-image:radial-gradient(1000px_circle_at_center,transparent,hsl(var(--background)))]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
    </div>
  )
}
