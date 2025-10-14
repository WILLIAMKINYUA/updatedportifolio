import React from 'react';
import myimage from'../../pic/myImage.png'
import './About.css'; 
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img
            src={myimage}
            alt="William Muhuni Kinyua"
            className="img-fluid rounded shadow imageSection"
          />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="mb-4 fw-bold sectiontopic">Hi, I'm William Muhuni Kinyua</h2>
          
          <p className="paraSec mb-3">
            I'm a passionate Frontend Developer based in Nairobi, Kenya, holding a Diploma in Information Communication Technology from the Rift Valley Institute of Science and Technology, where I graduated with distinction.
          </p>

          <p className="paraSec mb-3">
            I specialize in building responsive, user-friendly web applications using HTML, CSS, JavaScript, Angular, and React. I also bring backend skills focused on high-performance API development.
          </p>

          <p className="paraSec mb-3">
            I've contributed to a variety of projects including e-commerce systems and internal portals, both as a Frontend and Backend Developer. My technical strengths include version control (Git), API integration, and technical analysis.
          </p>

          <p className="paraSec mb-3">
            Fluent in both English and Kiswahili, I thrive in collaborative environments and strive to deliver efficient, scalable solutions. You can view some of my work on GitHub.
          </p>

          <p className="paraSec">
            I'm eager to join a forward-thinking development team and contribute meaningfully to impactful digital solutions.
          </p>
        </div>

      </div>
       <div className="d-flex justify-content-center align-items-center mt-3" >
  <Link to="/portifolio" className="btn btn-primary" type="button">
    Resume Overview
  </Link>
</div>
    
    </div>
  );
};

export default About;

