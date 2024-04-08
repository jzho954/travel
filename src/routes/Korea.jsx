import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutImage from '../assets/korea1.jpg'
import KoreaImage1 from '../assets/korea2.jpg'
import KoreaImage2 from '../assets/korea4.jpg'
import KoreaImage3 from '../assets/korea5.jpg'
import Footer from '../components/Footer'
import CountryInfo from '../components/CountryInfo';

const Korea = () => {
    const scrollToVideo = () => {
        const countryInfoElement = document.querySelector('.korea-info');
        if (countryInfoElement) {
          countryInfoElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const {location} = useLocation();

      useEffect(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 0);
      }, [location]);
  return (
    <>
    <Navbar/>
    <Hero 
    cName="korea-hero"
    heroImage={AboutImage}
    title="Korea"
    text={<span>Visited: Feb 18th 2024 - March 3rd 2024<br /> <span style={{ fontSize: '2rem' }}>🇰🇷</span></span>}
    url = "/korea"
    scrollToVideo={scrollToVideo}
        showButton={true} 
    />

    <CountryInfo 
     className="korea-info"
     heading ="Don't have any good videos of Korea, so here is a song I listened to a lot when I was in Korea instead lol"
     videoUrl = "https://www.youtube.com/embed/doLMt10ytHY?si=wx6DoXlEJhyhkmru"
     videoTitle="korea video"
     image1 = {KoreaImage1}
     image2 = {KoreaImage2}
     image3 = {KoreaImage3}
    />

    <Footer />
    </>
  )
}

export default Korea