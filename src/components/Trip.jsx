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
            text="I visited Vietnam right after Thailand. It was honestly a very unexpected trip that I didn't think I would be doing but am glad I did!"
            link = "/vietnam"
          />
        
        
          <TripData 
            image={Trip2}
            location="Thailand"
            text="This was my first proper Asian country experience and when I first arrived I remember the insane culture shock I had."
            link ="/thailand"
          />
        
       
          <TripData 
            image={Trip3}
            location="Korea"
            text="This was a very spontaneous trip that I did after Vietnam and Thailand. I had a lot of fun and it was a nice change of scenery from the other South East Asian countries I had just been to. "
          />
        
      </div>
    </div>
  );
}

export default Trip;
