import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import AboutImage from '../assets/contact.jpg'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className="hero-contact-wrapper">
      <Hero 
        cName="hero-contact"
        heroImage={AboutImage}
        title="Contact Me"
        
        
        url = "/countries"
        btnClass ="hide"
        />
        </div>
        
        <ContactForm />
        
      <Footer />
    </>
    
  )
}

export default Contact