import React, { useState, useRef, useEffect } from 'react'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [visibleItems, setVisibleItems] = useState([])
  const faqRefs = useRef([])

  const faqs = [
    {
      id: 1,
      question: 'What is General Insurance?',
      answer: 'General Insurance is essentially Non-Life Insurance. It offers protective coverage for assets other than life. Depending on the kind of asset insured, there are different kinds of General Insurance.'
    },
    {
      id: 2,
      question: 'Can I buy General Insurance online? And is it safe to do so?',
      answer: 'The advantages of buying insurance online include quicker and easier application, lower premiums and the ability to read the documentation first-hand.'
    },
    {
      id: 3,
      question: 'What is the eligibility criteria for purchasing General Insurance?',
      answer: 'The exact eligibility criteria for General Insurance depends on the kind of insurance you are looking for, the terms associated with the policy.'
    },
    {
      id: 4,
      question: 'Can I cancel my life insurances at any time?',
      answer: 'Yes. When you first buy a policy, you have 30 days from the day we tell you your policy will start, or the day you receive your policy documents (whichever is later) to change your mind. If you cancel during this 30 day cooling off period, we\'ll refund any premiums you\'ve already paid. You can still cancel your policy if the cooling-off period has finished, but we won\'t refund any premiums you\'ve already paid.'
    },
    {
      id: 5,
      question: 'Can I cancel my policy if I am not satisfied with its terms and conditions?',
      answer: 'Yes. Under life insurance policy this action must be taken within the first thirty days after receiving the policy document. In case you cancel the policy within the thirty days, you will be refunded the whole premium paid less withholding tax. Regarding general insurance business, cancellation of the policy will lead to a prorata refund of the premiums so far paid.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = faqRefs.current.indexOf(entry.target)
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index])
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="faqs" className="faqs-section">
      <div className="container">
        <div className="faqs-header">
          <h1 className="faqs-title">Frequently Asked Questions</h1>
          <div className="faqs-title-underline"></div>
          <p className="faqs-subtitle">
            Find answers to common questions about our insurance services
          </p>
        </div>

        <div className="faqs-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              ref={(el) => (faqRefs.current[index] = el)}
              className={`faq-item ${openIndex === index ? 'open' : ''} ${visibleItems.includes(index) ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-number">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="faq-question-text">{faq.question}</h3>
                <div className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faqs-footer">
          <p className="faqs-footer-text">
            Still have questions? <a href="/contact" className="faqs-contact-link">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQs
