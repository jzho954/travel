import React,{useEffect} from 'react'

import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutImage from '../assets/vietnam1.jpg'
import ThaiImage1 from '../assets/thai5.png'
import ThaiImage2 from '../assets/thai6.png'
import Footer from '../components/Footer'
import CountryInfo from '../components/CountryInfo';
const Thailand = () => {

    const scrollToVideo = () => {
        const countryInfoElement = document.querySelector('.thai-info');
        if (countryInfoElement) {
          countryInfoElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <Navbar/>
    <Hero 
    cName="thai-hero"
    heroImage={AboutImage}
    title="Thailand"
    text={<span>Visited: Dec 28th 2023 - Feb 2nd 2024<br /> <span style={{ fontSize: '2rem' }}>🇹🇭</span></span>}
    url = "/thailand"
    scrollToVideo={scrollToVideo}
        showButton={true} 
    />

    <CountryInfo 
     className="thai-info"
     heading ="Thailand Dessert Review"
     videoUrl = "https://www.youtube.com/embed/YdrsGHKf7ag?si=KjQxA_pzWg4xZZ_f"
     videoTitle="thai dessert video"
     image1 = {ThaiImage1}
     image2 = {ThaiImage2}
    />

    <Footer />
    </>
  )
}

export default Thailand