// src/Components/Footer/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-links'>
          <a href='#'>Home</a>
          <a href='#'>Movies</a>
          <a href='#'>TV Series</a>
          <a href='#'>My List</a>
        </div>
        <div className='footer-links'>
          <a href='#'>Audio and Subtitles</a>
          <a href='#'>Media Center</a>
          <a href='#'>Privacy</a>
          <a href='#'>Contact Us</a>
        </div>
        <div className='footer-links'>
          <a href='#'>Help Center</a>
          <a href='#'>Jobs</a>
          <a href='#'>Terms of Use</a>
          <a href='#'>Legal Notices</a>
        </div>
        <div className='social-media'>
          <h3>Follow Us</h3>
          <div className='social-media-icons'>
            <a href='#'><FaFacebookF /></a>
            <a href='#'><FaTwitter /></a>
            <a href='#'><FaInstagram /></a>
            <a href='#'><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 Steary. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;