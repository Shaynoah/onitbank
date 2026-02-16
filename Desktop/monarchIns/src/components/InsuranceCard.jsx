import React, { useEffect, useRef } from 'react'

const InsuranceCard = ({ image, title, description, onClick }) => {
  const cardRef = useRef(null)

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

    if (cardRef.current) {
      cardRef.current.classList.add('fade-in')
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="insurance-card clickable" 
      ref={cardRef}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.()
        }
      }}
    >
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
          <div className="card-image-overlay"></div>
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="card-link">Learn More →</span>
      </div>
    </div>
  )
}

export default InsuranceCard
