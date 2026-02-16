import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRefs = useRef([])

  const coreValues = [
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      label: 'Professionalism',
      description: 'Maintaining the highest standards in all our operations'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      ),
      label: 'Integrity',
      description: 'Honest and transparent in all our dealings'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      label: 'Team Spirit',
      description: 'Collaboration and unity drive our success'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      label: 'Quality Customer Care',
      description: 'Putting our customers at the heart of everything we do'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      label: 'Responsible Citizenship',
      description: 'Contributing positively to our communities'
    },
    { 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      label: 'Recognition and Respect for Diversity',
      description: 'Embracing differences and fostering inclusion'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="about" className="about-section-modern">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero-section">
          <div className="about-hero-content">
            <div className="about-intro-text">
              <p className="about-founding-text">
                Founded in 1979, Monarch is an Insurance powerhouse that prides itself.
              </p>
            </div>
            
            <h1 className="about-main-heading">
              <span className="heading-line-1">Protecting You</span>
              <span className="heading-line-2">Is Our Business</span>
            </h1>
            
            <p className="about-description-text">
              Since 1979, the Monarch Insurance Company has been serving policyholders – 
              protecting businesses, mitigating losses, defending claims.
            </p>
          </div>
        </div>

        {/* Mission, Vision & Core Values Section */}
        <div className="about-mv-values-section">
          {/* Mission & Vision */}
          <div className="mission-vision-container">
            <div 
              className="mission-card"
              ref={(el) => (sectionRefs.current[0] = el)}
            >
              <div className="mv-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h2 className="mv-title">Our Mission</h2>
              <p className="mv-description">
                A one Stop provider for innovative, unique, and affordable products and services 
                that exceed our customers' expectations
              </p>
            </div>

            <div 
              className="vision-card"
              ref={(el) => (sectionRefs.current[1] = el)}
            >
              <div className="mv-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h2 className="mv-title">Our Vision</h2>
              <p className="mv-description">
                To be a World Class Insurer of Choice
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div 
            className="core-values-section"
            ref={(el) => (sectionRefs.current[2] = el)}
          >
            <div className="values-header">
              <h2 className="values-title">Our Core Values</h2>
              <p className="values-subtitle">The principles that guide everything we do</p>
            </div>
            
            <div className="values-grid">
              {coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className="value-card"
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3 className="value-label">{value.label}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet Our Team Button */}
        <div className="about-team-button-section">
          <Link to="/team" className="btn-meet-team">
            <span>Meet Our Team</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
