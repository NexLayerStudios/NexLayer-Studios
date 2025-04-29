"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useInView({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setInView(isIntersecting)

        if (isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin },
    )

    observerRef.current = observer

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (observerRef.current && ref.current) {
        observerRef.current.unobserve(ref.current)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, inView }
}
