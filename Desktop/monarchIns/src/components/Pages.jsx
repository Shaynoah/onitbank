import React, { useEffect, useRef } from 'react'

const Pages = () => {
  const pages = [
    {
      title: 'About Us',
      description: 'Learn about our mission, values, and commitment to protecting what matters most.'
    },
    {
      title: 'Claims',
      description: 'File a claim quickly and easily with our streamlined claims process.'
    },
    {
      title: 'Resources',
      description: 'Access helpful resources, guides, and tools to make informed decisions.'
    },
    {
      title: 'Support',
      description: 'Get the help you need with our dedicated customer support team.'
    }
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
    <section id="pages" className="pages-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Explore</span>
          <h2 className="section-title">Discover More</h2>
          <p className="section-description">
            Learn about our company, services, and how we can help protect what matters to you.
          </p>
        </div>
        <div className="pages-grid">
          {pages.map((page, index) => (
            <div
              key={index}
              className="page-card"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="page-card-content">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <a href="#" className="page-link">Explore →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pages
