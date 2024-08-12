import React from 'react';
import "./CountryListStyles.css";
import TripData from './TripData';
import Trip1 from '../assets/viet3.jpg';
import Trip2 from '../assets/thai3.jpg';
import Trip3 from '../assets/korea1.jpg';
import Trip4 from '../assets/cartagena.jpg';

const CountryList = () => {
  return (
    <div className='countries'>
      <div className='trip-container'>
        <TripData 
          image={Trip1}
          location="Vietnam"
          text="I visited Vietnam right after Thailand. It was honestly a very unexpected trip that I didn't think I would be doing."
          link = "/vietnam"
        />
        <TripData 
          image={Trip2}
          location="Thailand"
          text="This was my first proper Asian country experience and when I first arrived I remember the insane culture shock I had."
          link = "/thailand"
        />
        <TripData 
          image={Trip3}
          location="Korea"
          text="This was a very spontaneous trip that I did after Vietnam and Thailand. I had a lot of fun and it was a nice change of scenery from the other South East Asian countries I had just been to."
          link = "/korea"
        />
        <TripData 
          image={Trip4}
          location="Colombia"
          text="This was a very spontaneous trip that I did after Vietnam and Thailand. I had a lot of fun and it was a nice change of scenery from the other South East Asian countries I had just been to."
          link = "/colombia"
        />
        
        
      </div>
    </div>
  );
}

export default CountryList;
