import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoImage from '../assets/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null)
  const navRef = useRef(null)
  const submenuTimeoutRef = useRef(null)
  const nestedSubmenuTimeoutRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { id: 'home', label: 'Home' },
    { 
      id: 'insurance', 
      label: 'Insurance',
      hasSubmenu: true,
      submenuItems: [
        { 
          id: 'life-insurance', 
          label: 'Life Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'group-cover',
              label: 'Group cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              )
            },
            {
              id: 'personal-cover',
              label: 'Personal cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              ),
              hasNestedSubmenu: true,
              nestedSubmenuItems: [
                {
                  id: 'education',
                  label: 'Education',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                    </svg>
                  )
                }
              ]
            }
          ]
        },
        { 
          id: 'general-insurance', 
          label: 'General Insurance',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
              <line x1="12" y1="22.08" x2="12" y2="12"/>
            </svg>
          ),
          hasNestedSubmenu: true,
          nestedSubmenuItems: [
            {
              id: 'accident-cover',
              label: 'Accident cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              )
            },
            {
              id: 'bond-cover',
              label: 'Bond Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="4" rx="1"/>
                  <path d="M12 8v13"/>
                  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/>
                  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>
                </svg>
              )
            },
            {
              id: 'domestic-cover',
              label: 'Domestic Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              )
            },
            {
              id: 'engineering-cover',
              label: 'Engineering Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              )
            },
            {
              id: 'fire-perils-cover',
              label: 'Fire & Perils Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1.5-2.5S8 8.38 8 7.5c0 .5.5 1 1 1.5s1 1 1 1.5c0 .5-.5 1-1 1.5s-1.5 1-1.5 2.5"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              )
            },
            {
              id: 'liability-cover',
              label: 'Liability Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              )
            },
            {
              id: 'marine-cover',
              label: 'Marine Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M3 18l2-10h14l2 10M3 18l-1 3h20l-1-3M9 12h6"/>
                </svg>
              )
            },
            {
              id: 'motor-commercial',
              label: 'Motor Commercial',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <path d="M12 15l-3-3 3-3 3 3z"/>
                  <path d="M12 12h7"/>
                </svg>
              )
            },
            {
              id: 'motor-private',
              label: 'Motor Private',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                  <path d="M12 15l-3-3 3-3 3 3z"/>
                </svg>
              )
            },
            {
              id: 'theft-cover',
              label: 'Theft Cover',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              )
            }
          ]
        }
      ]
    },
    { 
      id: 'pages', 
      label: 'Pages',
      hasSubmenu: true,
      submenuItems: [
        {
          id: 'about-us',
          label: 'About Us',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          )
        },
        {
          id: 'team',
          label: 'Team',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          )
        },
        {
          id: 'faqs',
          label: 'FAQs',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          )
        }
      ]
    },
    { id: 'contact', label: 'Contact' },
    { id: 'branches', label: 'Branches' },
    { id: 'careers', label: 'Careers' }
  ]

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
      const scrollY = window.pageYOffset

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
      }
    }

    if (openSubmenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openSubmenu])


  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    
    // Handle routing for contact, branches, careers, and about pages
    if (sectionId === 'contact') {
      navigate('/contact')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'branches') {
      navigate('/branches')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'about-us') {
      navigate('/about')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'faqs') {
      navigate('/faqs')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    if (sectionId === 'team') {
      navigate('/team')
      setIsMobileMenuOpen(false)
      setOpenSubmenu(null)
      setOpenNestedSubmenu(null)
      return
    }
    
    // Handle section scrolling for home page sections
    if (location.pathname !== '/') {
      navigate('/')
      // Wait for navigation, then scroll
      setTimeout(() => {
        const target = document.getElementById(sectionId)
        if (target) {
          const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80
          const offsetTop = target.offsetTop - navbarHeight
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: 'smooth'
          })
          setActiveSection(sectionId)
        }
      }, 100)
    } else {
      const target = document.getElementById(sectionId)
      if (target) {
        const navbarHeight = navRef.current ? navRef.current.offsetHeight : 80
        const offsetTop = target.offsetTop - navbarHeight
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        })
        setActiveSection(sectionId)
      }
    }
    
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
    setOpenNestedSubmenu(null)
  }

  const handleSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      setOpenSubmenu(openSubmenu === itemId ? null : itemId)
    }
  }

  const handleMouseEnterSubmenu = (itemId) => {
    if (window.innerWidth > 768) {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current)
      }
      setOpenSubmenu(itemId)
    }
  }

  const handleMouseLeaveSubmenu = () => {
    if (window.innerWidth > 768) {
      submenuTimeoutRef.current = setTimeout(() => {
        setOpenSubmenu(null)
        setOpenNestedSubmenu(null)
      }, 200)
    }
  }

  const handleNestedSubmenuToggle = (itemId, e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      e.stopPropagation()
      setOpenNestedSubmenu(openNestedSubmenu === itemId ? null : itemId)
    }
  }

  const handleMouseEnterNestedSubmenu = (itemId) => {
    if (window.innerWidth > 768) {
      if (nestedSubmenuTimeoutRef.current) {
        clearTimeout(nestedSubmenuTimeoutRef.current)
      }
      setOpenNestedSubmenu(itemId)
    }
  }

  const handleMouseLeaveNestedSubmenu = () => {
    if (window.innerWidth > 768) {
      nestedSubmenuTimeoutRef.current = setTimeout(() => {
        setOpenNestedSubmenu(null)
      }, 200)
    }
  }

  return (
    <nav 
      ref={navRef}
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}
    >
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-wrapper">
            <img src={logoImage} alt="Monarch Insurance Logo" className="logo-image" />
            <div className="logo-glow"></div>
            <div className="logo-shine"></div>
          </div>
        </Link>

        {/* Desktop Menu and Button Container */}
        <div className="nav-right-section">
          <ul className="nav-menu">
            {navItems.map((item, index) => (
            <li 
              key={item.id} 
              className={`nav-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => item.hasSubmenu && handleMouseEnterSubmenu(item.id)}
              onMouseLeave={() => item.hasSubmenu && handleMouseLeaveSubmenu()}
            >
              {item.id === 'contact' ? (
                <Link
                  to="/contact"
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setOpenSubmenu(null)
                    setOpenNestedSubmenu(null)
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-underline"></span>
                </Link>
              ) : item.id === 'branches' ? (
                <Link
                  to="/branches"
                  className={`nav-link ${location.pathname === '/branches' ? 'active' : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setOpenSubmenu(null)
                    setOpenNestedSubmenu(null)
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  <span className="nav-link-underline"></span>
                </Link>
              ) : (
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id && location.pathname === '/' ? 'active' : ''}`}
                  onClick={(e) => {
                    if (item.hasSubmenu) {
                      handleSubmenuToggle(item.id, e)
                    } else {
                      handleNavClick(e, item.id)
                    }
                  }}
                >
                  <span className="nav-link-text">{item.label}</span>
                  {item.hasSubmenu && (
                    <span className={`nav-arrow ${openSubmenu === item.id ? 'open' : ''}`}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  )}
                  <span className="nav-link-underline"></span>
                </a>
              )}

              {/* Submenu */}
              {item.hasSubmenu && (
                <div 
                  className={`nav-submenu ${openSubmenu === item.id ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnterSubmenu(item.id)}
                  onMouseLeave={handleMouseLeaveSubmenu}
                >
                  <div className="submenu-content">
                    {item.submenuItems.map((subItem, subIndex) => (
                      <div
                        key={subItem.id}
                        className={`submenu-item-wrapper ${subItem.hasNestedSubmenu ? 'has-nested' : ''}`}
                        onMouseEnter={() => subItem.hasNestedSubmenu && handleMouseEnterNestedSubmenu(subItem.id)}
                        onMouseLeave={() => {
                          if (subItem.hasNestedSubmenu && window.innerWidth > 768) {
                            handleMouseLeaveNestedSubmenu()
                          }
                        }}
                      >
                        <a
                          href={`#${subItem.id}`}
                          className="submenu-item"
                          onClick={(e) => {
                            if (subItem.hasNestedSubmenu) {
                              handleNestedSubmenuToggle(subItem.id, e)
                            } else {
                              e.preventDefault()
                              handleNavClick(e, subItem.id)
                            }
                          }}
                          style={{ '--delay': `${subIndex * 0.1}s` }}
                        >
                          <div className="submenu-icon">{subItem.icon}</div>
                          <div className="submenu-text">
                            <span className="submenu-title">{subItem.label}</span>
                          </div>
                          {subItem.hasNestedSubmenu ? (
                            <div className={`submenu-nested-arrow ${openNestedSubmenu === subItem.id ? 'open' : ''}`}>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </div>
                          ) : (
                            <div className="submenu-arrow">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </div>
                          )}
                        </a>

                        {/* Nested Submenu - Staircase Design */}
                        {subItem.hasNestedSubmenu && (
                          <div 
                            className={`nested-submenu-staircase ${openNestedSubmenu === subItem.id ? 'open' : ''}`}
                            onMouseEnter={() => subItem.hasNestedSubmenu && handleMouseEnterNestedSubmenu(subItem.id)}
                            onMouseLeave={() => subItem.hasNestedSubmenu && handleMouseLeaveNestedSubmenu()}
                          >
                            <div className={`staircase-content ${subItem.id === 'general-insurance' ? 'scrollable' : ''}`}>
                              {subItem.nestedSubmenuItems.map((nestedItem, nestedIndex) => (
                                <div
                                  key={nestedItem.id}
                                  className="staircase-item-wrapper"
                                  onMouseEnter={() => nestedItem.hasNestedSubmenu && handleMouseEnterNestedSubmenu(nestedItem.id)}
                                  onMouseLeave={() => nestedItem.hasNestedSubmenu && handleMouseLeaveNestedSubmenu()}
                                >
                                  <a
                                    href="#insurance"
                                    className="staircase-item level-2"
                                    onClick={(e) => {
                                      if (nestedItem.hasNestedSubmenu) {
                                        handleNestedSubmenuToggle(nestedItem.id, e)
                                      } else {
                                        e.preventDefault()
                                        handleNavClick(e, 'insurance')
                                      }
                                    }}
                                    style={{ '--stair-delay': `${nestedIndex * 0.1}s` }}
                                  >
                                    <div className="staircase-icon">{nestedItem.icon}</div>
                                    <div className="staircase-text">
                                      <span className="staircase-title">{nestedItem.label}</span>
                                    </div>
                                    {nestedItem.hasNestedSubmenu && (
                                      <div className={`staircase-arrow ${openNestedSubmenu === nestedItem.id ? 'open' : ''}`}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                          <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                      </div>
                                    )}
                                  </a>

                                  {/* Third Level Submenu (Education) - Staircase */}
                                  {nestedItem.hasNestedSubmenu && (
                                    <div 
                                      className={`staircase-submenu level-3 ${openNestedSubmenu === nestedItem.id ? 'open' : ''}`}
                                      onMouseEnter={() => handleMouseEnterNestedSubmenu(nestedItem.id)}
                                      onMouseLeave={handleMouseLeaveNestedSubmenu}
                                    >
                                      <div className="staircase-content level-3-content">
                                        {nestedItem.nestedSubmenuItems.map((thirdLevelItem, thirdIndex) => (
                                          <a
                                            key={thirdLevelItem.id}
                                            href="#insurance"
                                            className="staircase-item level-3"
                                            onClick={(e) => {
                                              e.preventDefault()
                                              handleNavClick(e, 'insurance')
                                            }}
                                            style={{ '--stair-delay': `${thirdIndex * 0.1}s` }}
                                          >
                                            <div className="staircase-icon">{thirdLevelItem.icon}</div>
                                            <div className="staircase-text">
                                              <span className="staircase-title">{thirdLevelItem.label}</span>
                                            </div>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
          </ul>

          {/* GET A QUOTE Button */}
          <a
          href="#contact"
          className="nav-quote-button"
          onClick={(e) => {
            e.preventDefault()
            const target = document.getElementById('contact')
            if (target) {
              const offsetTop = target.offsetTop - 80
              window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
              })
            } else if (location.pathname !== '/contact') {
              navigate('/contact')
            }
            setIsMobileMenuOpen(false)
            setOpenSubmenu(null)
            setOpenNestedSubmenu(null)
          }}
        >
          <span>GET A QUOTE</span>
        </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
