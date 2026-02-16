import React from 'react'

const Branches = () => {
  const branches = [
    {
      id: 'head-office',
      title: 'HEAD OFFICE',
      address: [
        'Headquarters Chester house 1st floor, Koinange Street',
        'P. O. Box 44003-00100 Nairobi GPO',
        'Nairobi, Kenya'
      ],
      phones: [
        '+254 (0) 20 4292 000',
        '+254 (0) 20 2338132/ 37',
        '+254 (0) 705 426 931',
        '+254 (0) 20 4292 100'
      ],
      email: 'info@monarchinsurance.co.ke',
      hours: 'Monday-Friday: 8.30am to 5.00pm, Saturdays: 9.00am to 1pm'
    },
    {
      id: 'westlands',
      title: 'WESTLANDS BRANCH',
      address: [
        'The Mall, 1st Floor',
        'P. O. Box 44003-00100 Nairobi GPO',
        'Nairobi, Kenya'
      ],
      phones: [
        '+254 (0) 20 4292 000',
        '+254 (0) 20 2338132/ 37',
        '+254 (0) 705 426 931',
        '+254 (0) 20 4292 100'
      ],
      email: 'info@monarchinsurance.co.ke',
      hours: 'Monday-Friday: 8.30am to 5.00pm, Saturdays: 9.00am to 1pm'
    },
    {
      id: 'mombasa',
      title: 'MOMBASA BRANCH',
      address: [
        'Jubilee Insurance Building, 3rd Floor',
        'P. O. Box 90585-80100, Mombasa',
        'Moi Avenue, Mombasa, Kenya'
      ],
      phones: [
        '+254 (0) 41 2318348',
        '+254 (0) 41 2318347'
      ],
      email: 'mombasa@monarchinsurance.co.ke',
      hours: 'Monday-Friday: 8.30am to 5.00pm, Saturdays: 9.00am to 1pm'
    }
  ]

  return (
    <section id="branches" className="branches-section">
      <div className="container">
        <div className="branches-header">
          <h1 className="branches-title">FIND YOUR LOCAL BRANCH</h1>
          <div className="branches-title-underline"></div>
        </div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <div key={branch.id} className="branch-card" style={{ '--delay': `${index * 0.1}s` }}>
              <div className="branch-header">
                <h2 className="branch-title">{branch.title}</h2>
              </div>
              
              <div className="branch-content">
                <div className="branch-info-group">
                  <div className="branch-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="branch-info-content">
                    <h3 className="branch-info-label">Address</h3>
                    <div className="branch-address-lines">
                      {branch.address.map((line, idx) => (
                        <p key={idx} className="branch-info-text">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="branch-info-group">
                  <div className="branch-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="branch-info-content">
                    <h3 className="branch-info-label">Phone Numbers</h3>
                    <div className="branch-phones-list">
                      {branch.phones.map((phone, idx) => (
                        <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="branch-info-link">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="branch-info-group">
                  <div className="branch-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="branch-info-content">
                    <h3 className="branch-info-label">Email</h3>
                    <a href={`mailto:${branch.email}`} className="branch-info-link">
                      {branch.email}
                    </a>
                  </div>
                </div>

                <div className="branch-info-group">
                  <div className="branch-info-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div className="branch-info-content">
                    <h3 className="branch-info-label">Operating Hours</h3>
                    <p className="branch-info-text">{branch.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Branches
