import React from 'react'
import Hero from '../components/Hero'
import Insurance from '../components/Insurance'
import WhyChooseUs from '../components/WhyChooseUs'
import ProtectSection from '../components/ProtectSection'
import Reviews from '../components/Reviews'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <ProtectSection />
      <Insurance />
      <WhyChooseUs />
      <Reviews />
      <CTA />
      <Footer />
    </>
  )
}

export default Home
