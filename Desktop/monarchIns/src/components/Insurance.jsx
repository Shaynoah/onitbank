import React, { useEffect, useRef, useState } from 'react'
import InsuranceCard from './InsuranceCard'
import lifeInsuranceImage from '../assets/life-insurance-protection-beneficiary-safeguard-concept.jpg'
import generalInsuranceImage from '../assets/closeup-unrecognizable-couple-signing-contract-with-financial-advisor.jpg'

const Insurance = () => {
  const discoverRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const insuranceTypes = [
    {
      id: 'life',
      image: lifeInsuranceImage,
      title: 'Life Insurance',
      description: "Secure your family's future with comprehensive life insurance coverage tailored to your needs. Protect your loved ones with reliable life insurance policies.",
      link: '/life-insurance'
    },
    {
      id: 'general',
      image: generalInsuranceImage,
      title: 'General Insurance',
      description: 'Comprehensive coverage for your assets including motor, property, health, and business insurance. Tailored solutions to meet all your insurance needs.',
      link: '/general-insurance'
    }
  ]

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

    if (discoverRef.current) {
      observer.observe(discoverRef.current)
    }

    return () => {
      if (discoverRef.current) {
        observer.unobserve(discoverRef.current)
      }
    }
  }, [])

  const handleCardClick = (link) => {
    // You can navigate to a specific page or scroll to a section
    // For now, we'll just scroll to contact section
    const target = document.getElementById('contact')
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const handleDiscoverClick = () => {
    // Scroll to insurance section or navigate to a page
    const target = document.getElementById('insurance')
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="insurance" className="insurance-section">
      <div className="container">
        <div className="services-header-layout">
          <div className="services-header-left">
            <span className="services-tag">OUR SERVICES</span>
            <h2 className="services-title">
              <span className="title-line-1">We offer a wide range of</span>
              <span className="title-line-2">insurance products.</span>
            </h2>
          </div>
          <div className="services-header-right">
            <p className="services-description">
              We provide a diverse range of insurance products, from comprehensive medical coverage to PSV, private, and commercial insurances, tailored to meet every customer's unique needs.
            </p>
          </div>
        </div>
        <div className="insurance-grid">
          {insuranceTypes.map((insurance) => (
            <InsuranceCard 
              key={insurance.id} 
              {...insurance} 
              onClick={() => handleCardClick(insurance.link)}
            />
          ))}
        </div>

        <div 
          ref={discoverRef}
          className={`discover-services ${isVisible ? 'visible' : ''}`}
        >
          <button 
            className="discover-button"
            onClick={handleDiscoverClick}
            aria-label="Discover more services"
          >
            <span className="button-text">Discover More Services</span>
            <span className="button-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
            <span className="button-shine"></span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Insurance
