import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaSoundcloud, FaFileAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const SocialMediaIcons = () => {
  return (
    <IconContext.Provider value={{ color: "#89747F", size: 40 }}>
      <div className="contact__social_icons__row">
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaTwitter />
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaGithub />
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaLinkedin />
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaYoutube />
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaSoundcloud />
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <FaFileAlt />
          </span>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default SocialMediaIcons
