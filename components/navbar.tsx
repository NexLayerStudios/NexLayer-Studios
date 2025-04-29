"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"

interface NavbarProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export default function Navbar({ activeSection, onSectionClick }: NavbarProps) {
  const [indicatorPosition, setIndicatorPosition] = useState(0)
  const [indicatorWidth, setIndicatorWidth] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "process", label: "Process" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ]

  // Move indicator to the correct button based on active section index
  const moveIndicatorToIndex = (idx: number) => {
    if (navRef.current) {
      const navItemsEls = navRef.current.querySelectorAll('button')
      const activeItem = navItemsEls[idx]
      if (activeItem) {
        const itemRect = activeItem.getBoundingClientRect()
        const navRect = navRef.current.getBoundingClientRect()
        setIndicatorPosition(itemRect.left - navRect.left)
        setIndicatorWidth(itemRect.width)
      }
    }
  }

  // On scroll, update indicator to the section closest to the center of the viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const viewportCenter = window.innerHeight / 2
      let minDistance = Infinity
      let activeIndex = 0
      for (let i = 0; i < sections.length; i++) {
        const el = sections[i]
        if (el) {
          const rect = el.getBoundingClientRect()
          const sectionCenter = (rect.top + rect.bottom) / 2
          const distance = Math.abs(sectionCenter - viewportCenter)
          if (distance < minDistance) {
            minDistance = distance
            activeIndex = i
          }
        }
      }
      moveIndicatorToIndex(activeIndex)
    }
    window.addEventListener('scroll', handleScroll)
    // Set on mount
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On nav button click, scroll and animate indicator
  const handleNavClick = (id: string) => {
    const idx = navItems.findIndex(item => item.id === id)
    moveIndicatorToIndex(idx)
    onSectionClick(id)
  }

  return (
    <>
      <nav
        className={
          `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-background/80 backdrop-blur-lg`
        }
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image src="/images/logo.png" alt="NexLayer Logo" width={64} height={64} className="object-contain" />
            </div>
            <span className="font-montserrat font-semibold text-xl md:text-2xl tracking-tight group-hover:text-primary transition-colors">NexLayer</span>
          </a>

          <div ref={navRef} className="hidden md:flex items-center gap-8 relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                {item.label}
              </button>
            ))}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-primary"
              initial={{ width: 0 }}
              animate={{ 
                width: indicatorWidth,
                x: indicatorPosition
              }}
              transition={{ 
                type: "tween",
                duration: 0.45,
                ease: "easeInOut"
              }}
            />
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-foreground" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-card shadow-xl flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/images/logo.png"
                      alt="NexLayer Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-montserrat font-bold text-lg">NexLayer</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="text-foreground" aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col p-4 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      handleNavClick(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className="py-2 text-left text-lg font-medium transition-colors hover:text-primary text-foreground/80"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
