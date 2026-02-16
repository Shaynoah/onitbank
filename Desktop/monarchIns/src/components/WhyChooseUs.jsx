import React, { useEffect, useRef, useState } from 'react'

const WhyChooseUs = () => {
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

  const benefits = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: '24/7 Support',
      description: 'Round-the-clock assistance whenever you need us.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Tailored Solutions',
      description: 'Customized insurance plans for your unique needs.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: 'Expert Advisors',
      description: 'Experienced professionals with deep industry knowledge.'
    }
  ]

  return (
    <section className="why-choose-us-section" ref={sectionRef}>
      <div className="container">
        <div className={`why-choose-us-content ${isVisible ? 'visible' : ''}`}>
          <div className="why-choose-us-header">
            <span className="why-choose-us-tag">WHY CHOOSE US</span>
            <h2 className="why-choose-us-title">
             
            </h2>
          </div>

          <div className="why-choose-us-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className={`why-choose-us-card ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon-wrapper">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
