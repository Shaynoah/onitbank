import React, { useEffect, useRef, useState } from 'react'
import protectImage1 from '../assets/jamie-street-JtP_Dqtz6D8-unsplash.jpg'
import protectImage2 from '../assets/derek-thomson-M1jCmRxO7cY-unsplash.jpg'
import protectImage3 from '../assets/natalya-zaritskaya-SIOdjcYotms-unsplash.jpg'

const ProtectSection = () => {
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

  return (
    <section className="protect-section" ref={sectionRef}>
      <div className="container">
        <div className={`protect-layout ${isVisible ? 'visible' : ''}`}>
          <div className="protect-content">
            <div className="protect-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h2 className="protect-title">Protect what you love</h2>
            <p className="protect-description">
              The Monarch Insurance company Ltd is an all-Kenyan insurance company registered in the republic of Kenya. 
              For over 45 years, it has curved its market niche as a composite insurer with excellent services in 
              underwriting both general and life insurance policies. We have grown from strength to strength due to 
              out of the box tailor made products for a whole array of customers.
            </p>
            <div className="protect-button-wrapper">
              <a
                href="#contact"
                className="btn btn-primary protect-quote-button"
                onClick={(e) => {
                  e.preventDefault()
                  const target = document.getElementById('contact')
                  if (target) {
                    const offsetTop = target.offsetTop - 80
                    window.scrollTo({
                      top: offsetTop,
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                <span>Get a Quote</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="protect-images">
            <div className="protect-image-card image-card-1">
              <img src={protectImage1} alt="Protection" />
              <div className="image-overlay"></div>
            </div>
            <div className="protect-image-card image-card-2">
              <img src={protectImage2} alt="Security" />
              <div className="image-overlay"></div>
            </div>
            <div className="protect-image-card image-card-3">
              <img src={protectImage3} alt="Care" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProtectSection
