import React from "react";
import { Link } from "react-router-dom";
import { AiFillPhone, AiFillRedEnvelope, AiFillHome } from 'react-icons/ai';
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa';
import "./index.css"; // Make sure to import the CSS file with the provided styles.

const Footer = () => {
  return (
    <div>
      <div className="footer-content">
        <div class="adress-text">
          <h1 class="address-text-h">Focus Web Media</h1>
          <p class="address-text-p">Your premier destination for digital marketing<br /> solutions in the ever-expanding digital space.<br /> Our team consists of young and dynamic tech<br /> experts who specialize in various fields, ensuring<br /> that we have the expertise to meet all your digital<br /> marketing needs.</p>
        </div>
        <div className="site-map-text">
          <h1 className="site-map-text-h">Site Map</h1>
          <ul className="site-map-text-p">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms And Conditions</Link>
            </li>
            <li>
              <Link to="/download-brochure">Download Brochure</Link>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <h1 className="contact-info-h">Contact Us</h1>
          <div className="contact-item">
            <div className="mobile-icon">
              <AiFillPhone size={20} />
            </div>
            <div>
              <p style={{ fontSize: "18px" }}> + 91 40 233 54 505, <br /> +91 9705 455 526</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="mobile-icon">
              <AiFillRedEnvelope size={20} />
            </div>
            <div>
              <p style={{ fontSize: "18px", marginTop: "10px" }}>
                info@focuswebmedia.in
              </p>
            </div>
          </div>
          <div className="contact-item">
            <div className="mobile-icon1">
              <AiFillHome size={20} />
            </div>
            <div>
              <p>
                H.No: 8-2-248/A/5/11, Road No 3, Opp:Times of India,
                <br />
                behind TATA Capital Financial Services Limited,
                <br />
                Banjara Hills, Hyderabad, Telangana 500034.
              </p>
            </div>
          </div>
        </div>
        <div className="follow-us">
          <h1 className="follow-us-h">Follow Us On</h1>
          <div className="social-media">
            <div className="icon-1">
              <a target="_blank" href="https://www.facebook.com/greenfmcadvertising/" rel="noopener noreferrer">
                <FiFacebook size={20} />
              </a>
            </div>
            <div className="icon-1">
              <a target="_blank" href="https://www.instagram.com/greenfmcadvertising/" rel="noopener noreferrer">
                <FiInstagram size={20} />
              </a>
            </div>
            <div className="icon-1">
              <a target="_blank" href="https://www.linkedin.com/company/greenfmc/" rel="noopener noreferrer">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
          <div className="social-media1">
            <div className="icon-1">
              <a target="_blank" href="https://twitter.com/GreenFMC_Hyd" rel="noopener noreferrer">
                <FiTwitter size={20} />
              </a>
            </div>
            <div className="icon-1">
              <a target="_blank" href="https://www.youtube.com/channel/UCMzN7MKcJTGNggXhLj3dEyg?view_as=subscriber" rel="noopener noreferrer">
                <FiYoutube size={20} />
              </a>
            </div>
            <div className="icon-1">
              <a target="_blank" href="https://www.pinterest.com/your-pinterest-link" rel="noopener noreferrer"> {/* Replace with your Pinterest link */}
                <FaPinterest size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
      <h1>
        © 2023 Focus Web Media by{" "}
        <strong>
          <a target="_blank" href="http://www.greenfmcadvertising.com" rel="noopener noreferrer">
            GREEN FMC ADVERTISING
          </a>
        </strong>
      </h1>
    </div>
    </div>
  );
};

export default Footer;
