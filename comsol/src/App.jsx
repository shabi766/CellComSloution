import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import WhyOrbitoWorks from './Components/WhyOrbitoWorks'
import HowItWorks from './Components/HowItWorks'
import Overview from './Components/Overview'
import Features from './Components/Features'
import Benefits from './Components/Benefits'
import Testimonials from './Components/Testimonials'
import Faq from './Components/Faq'
import Footer from './Components/Footer'


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <WhyOrbitoWorks />
      <HowItWorks />
      <Overview />
      <Features />
      <Benefits />
      <Testimonials />
      <Faq />
      <Footer />

    </>
  )
}

export default App