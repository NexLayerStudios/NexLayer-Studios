"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react"

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const wasInView = useRef(false)

  useEffect(() => {
    if (isInView) {
      wasInView.current = true
    }
  }, [isInView])

  // Handle the 3D card animation
  useEffect(() => {
    const cards = document.querySelectorAll(".process-3d-card")

    cards.forEach((card) => {
      const title = card.querySelector(".process-title") as HTMLElement | null
      const desc = card.querySelector(".process-desc") as HTMLElement | null

      card.addEventListener("mousemove", (e) => {
        const event = e as MouseEvent
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * 20
        const rotateY = ((x - centerX) / centerX) * -20

        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`
        if (title) title.style.transform = `translate(${rotateY * -1}px, ${rotateX}px)`
        if (desc) desc.style.transform = `translate(${rotateY * -0.5}px, ${rotateX * 0.5}px)`
      })

      card.addEventListener("mouseleave", () => {
        (card as HTMLElement).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
        if (title) title.style.transform = "translate(0px, 0px)"
        if (desc) desc.style.transform = "translate(0px, 0px)"
      })
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", () => {})
        card.removeEventListener("mouseleave", () => {})
      })
    }
  }, [isInView])

  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Discovery Call",
      description: "We start by understanding your business, goals, and pain points to create a tailored solution.",
      delay: 0,
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Design Strategy",
      description: "We develop a comprehensive strategy and create mockups tailored to your brand.",
      delay: 0.2,
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Build & Integrate",
      description: "We build your solution with clean code, responsive design, and AI functionality.",
      delay: 0.4,
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure success.",
      delay: 0.6,
    },
  ]

  return (
    <div className="container mx-auto px-4 section-transition" ref={ref}>
      <div
        className={`max-w-3xl mx-auto text-center mb-16 ${isInView ? "section-animate-in visible" : wasInView.current ? "section-animate-out hidden" : "section-animate-in"}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          Our Process
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How We <span className="glimmer-text">Bring Your Vision</span> to Life
        </h2>

        <p className="text-lg text-foreground/80">
          Our streamlined process ensures we deliver high-quality solutions that meet your specific needs and exceed
          your expectations.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

        <div className="space-y-12 md:space-y-0 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : wasInView.current ? { opacity: 0, y: -30 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: step.delay }}
              className={`md:flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div
                  className={`process-3d-card p-6 inline-block bg-[#1b1b22] border border-[#2d2d39] rounded-2xl shadow-lg will-change-transform`}
                  style={{
                    transition: "transform 0.1s ease-out",
                    transformStyle: "preserve-3d",
                    overflow: "hidden",
                  }}
                >
                  <h3
                    className="process-title text-xl font-semibold mb-2"
                    style={{ transition: "transform 0.2s ease-out", willChange: "transform" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="process-desc text-foreground/80"
                    style={{ transition: "transform 0.2s ease-out", willChange: "transform" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-center md:w-20">
                <div
                  className="w-12 h-12 rounded-full bg-primary/10 border border-primary flex items-center justify-center z-10 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 process-number"
                  tabIndex={0}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                    <span className="text-primary font-bold flex items-center justify-center w-full h-full text-center">{index + 1}</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
