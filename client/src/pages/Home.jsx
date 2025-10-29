import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'
import CompanySection from '../components/CompanySection'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Company Moving Section */}
      <CompanySection/>
      <AiTools/>
      <Testimonial />
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home
