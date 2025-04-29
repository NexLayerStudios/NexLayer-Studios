"use client"

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Process from "@/components/process"
import ClientReviews from "@/components/client-reviews"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Loader2 } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [videoOpacity, setVideoOpacity] = useState(1)
  const [videoFadeIn, setVideoFadeIn] = useState(0)

  // Refs for each section
  const heroRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const reviewsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Reduced loading time

    return () => clearTimeout(timer)
  }, [])

  // Fade in video on mount
  useEffect(() => {
    // Animate fade-in after mount
    const timeout = setTimeout(() => setVideoFadeIn(1), 100); // 100ms delay for effect
    return () => clearTimeout(timeout);
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sections = [
        { ref: heroRef, id: "hero" },
        { ref: servicesRef, id: "services" },
        { ref: aboutRef, id: "about" },
        { ref: processRef, id: "process" },
        { ref: reviewsRef, id: "reviews" },
        { ref: contactRef, id: "contact" },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section.id)
            break
          }
        }
      }

      const fadeStart = 0;
      const fadeEnd = 400; // px after which video is fully faded out
      let opacity = 1;
      if (scrollY > fadeStart) {
        opacity = 1 - Math.min((scrollY - fadeStart) / (fadeEnd - fadeStart), 1);
      }
      setVideoOpacity(opacity);
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const isMobile = window.innerWidth < 768;
      const offset = isMobile ? 40 : 80;
      // Special handling for contact section to ensure it's fully visible
      if (sectionId === 'contact') {
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth"
        })
        setActiveSection('contact') // Force set active section to contact
      } else {
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth"
        })
      }
    }
  }

  // Always start at the top on refresh
  useEffect(() => {
    window.history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        {/* Animated blurred gradient background */}
        <div className="absolute inset-0 w-full h-full animate-gradient-move bg-gradient-to-br from-[#9c4ef7] via-[#3c48ff] to-[#1e1a33] opacity-80 blur-xl z-0" />
        <div className="flex flex-col items-center gap-8 relative z-10">
          {/* Animated logo with glimmer */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="NexLayer Logo"
              width={144}
              height={144}
              className="w-full h-full object-contain animate-fade-in"
            />
            {/* Glowing animated ring */}
            <span className="absolute inset-0 rounded-full border-4 border-primary/40 animate-glow-ring"></span>
          </div>
          {/* Glimmer text below logo */}
          <span className="glimmer-text text-2xl font-bold tracking-wide animate-fade-in-slow">NexLayer Studios</span>
        </div>
        <style jsx global>{`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 3.5s ease-in-out infinite;
          }
          @keyframes glow-ring {
            0%, 100% { box-shadow: 0 0 0 0 rgba(156, 78, 247, 0.5), 0 0 32px 8px rgba(60, 72, 255, 0.18); }
            50% { box-shadow: 0 0 32px 12px rgba(156, 78, 247, 0.7), 0 0 48px 16px rgba(60, 72, 255, 0.25); }
          }
          .animate-glow-ring {
            animation: glow-ring 1.8s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
          }
          .animate-fade-in-slow {
            animation: fade-in 1.4s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        `}</style>
      </div>
    )
  }

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Video Background with fade and solid color */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full bg-background" />
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            opacity: videoOpacity * videoFadeIn,
            transition: 'opacity 1.2s cubic-bezier(0.4,0,0.2,1)'
          }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/motion-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay content above video */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} onSectionClick={scrollToSection} />

        <section id="hero" ref={heroRef} className="min-h-screen pb-48">
          <Hero />
        </section>

        <section id="services" ref={servicesRef} className="py-48 section-transition">
          <Services />
        </section>

        <section id="about" ref={aboutRef} className="py-48 section-transition">
          <About />
        </section>

        <section id="process" ref={processRef} className="py-24 md:py-56 section-transition">
          <Process />
        </section>

        <section id="reviews" ref={reviewsRef} className="py-24 md:py-56 section-transition">
          <ClientReviews />
        </section>

        <section id="contact" ref={contactRef} className="py-48 section-transition">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  )
}
