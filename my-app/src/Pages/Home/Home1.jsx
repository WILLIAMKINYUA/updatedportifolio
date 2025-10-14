import React from 'react';
import"./Home1.css"
import homepic from'../../pic/myImage.png'
const Home1 = () => {
  return (
    <div className='homepage' >
      <div className="img container justify-content-center align-items-center pt-5" >
            <img src={homepic} alt="William Muhuni Kinyua" className="photo1"/>
           <h5 className="content pt-2"> FrontEnd Developer </h5>
         </div>
    </div>
  );
}

export default Home1;
