import React from 'react';

import Home1 from './Home1';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
const Home2 = () => {
  return (
    <div>
    <div className='mt-5' style={{height:'50vh'}}><Home1/></div> 
         <About/>
         <Service/>
         
         <Contact/>  
    </div>
  );
}

export default Home2;
