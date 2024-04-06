import React from 'react';
import "./CountryListStyles.css";
import TripData from './TripData';
import Trip1 from '../assets/viet3.jpg';
import Trip2 from '../assets/thai3.jpg';
import Trip3 from '../assets/korea1.jpg';

const CountryList = () => {
  return (
    <div className='countries'>
      <div className='trip-container'>
        <TripData 
          image={Trip1}
          location="Vietnam"
          text="I went to Vietnam and it was amazing"
          link = "/vietnam"
        />
        <TripData 
          image={Trip2}
          location="Thailand"
          text="I went to Vietnam and it was amazing"
          link = "/thailand"
        />
        <TripData 
          image={Trip3}
          location="Korea"
          text="I went to korea and it was amazing"
          link = "/korea"
        />
        
      </div>
    </div>
  );
}

export default CountryList;
