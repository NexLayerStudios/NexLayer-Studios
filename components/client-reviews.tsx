"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Star } from "lucide-react"

export default function ClientReviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const wasInView = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dotsExpanded, setDotsExpanded] = useState(false)

  useEffect(() => {
    if (isInView) {
      wasInView.current = true
      if (!dotsExpanded) {
        setTimeout(() => {
          setDotsExpanded(true)
        }, 500)
      }
    }
  }, [isInView, dotsExpanded])

  const reviews = [
    {
      name: "Sarah T.",
      role: "Marketing Director",
      content:
        "Jalen made our website look incredible and the AI bot is a game changer! Our customer engagement has increased by 40% since implementation.",
      rating: 5,
    },
    {
      name: "Mike R.",
      role: "Startup Founder",
      content:
        "Fast, professional, and creative. Highly recommend NexLayer Studios! The AI solution they built has automated our customer support completely.",
      rating: 5,
    },
    {
      name: "David L.",
      role: "E-commerce Manager",
      content:
        "The process was smooth and the results exceeded our expectations. Our new website has significantly improved our conversion rates.",
      rating: 5,
    },
  ]

  const goToReview = (index: number) => {
    if (isAnimating || index === activeIndex) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="container mx-auto px-4 section-transition" ref={ref}>
      <div
        className={`max-w-3xl mx-auto text-center mb-16 ${isInView ? "section-animate-in visible" : wasInView.current ? "section-animate-out hidden" : "section-animate-in"}`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
          Client Reviews
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our <span className="glimmer-text">Clients</span> Say
        </h2>

        <p className="text-lg text-foreground/80">
          Don't just take our word for it. Here's what our clients have to say about working with NexLayer Studios.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto h-[300px] md:h-[250px]">
        <div className="relative h-full">
          {reviews.map((review, index) => {
            let position = "next"
            if (index === activeIndex) position = "active"
            else if (index === (activeIndex === 0 ? reviews.length - 1 : activeIndex - 1)) position = "prev"

            return (
              <div
                key={index}
                className={`review-card absolute top-0 left-0 right-0 p-8 ${position} transition-all duration-500 ${activeIndex !== index ? "opacity-50" : "opacity-100"}`}
                onClick={() => position !== "active" && goToReview(index)}
              >
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg mb-6 italic">"{review.content}"</p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-foreground/70">{review.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute -bottom-16 left-0 right-0 flex justify-center items-center">
          <div className="flex gap-3 items-center">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                initial={{ width: "8px" }}
                animate={{
                  width: dotsExpanded ? (activeIndex === index ? "24px" : "8px") : "8px",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => goToReview(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeIndex === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to review ${index + 1}`}
                disabled={isAnimating}
              ></motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
