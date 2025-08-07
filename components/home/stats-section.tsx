"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"
import { StaggeredContainer, StaggeredItem } from "@/components/ui/staggered-container"

const stats = [
  {
    value: 4000,
    label: "Distinguished Alumni",
    suffix: "+",
  },
  {
    value: 51,
    label: "Graduate Batches",
    suffix: "",
  },
  {
    value: 8,
    label: "Programs",
    suffix: "",
  },
]

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toLocaleString()
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, to])

  return <span ref={ref}>0</span>
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-500 text-white">
      <StaggeredContainer
        className="container mx-auto grid grid-cols-3 gap-8 py-12 text-center"
        staggerDelay={0.2}
      >
        {stats.map((stat, index) => (
          <StaggeredItem key={index}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 flex flex-col items-center">
              <p className="text-4xl md:text-5xl font-bold text-white">
                <AnimatedCounter to={stat.value} />
                {stat.suffix}
              </p>
              <p className="text-sm text-white/80 mt-2 tracking-wide uppercase">{stat.label}</p>
            </div>
          </StaggeredItem>
        ))}
      </StaggeredContainer>
    </section>
  )
}