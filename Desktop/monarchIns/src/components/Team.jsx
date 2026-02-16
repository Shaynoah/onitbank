import React, { useEffect, useRef, useState } from 'react'
// Import team member images here
// Example:
// import mosesGatunduImage from '../assets/team/moses-gatundu.jpg'
// import stephenRobiaImage from '../assets/team/stephen-robia.jpg'
// Add more imports as needed

const Team = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: 'MOSES GATUNDU',
      role: 'CEO & Principal Officer',
      department: 'Executive',
      image: null, // Placeholder - will be replaced with actual image
      bio: 'CEO & Principal Officer',
      experience: 'Moses is a detail-oriented accountant with over thirty (30) years\' experience with wide knowledge of accounting and finance in the Insurance Industry.',
      education: 'Moses holds a Bachelor of Science (Bsc.) Business Administration from the United States International University (USIU).',
      professionalQualifications: 'He is a qualified accountant and a member of the Institute of Certified Public Accountants of Kenya (ICPAK).',
      furtherTraining: 'He also undertook the Senior Managers Leadership Programme (MSLP) at Strathmore University amongst other courses.',
      email: 'moses.gatundu@monarchinsurance.co.ke',
      phone: '+254 724 635 700'
    },
    {
      id: 7,
      name: 'STEPHEN ROBIA',
      role: 'ICT Manager',
      department: 'Information Technology',
      image: null, // Replace with: stephenRobiaImage (after importing above)
      bio: 'ICT Manager',
      experience: 'A seasoned professional with over 8 years of experience in the banking and insurance industries.',
      education: 'He holds a Bsc. in Information Technology and a Bsc. Business Studies. Currently, he is pursuing a Master of Science in Artificial Intelligence and Machine Learning & A masters in Sustainable Development.',
      professionalQualifications: 'His extensive qualifications include a Diploma in Information Technology, Certified Ethical Hacker (CEH), Computer Hacking Forensic Investigator (CHFI), ISO 27001 certification, and a thorough understanding of the General Data Protection Regulation (GDPR). Additionally, he is certified in ISC2\'s Cybersecurity, holds a Certified IT Professional (CPIT) designation, and is a Cisco Certified Network Associate (CCNA).',
      furtherTraining: 'His credentials further extend to NSE 3, Network Defense Essentials (NDE), Financial Crime Fundamentals (FCFC), Digital Forensics Essentials (DFE), and Climate resilient Infrastructure Officer.',
      email: 'stephen.robia@monarchinsurance.co.ke',
      phone: '+254 724 635 706'
    },
    {
      id: 8,
      name: 'BRIDGIT KAMAU',
      role: 'Claims Manager',
      department: 'Claims',
      image: null,
      bio: 'Claims Manager',
      experience: 'Bridgit Kamau is a highly reliable professional with over ten (10) years\' experience in the Insurance Industry in Claims.',
      education: 'She holds an Economics Degree from the Egerton University, Diploma in Insurance from the College of Insurance as well as certification in Leadership from Strathmore Business school.',
      professionalQualifications: 'She is an Associate of the Institute of Insurance (AIIK).',
      furtherTraining: 'She is currently enrolled at The Chartered Institute of Loss Adjusting undertaking a Diploma in Loss Adjusting.',
      email: 'bridgit.kamau@monarchinsurance.co.ke',
      phone: '+254 724 635 707'
    },
    {
      id: 9,
      name: 'ROSEMARY GACERI',
      role: 'Legal Services Manager',
      department: 'Legal',
      image: null, // Replace with: rosemaryGaceriImage (after importing above)
      bio: 'Legal Services Manager',
      experience: 'Rosemary is a dedicated, detail-oriented and highly skilled professional lawyer with over ten (10) years\' experience in a wide variety of legal areas.',
      education: 'She holds a Bachelor of Laws Degree (LL.B) Hons and Master of Laws (LL.M) in International and Commercial Law (World Trade Specialist), both from the University of Buckingham and a Diploma in Law from the Kenya School of Law.',
      professionalQualifications: 'She is an advocate of the High Court of Kenya.',
      furtherTraining: 'She also holds Certificates in Introduction to; Corporate Finance, Financial Accounting, Marketing and Operations Management from Wharton – University of Pennsylvania.',
      email: 'rosemary.gaceri@monarchinsurance.co.ke',
      phone: '+254 724 635 708'
    },
    {
      id: 10,
      name: 'LUKE MUNENE',
      role: 'Underwriting Manager',
      department: 'Underwriting',
      image: null, // Replace with: lukeMuneneImage (after importing above)
      bio: 'Underwriting Manager',
      experience: 'Luke is an aspiring Actuary of the society of the Actuaries and the Actuarial Society of Kenya with over ten (10) years\' experience in the Insurance Industry.',
      education: 'He holds a Bachelor of Science degree in Actuarial science from Jomo Kenyatta University of Agriculture and Technology and is also an Alumni of the Young Insurance professionals\' program where he emerged among the top students in the African Continent.',
      professionalQualifications: 'He is an aspiring Actuary of the society of the Actuaries and the Actuarial Society of Kenya.',
      furtherTraining: 'He is also a trained ESG specialist and has contributed to key developments in the sustainability and climate risks insurance space.',
      email: 'luke.munene@monarchinsurance.co.ke',
      phone: '+254 724 635 709'
    },
    {
      id: 11,
      name: 'JACKLINE KIBERENGE',
      role: 'Head of Finance',
      department: 'Finance',
      image: null, // Replace with: jacklineKiberengeImage (after importing above)
      bio: 'Head of Finance',
      experience: '',
      education: '',
      professionalQualifications: '',
      furtherTraining: '',
      email: 'jackline.kiberenge@monarchinsurance.co.ke',
      phone: '+254 724 635 710'
    },
    {
      id: 12,
      name: 'JOHN NDEGWA',
      role: 'Life and Pensions Manager',
      department: 'Life Insurance',
      image: null, // Replace with: johnNdegwaImage (after importing above)
      bio: 'Life and Pensions Manager',
      experience: '',
      education: '',
      professionalQualifications: '',
      furtherTraining: '',
      email: 'john.ndegwa@monarchinsurance.co.ke',
      phone: '+254 724 635 711'
    }
  ]

  const openModal = (member) => {
    setSelectedMember(member)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedMember(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedMember) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedMember])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
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
    <section className="team-section" ref={sectionRef}>
      <div className="container">
        <div className={`team-header ${isVisible ? 'visible' : ''}`}>
          <div className="team-header-layout">
            <div className="team-header-left">
              <h1 className="team-title">
                <span className="title-line-1">MEET OUR SENIOR</span>
                <span className="title-line-2">MANAGEMENT</span>
              </h1>
              <div className="team-title-separator"></div>
            </div>
            <div className="team-header-right">
              <p className="team-subtitle">
                The quality of our leadership is fundamental to the growth and success of our business and we are committed to investing in the development of our senior management and potential future managers.
              </p>
            </div>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`team-card ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="team-card-inner">
                <div 
                  className="team-image-wrapper"
                  onClick={() => openModal(member)}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-member-image" />
                  ) : (
                    <div className="team-image-placeholder">
                      <span className="placeholder-icon">👤</span>
                    </div>
                  )}
                  <div className="team-image-overlay">
                    <span className="view-bio-text">View Bio</span>
                  </div>
                </div>
                <div className="team-card-content">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                </div>
                <div className="team-card-background"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="team-modal-close" onClick={closeModal} aria-label="Close modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="team-modal-content">
              <div className="team-modal-image-section">
                {selectedMember.image ? (
                  <img src={selectedMember.image} alt={selectedMember.name} className="team-modal-image" />
                ) : (
                  <div className="team-modal-image-placeholder">
                    <span className="modal-placeholder-icon">👤</span>
                  </div>
                )}
              </div>
              <div className="team-modal-info">
                <div className="team-modal-header">
                  <h2 className="team-modal-name">{selectedMember.name}</h2>
                  <div className="team-modal-role-bar">
                    <span className="team-modal-role-text">{selectedMember.role}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>
                <div className="team-modal-bio-content">
                  {selectedMember.experience && (
                    <div className="team-modal-bio-section">
                      <strong>Experience:</strong> {selectedMember.experience}
                    </div>
                  )}
                  {selectedMember.education && (
                    <div className="team-modal-bio-section">
                      <strong>Education:</strong> {selectedMember.education}
                    </div>
                  )}
                  {selectedMember.professionalQualifications && (
                    <div className="team-modal-bio-section">
                      <strong>Professional Qualifications:</strong> {selectedMember.professionalQualifications}
                    </div>
                  )}
                  {selectedMember.furtherTraining && (
                    <div className="team-modal-bio-section">
                      <strong>Further Training:</strong> {selectedMember.furtherTraining}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Team
