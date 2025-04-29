"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const wasInView = useRef(false)

  useEffect(() => {
    if (isInView) {
      wasInView.current = true
    }
  }, [isInView])

  const skills = [
    "AI Implementation",
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "API Integration",
    "Performance Optimization",
  ]

  return (
    <div className="container mx-auto px-4 section-transition" ref={ref}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : wasInView.current ? { opacity: 0, x: 50 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] max-w-md mx-auto overflow-hidden rounded-2xl card-3d">
            <Image
              src="/images/headshot.png"
              alt="Jalen Stanberry"
              width={500}
              height={375}
              className="object-cover w-full h-full object-top"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : wasInView.current ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            About Me
          </div>

          <h2 className="text-3xl md:text-4xl font-bold">
            Bridging <span className="text-foreground">Technology</span> &{" "}
            <span className="glimmer-text">Creativity</span>
          </h2>

          <p className="text-lg text-foreground/80">
            Hello! I'm Jalen Stanberry, a passionate computer science student at Georgia State University.
          </p>

          <p className="text-lg text-foreground/80">
            I specialize in connecting businesses with cutting-edge AI technologies and crafting modern,
            high-performance web experiences.
          </p>

          <p className="text-lg text-foreground/80">
            With a strong focus on innovation and practical solutions, I help brands streamline workflows, enhance
            customer interactions, and build stronger digital identities.
          </p>

          <p className="text-lg text-foreground/80">Let's take your business to the next layer of innovation!</p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
