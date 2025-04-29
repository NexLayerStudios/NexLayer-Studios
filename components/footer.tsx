"use client"
import { ArrowUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="NexLayer Logo" width={48} height={48} className="object-contain" />
              </div>
              <span className="font-montserrat font-semibold text-xl tracking-tight">NexLayer</span>
            </div>
            <p className="text-foreground/70 max-w-md mb-6">
              Elevate your business' digital presence with NexLayer Studios
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/jalen-stanberry"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-foreground/80"></i>
              </a>
              <a
                href="mailto:nexlayerstudio@gmail.com"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                aria-label="Email"
              >
                <i className="fas fa-envelope text-foreground/80"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="text-foreground/70 hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-foreground/70 hover:text-primary transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} NexLayer Studios. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
