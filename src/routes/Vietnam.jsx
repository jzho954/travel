import React,{useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero'
import Navbar from '../components/Navbar';
import AboutImage from '../assets/vietnam1.jpg'
import VietImage1 from '../assets/viet5.png'
import VietImage2 from '../assets/viet6.png'
import Footer from '../components/Footer'
import CountryInfo from '../components/CountryInfo';

const Vietnam = () => {

    const scrollToVideo = () => {
        const countryInfoElement = document.querySelector('.vietnam-info');
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
    cName="vietnam-hero"
    heroImage={AboutImage}
    title="Vietnam"
    text={<span>Visited: Feb 3rd 2024 - Feb 14th 2024<br /> <span style={{ fontSize: '2rem' }}>🇻🇳</span></span>}
    url = "/vietnam"
    scrollToVideo={scrollToVideo}
        showButton={true} // Show the button only on Vietnam route
    />

    <CountryInfo 
     className="vietnam-info"
     heading ="Vietnam Pho Review"
     videoUrl = "https://www.youtube.com/embed/RTpqKirwiH0?si=B4l31ibafOc1xgYT"
     videoTitle="vietnam video"
     image1 = {VietImage1}
     image2 = {VietImage2}
    />

    <Footer />
    </>
  )
}

export default Vietnam