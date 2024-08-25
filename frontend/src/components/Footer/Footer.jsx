import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={assets.logo} alt="" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint
            suscipit ipsa consectetur adipisci recusandae itaque mollitia sequi
            odit perspiciatis quidem beatae temporibus debitis architecto veniam
            quia, aperiam repudiandae quo!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 (c) Tomato.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
