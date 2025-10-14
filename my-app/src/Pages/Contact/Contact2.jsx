import React from 'react';
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import'./Contact2.css'
const Contact2 = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="drain display-5 fw-normal">Let's Work Together</h1>
          <p className="lead mt-4">
            I am currently eager and ready, and I highly hope to hear from you soon.
          </p>
        </div>

        <div className="col-12 col-md-6">
          <div className="mb-4">
            <h3 className="h5">FOLLOW ON SOCIAL</h3>
            <div className="d-flex gap-3 mt-2">
              <Link to="https://www.facebook.com/" className="text-decoration-none">
                <IoLogoFacebook size={32} />
              </Link>
              <Link to="https://www.twitter.com/" className="text-decoration-none text-dark">
                <FaTwitter size={32} />
              </Link>
              <Link to="https://www.instagram.com/" className="text-decoration-none">
                <BsInstagram size={32} style={{ color: "purple" }} />
              </Link>
              <Link to="https://www.whatsapp.com/" className="text-decoration-none">
                <IoLogoWhatsapp size={32} style={{ color: "green" }} />
              </Link>
            </div>
          </div>

          <div className="mb-3">
            <h3 className="h5">EMAIL</h3>
            <p>williammuhunikinyua@gmail.com</p>
          </div>

          <div>
            <h3 className="h5">PHONE</h3>
            <p>+254 758 388 340</p>
            <p>+254 780 313 060</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
