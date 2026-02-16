import React, { useState } from 'react'
import WhatsAppBanner from './WhatsAppBanner'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We will get back to you within 24 hours.'
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' })
      }, 5000)
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleButtonClick = (e) => {
    const button = e.currentTarget
    const ripple = document.createElement('span')
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.classList.add('ripple')

    button.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }

  return (
    <section id="contact" className="contact-section-new">
      <div className="container">
        <div className="contact-layout-new">
          {/* Left Section - Contact Information */}
          <div className="contact-info-new">
            <h2 className="contact-heading-new">
              <span className="arrow-left">&gt;&gt;&gt;</span>
              <span className="heading-text">CONTACT US</span>
              <span className="arrow-right">&lt;&lt;&lt;</span>
            </h2>
            <p className="contact-main-message">
              Feel free to get in touch with our experts
            </p>
            
            {/* WhatsApp Banner */}
            <div className="contact-whatsapp-banner">
              <WhatsAppBanner />
            </div>
            
            <div className="contact-details-new">
              <div className="contact-phone-section">
                <div className="phone-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-phone-info">
                  <a href="tel:0724635700" className="phone-number">0724635700</a>
                  <span className="phone-separator"> / </span>
                  <a href="tel:0705426931" className="phone-number">0705426931</a>
                </div>
              </div>
              
              <div className="contact-email-section">
                <div className="email-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <a href="mailto:info@monarchinsurance.com" className="contact-email">
                  info@monarchinsurance.com
                </a>
              </div>
              
              <div className="contact-location-section">
                <div className="location-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <p className="contact-address">
                  Chester House 1st Floor, Koinange Street
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="contact-form-new">
            {formStatus.message && (
              <div className={`form-status-new ${formStatus.type}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {formStatus.type === 'success' ? (
                    <>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </>
                  )}
                </svg>
                <span>{formStatus.message}</span>
              </div>
            )}

            <form className="contact-form-new-form" onSubmit={handleSubmit}>
              <div className="form-row-new">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input-new"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input-new"
                />
              </div>
              
              <div className="form-row-new">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input-new"
                />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input-new"
                />
              </div>
              
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea-new"
              ></textarea>
              
              <button
                type="submit"
                className={`submit-btn-new ${isSubmitting ? 'submitting' : ''}`}
                onClick={handleButtonClick}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map-section-new">
          <div className="map-header-new">
            <h2>Find Us</h2>
            <p>Visit us at our office location</p>
          </div>
          <div className="contact-map-container-new">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8085!2d36.8214!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0x1c3e8b8c8b8c8b8c!2sKoinange%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1699123456789!5m2!1sen!2ske&q=Chester+House+Koinange+Street+Nairobi"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Monarch Insurance Location - Chester House, Koinange Street, Nairobi"
            ></iframe>
            <div className="map-info-overlay-new">
              <div className="map-info-content-new">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p className="map-address-title-new">Chester House 1st Floor</p>
                  <p className="map-address-new">Koinange Street, Nairobi, Kenya</p>
                </div>
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Chester+House+Koinange+Street+Nairobi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-directions-btn-new"
              >
                Get Directions
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
