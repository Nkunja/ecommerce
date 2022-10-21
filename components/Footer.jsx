import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> Nkunja Ecommerce 2022 All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillLinkedin />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer