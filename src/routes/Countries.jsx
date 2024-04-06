import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AboutImage from '../assets/thai1.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import CountryList from '../components/CountryList';

const Countries = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
