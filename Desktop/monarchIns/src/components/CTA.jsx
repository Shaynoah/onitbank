import React, { useEffect, useRef, useState } from 'react'

const CTA = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const handleGetQuote = (e) => {
    e.preventDefault()
    const target = document.getElementById('contact')
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="container">
        <div className={`cta-content ${isVisible ? 'visible' : ''}`}>
          <div className="cta-background-pattern"></div>
          <div className="cta-text-content">
            <h2 className="cta-title">Ready to Get Protected?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers who trust Monarch Insurance for their protection needs. 
              Get a quote today and discover how we can safeguard what matters most to you.
            </p>
            <div className="cta-buttons">
              <a
                href="#contact"
                className="btn btn-primary cta-primary-button"
                onClick={handleGetQuote}
              >
                <span>Get a Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
              <a
                href="tel:0724635700"
                className="btn btn-secondary cta-secondary-button"
              >
                <span>Call Us Now</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
