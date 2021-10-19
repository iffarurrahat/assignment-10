import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-bg  pt-100 pb-70">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-3">Contact</h4>
            <div className="footer_li">
              <li>Phone: +855-258-456</li>
              <li>Email: hello@bnsbgmail.com</li>
              <li>
                Address: Shamshernagar <br /> Road Moulvibazar-3200
              </li>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-3">About</h4>
            <div className="footer_li">
              <li>Doctor</li>
              <li>Services</li>
              <li>Contact</li>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-3">Explore</h4>
            <div className="footer_li">
              <li>Appointment</li>
              <li>Shop</li>
              <li>Support</li>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <h4 className="footer-title my-3">Support</h4>
            <div className="footer_li">
              <li>24/7 Service</li>
              <li>Online Support</li>
              <li>Free Consultancy</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
