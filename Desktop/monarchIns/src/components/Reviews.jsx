import React, { useEffect, useRef, useState } from 'react'

const Reviews = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mwangi',
      role: 'Business Owner',
      rating: 5,
      text: "Monarch Insurance has been our trusted partner for over 10 years. Excellent service and peace of mind.",
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'James Ochieng',
      role: 'Family Man',
      rating: 5,
      text: "The life insurance policy has been a blessing. Smooth claims process and they truly care about customers.",
      image: '👨‍👩‍👧‍👦'
    },
    {
      id: 3,
      name: 'Mary Wanjiku',
      role: 'Professional',
      rating: 5,
      text: "Competitive rates and outstanding service. They make insurance simple and stress-free.",
      image: '👩‍💻'
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
    <section className="reviews-section" ref={sectionRef}>
      <div className="container">
        <div className={`reviews-header ${isVisible ? 'visible' : ''}`}>
          <span className="reviews-tag">TESTIMONIALS</span>
          <h2 className="reviews-title">What Our Customers Say</h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`review-card ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="review-header">
                <div className="review-avatar">
                  <span className="avatar-icon">{review.image}</span>
                </div>
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
              <div className="review-rating">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="review-quote-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
