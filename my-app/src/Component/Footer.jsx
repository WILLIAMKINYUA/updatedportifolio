import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-auto ">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p className="small">
              I am committed to providing the best services  to our clients  with integrity and transparency.
            </p>
          </div>

      
          <div className="col-md-4 mb-3 d-flex row ">
            <h5>Quick Links</h5>
            <ul className="list-unstyled d-flex row">
              <Link to='/'className="text-light text-decoration-none">Home</Link> 
              <Link to='/about'className="text-light text-decoration-none">About</Link> 
              <Link to='/service'className="text-light text-decoration-none">service</Link> 
              <Link to='/portifolio'className="text-light text-decoration-none">Portifolio</Link> 
              <Link to='/contact'className="text-light text-decoration-none">Contact</Link> 
          </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Get in touch </h5>
            <p className="small mb-1">Email: williammuhunikinyua@gmail.com</p>
            <p className="small mb-1">Phone: +254 758 388 340</p>
            <p className="small">Github: https://github.com/WILLIAMKINYUA</p>
            <p className="small">LinkedIn: https://www.linkedin.com/in/william-kinyua-3418132aa/</p>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} William Muhuni. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;