"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, Workflow, Database, Palette, Smartphone, Rocket } from "lucide-react"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const wasInView = useRef(false)

  useEffect(() => {
    if (isInView) {
      wasInView.current = true
    }
  }, [isInView])

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      title: "AI Chatbots",
      description: "Custom AI chatbots trained on your business data to provide 24/7 customer support.",
      category: "ai",
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: "Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      category: "ai",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Integration",
      description: "Connect your AI agents with your existing systems and databases.",
      category: "ai",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user experience and engagement.",
      category: "web",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Responsive Development",
      description: "Websites that look and function perfectly on all devices and screen sizes.",
      category: "web",
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites optimized for speed, SEO, and conversions.",
      category: "web",
    },
  ]

  // Handle the 3D card animation
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card")

    cards.forEach((card) => {
      const title = card.querySelector(".service-title") as HTMLElement | null
      const desc = card.querySelector(".service-desc") as HTMLElement | null

      card.addEventListener("mousemove", (e) => {
        const event = e as MouseEvent
        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * -10;

        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        if (title) title.style.transform = `translate(${rotateY * -0.5}px, ${rotateX * 0.5}px)`;
        if (desc) desc.style.transform = `translate(${rotateY * -0.3}px, ${rotateX * 0.3}px)`;
      })

      card.addEventListener("mouseleave", (e) => {
        (card as HTMLElement).style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        if (title) title.style.transform = "translate(0px, 0px)";
        if (desc) desc.style.transform = "translate(0px, 0px)";
      })
    })

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", () => {})
        card.removeEventListener("mouseleave", () => {})
      })
    }
  }, [isInView])

  return (
    <motion.div
      className="container mx-auto px-4"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div
        className={`max-w-3xl mx-auto text-center mb-16`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          Our Services
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comprehensive <span className="glimmer-text">Digital Solutions</span>
        </h2>

        <p className="text-lg text-foreground/80">
          From cutting-edge AI implementation to stunning web design, we provide end-to-end solutions to elevate your
          digital presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          // Dramatic directional animation for each card
          let initial = { opacity: 0, x: 0, y: 0, scale: 0.8, rotate: 0 };
          if (index === 0) initial = { opacity: 0, x: -120, y: -120, scale: 0.8, rotate: -8 }; // top left
          if (index === 1) initial = { opacity: 0, x: 0, y: -120, scale: 0.8, rotate: 0 };     // top middle
          if (index === 2) initial = { opacity: 0, x: 120, y: -120, scale: 0.8, rotate: 8 };   // top right
          if (index === 3) initial = { opacity: 0, x: -120, y: 120, scale: 0.8, rotate: 8 };   // bottom left
          if (index === 4) initial = { opacity: 0, x: 0, y: 120, scale: 0.8, rotate: 0 };      // bottom middle
          if (index === 5) initial = { opacity: 0, x: 120, y: 120, scale: 0.8, rotate: -8 };   // bottom right
          return (
            <motion.div
              key={index}
              initial={initial}
              animate={
                isInView
                  ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
                  : wasInView.current
                  ? { opacity: 0, x: 0, y: 0, scale: 0.8, rotate: 0 }
                  : initial
              }
              transition={{ delay: 0.2 + index * 0.14, duration: 0.8, type: "spring", stiffness: 40, damping: 10 }}
              className="p-6 bg-[#1b1b22] border border-[#2d2d39] rounded-2xl shadow-lg will-change-transform"
              style={{
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
                overflow: "hidden",
              }}
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                {service.icon}
              </div>

              <h3
                className="service-title text-xl font-semibold mb-3"
                style={{ transition: "transform 0.2s ease-out", willChange: "transform" }}
              >
                {service.title}
              </h3>
              <p
                className="service-desc text-foreground/80 mb-6"
                style={{ transition: "transform 0.2s ease-out", willChange: "transform" }}
              >
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
