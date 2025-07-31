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
import AboutUs from './Components/Aboutus'
import Aboutus from './Components/Aboutus'
import ServicesSection from './Components/ServiceSection'


function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Aboutus/>
      <WhyOrbitoWorks />
      <ServicesSection />
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