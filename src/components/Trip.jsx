import React from 'react';
import './TripStyles.css';
import TripData from './TripData';
import Trip1 from '../assets/viet3.jpg';
import Trip2 from '../assets/thai3.jpg';
import Trip3 from '../assets/korea1.jpg';
import { Link } from 'react-router-dom';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p></p>
      <div className='tripcard'>
        
          <TripData 
            image={Trip1}
            location="Vietnam"
            text="I went to Vietnam and it was amazing"
            link = "/vietnam"
          />
        
        
          <TripData 
            image={Trip2}
            location="Thailand"
            text="I went to Thailand and it was amazing"
            link ="/thailand"
          />
        
       
          <TripData 
            image={Trip3}
            location="Korea"
            text="I went to Korea and it was amazing"
          />
        
      </div>
    </div>
  );
}

export default Trip;
