import React from 'react';
import'./Phase3.css'
import service1 from'../../pic/pexels-johnmark-smith-281962.jpg'
import CSS from'../../pic/css-3.png'
import html from'../../pic/html-5.png'
import git from'../../pic/git.PNG'
import angular from'../../pic/angular.PNG'
import react from'../../pic/react.ico'
import js from'../../pic/js.png'
const Phase3 = () => {
  return (
 <div className="container phase3box py-5">
  <div className="row align-items-center">

    <div className="col-12 col-md-6 mb-4 mb-md-0">
      <img
        src={service1}
        alt="Not Applicable"
        className="img-fluid imageSection"
      />
    </div>
    <div className="col-12 col-md-6">

      <div className="mb-4">
        <h3 className="sectiontopic">Why Work With Me</h3>
        <p className="paraSection">
          I  am focused on creating responsive, accessible, and visually polished user interfaces using modern tools like HTML, CSS, JavaScript, and frameworks such as React and Angular. I have a sharp eye for detail and design, and I work closely with designers and backend developers to deliver smooth, user-friendly digital experiences. I’m passionate about writing clean, maintainable code and always looking to learn and grow, bringing both technical know-how and creative thinking to every project.
        </p>
      </div>

     
      <div className="mb-3">
        <h3 className="subsectiontopic">DEVELOPMENT SKILLS</h3>
        <p className="paraSection">
          I am familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap and other modern frameworks.
        </p>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <img src={CSS} alt="CSS" className="logoicon" />
          <img src={html} alt="HTML" className="logoicon" />
          <img src={js} alt="JavaScript" className="logoicon" />
          <img src={react} alt="React" className="logoicon" />
          <img src={angular}alt="React" className="logoicon" />
          <img src={git} alt="React" className="logoicon" />
        </div>
      </div>

    </div>
  </div>
</div>

  );
}

export default Phase3;
