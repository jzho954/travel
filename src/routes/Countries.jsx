import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutImage from '../assets/thai1.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import CountryList from '../components/CountryList';
import { useLocation } from 'react-router-dom';

const Countries = () => {
  const {location} = useLocation();

  useEffect(() => {
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
  }, [location]);

  return (
    <>
      <Hero 
        cName="hero-countries"
        heroImage={AboutImage}
        title="Countries"
        text=""
        url="/countries"
        btnClass="hide"
      />

      <CountryList />
      <Footer />
    </>
  );
}

export default Countries;
