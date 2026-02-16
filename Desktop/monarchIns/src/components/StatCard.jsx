import React, { useState, useEffect, useRef } from 'react'

const StatCard = ({ number, label, delay = 0 }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter()
            setHasAnimated(true)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [hasAnimated])

  const animateCounter = () => {
    const duration = 2000
    const increment = number / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= number) {
        setCount(number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
  }

  return (
    <div className="stat-card" ref={cardRef} style={{ animationDelay: `${delay}s` }}>
      <div className="stat-number">{count.toLocaleString()}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export default StatCard
