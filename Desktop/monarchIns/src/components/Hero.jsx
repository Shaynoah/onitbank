import React, { useEffect, useRef, useState } from 'react'
import WhatsAppBanner from './WhatsAppBanner'
import heroBgImage1 from '../assets/closeup-unrecognizable-couple-signing-contract-with-financial-advisor.jpg'
import heroBgImage2 from '../assets/are-you-covered-healthcare-insurance-protection-concept.jpg'
import heroBgImage3 from '../assets/life-insurance-protection-beneficiary-safeguard-concept.jpg'

const Hero = () => {
  const shapeRefs = [useRef(null), useRef(null), useRef(null)]
  const heroRef = useRef(null)
  const bgImageRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLightBackground, setIsLightBackground] = useState(false)
  
  const heroImages = [heroBgImage1, heroBgImage2, heroBgImage3]
  
  // Determine if current background is light (white/light colored)
  // Image 2 (index 1) is the healthcare one which appears to be lighter
  useEffect(() => {
    setIsLightBackground(currentImageIndex === 1) // Healthcare image is lighter
  }, [currentImageIndex])

  // Auto-scroll through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroHeight = heroRef.current ? heroRef.current.offsetHeight : 0
      
      // Parallax effect for background image
      if (bgImageRef.current && scrolled < heroHeight) {
        const parallaxSpeed = 0.2
        bgImageRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      }
      
      // Floating shapes parallax
      shapeRefs.forEach((ref, index) => {
        if (ref.current) {
          const speed = 0.5 + (index * 0.1)
          ref.current.style.transform = `translateY(${scrolled * speed}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        {heroImages.map((image, index) => (
          <div
            key={index}
            ref={index === currentImageIndex ? bgImageRef : null}
            className={`hero-background-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="animated-shapes">
          <div className="shape shape-1" ref={shapeRefs[0]}></div>
          <div className="shape shape-2" ref={shapeRefs[1]}></div>
          <div className="shape shape-3" ref={shapeRefs[2]}></div>
        </div>
        <div className="hero-gradient-overlay"></div>
        <div className={`hero-dark-overlay ${isLightBackground ? 'light-bg' : ''}`}></div>
        <div className="hero-light-rays">
          <div className="light-ray ray-1"></div>
          <div className="light-ray ray-2"></div>
          <div className="light-ray ray-3"></div>
        </div>
        <div className="hero-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{ 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </div>
      <div className="hero-split-overlay"></div>
      <div className="hero-content">
        <div className="hero-left-content">
          <h1 className={`hero-title ${isLightBackground ? 'light-bg' : ''}`}>
            <span className="title-line-1">We provide a</span>
            <span className="title-line-2 highlight">higher level of cover</span>
          </h1>
          <p className={`hero-subtitle ${isLightBackground ? 'light-bg' : ''}`}>
            For over 45 years, we've prepared you for what's next in life.
            <br />
            <span className="subtitle-accent">It's our ambition to help you live yours.
              Protecting Your Future, Today.</span>
          </p>
          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn btn-primary btn-get-quote"
              onClick={handleGetQuote}
            >
              <span>Get a Quote</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <div className="hero-whatsapp-banner">
              <WhatsAppBanner />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
