"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code, Cpu } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)

  // Animation for Next Layer text
  useEffect(() => {
    // Play animation only once on initial load
    if (containerRef.current) {
      containerRef.current.classList.add("animated")
    }

    // No interval needed since we only want it to play once
    return () => {}
  }, [])

  // Fluid button animation
  useEffect(() => {
    const button = buttonRef.current
    const fill = fillRef.current

    if (!button || !fill) return

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      fill.style.transition = "none"
      fill.style.top = `${y}px`
      fill.style.left = `${x}px`
      fill.style.width = "0px"
      fill.style.height = "0px"
      fill.style.transform = "translate(-50%, -50%) scale(0)"
      fill.style.opacity = "1"

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const maxX = Math.max(x, rect.width - x)
          const maxY = Math.max(y, rect.height - y)
          const maxRadius = Math.sqrt(maxX ** 2 + maxY ** 2) * 2.5

          fill.style.transition =
            "width 0.8s cubic-bezier(0.22, 1, 0.36, 1), height 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
          fill.style.width = `${maxRadius}px`
          fill.style.height = `${maxRadius}px`
          fill.style.transform = "translate(-50%, -50%) scale(1)"
        })
      })
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      fill.style.top = `${y}px`
      fill.style.left = `${x}px`
      fill.style.transform = "translate(-50%, -50%) scale(0)"
    }

    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-90 scale-125"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary shadow-lg"></span>
            </span>
            Now offering AI agent implementation
          </motion.div>

          <div className="animation-container" ref={containerRef}>
            <div className="text-wrapper">
              <div className="static-text top-text text-4xl md:text-5xl lg:text-6xl font-bold md:mb-2">Unlock the</div>

              <div className="text-container">
                <div className="word next-word">
                  <span className="glimmer-text next-text text-4xl md:text-5xl lg:text-6xl font-bold">Next</span>
                </div>
                <div className="word layer-word" style={{ left: '3.5ch' }}>
                  <span className="glimmer-text layer-text text-4xl md:text-5xl lg:text-6xl font-bold">Layer</span>
                </div>
              </div>

              <div className="static-text bottom-text text-4xl md:text-5xl lg:text-6xl font-bold md:mt-2">
                of AI & Web Innovation
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-foreground/80 max-w-lg"
          >
            Elevate your business' digital presence with NexLayer Studios
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href="#contact"
              ref={buttonRef}
              className="group flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium fluid-button"
            >
              <div className="fill" ref={fillRef}></div>
              <div className="button-text flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          </motion.div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="p-6">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center icon-3d">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">AI Agent Implementation</h3>
                  <p className="text-foreground/80 mb-4">
                    Empower your business with cutting-edge AI solutions tailored to your specific needs and workflows.
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Advanced chatbots & virtual assistants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Workflow automation & integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">Custom AI solutions for your business</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center icon-3d">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Web Design Consultation</h3>
                    <p className="text-foreground/80 mb-4">
                      Create stunning, responsive websites that captivate your audience and drive conversions.
                    </p>

                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Modern, responsive designs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">User experience optimization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm">Brand-focused web development</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
