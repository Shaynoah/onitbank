import React, { useEffect, useRef } from 'react'

const Careers = () => {
  const benefits = [
    {
      title: 'Competitive Benefits',
      description: 'Comprehensive health, dental, and retirement plans'
    },
    {
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    },
    {
      title: 'Innovative Culture',
      description: 'Be part of a forward-thinking insurance company'
    }
  ]

  const jobOpenings = [
    { title: 'Senior Insurance Advisor', type: 'Full-time • Remote', badge: 'New' },
    { title: 'Claims Specialist', type: 'Full-time • Hybrid' },
    { title: 'Customer Success Manager', type: 'Full-time • On-site' }
  ]

  const cardRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add('fade-in')
        observer.observe(card)
      }
    })

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          observer.unobserve(card)
        }
      })
    }
  }, [])

  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Join Our Team</span>
          <h2 className="section-title">Build Your Career With Us</h2>
          <p className="section-description">
            We're always looking for talented individuals to join our growing team.
          </p>
        </div>
        <div className="careers-content">
          <div className="careers-text">
            <h3>Why Work at Monarch Insurance?</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a href="#" className="btn btn-primary">View Open Positions</a>
          </div>
          <div className="careers-visual">
            <div className="career-card-animated">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="career-card"
                  ref={(el) => (cardRefs.current[index] = el)}
                >
                  <h4>{job.title}</h4>
                  <p>{job.type}</p>
                  {job.badge && <span className="career-badge">{job.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Careers
