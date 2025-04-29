"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Send, Mail, MapPin, Phone, Loader2 } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const wasInView = useRef(false)

  useEffect(() => {
    if (isInView) {
      wasInView.current = true
    }
  }, [isInView])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [airplaneFly, setAirplaneFly] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const planeControls = useAnimation()
  const [pop, setPop] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: "Please fill out all required fields.",
      })
      setIsSubmitting(false)
      return
    }

    setPop(true)
    setTimeout(() => {
      setShowThankYou(true)
      setFormStatus({
        type: "success",
        message: "Thanks for your message! We'll get back to you soon.",
      })
      setFormData({ name: "", email: "", company: "", message: "" })
      setIsSubmitting(false)
      setPop(false)
    }, 700)
  }

  const planeVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
      rotate: 0,
    },
    launch: {
      opacity: [0, 1, 1, 0.8, 0],
      scale: [0, 1, 1, 0.9, 0.6],
      x: [0, 20, 50, 150, 300],
      y: [0, -20, -50, -100, -150],
      rotate: [-30, -30, -60, -45, -30],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="container mx-auto px-4 section-transition" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : wasInView.current ? { opacity: 0, x: 50 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Get in Touch
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your <span className="glimmer-text">Next Project</span>
            </h2>

            <p className="text-lg text-foreground/80 mb-8">
              Have a project in mind? Fill out the form and I'll get back to you as soon as possible to discuss how we
              can work together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="contact-icon">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:nexlayerstudio@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    nexlayerstudio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="contact-icon">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Atlanta, Georgia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="contact-icon">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Connect</h4>
                  <div className="flex flex-col">
                    <a
                      href="https://www.linkedin.com/in/jalen-stanberry"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a href="tel:4047934993" className="text-foreground/70 hover:text-primary transition-colors">
                      (404) 793-4993
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView ? { opacity: 1, x: 0 } : wasInView.current ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <form
                action="https://formspree.io/f/mjkwgroj"
                method="POST"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <div className="relative w-full flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-primary text-white font-medium transition-all send-button flex items-center justify-center gap-2 relative z-10"
                      style={{ minHeight: 48 }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
