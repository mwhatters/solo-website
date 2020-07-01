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
            <a target="_blank" href="https://twitter.com/mwhatters">
              <FaTwitter />
            </a>
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <a target="_blank" href="https://github.com/mwhatters">
              <FaGithub />
            </a>
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <a target="_blank" href="https://www.linkedin.com/in/mwhatters/">
              <FaLinkedin />
            </a>
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <a target="_blank" href="https://www.youtube.com/channel/UC0qqMXBvdjq8St2vwGzOZyg">
              <FaYoutube />
            </a>
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <a target="_blank" href="https://soundcloud.com/lushboy-studios">
              <FaSoundcloud />
            </a>
          </span>
        </div>
        <div className="contact__social_icon__wrapper">
          <span className="contact__social_icon">
            <a target="_blank" href="https://drive.google.com/file/d/1qO16UjgJumDRsGEuqUTzHhTJZHNru0aQ/view?usp=sharing">
              <FaFileAlt />
            </a>
          </span>
        </div>
      </div>
    </IconContext.Provider>
  )
}

export default SocialMediaIcons
