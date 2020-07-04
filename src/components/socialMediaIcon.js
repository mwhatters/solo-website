import PropTypes from "prop-types"
import React from "react"
import { IconContext } from 'react-icons';

const SocialMediaIcon = ({ children, href }) => {
  return (
    <IconContext.Provider value={{ color: "#89747F", size: 40 }}>
      <div className="contact__social_icon__wrapper">
        <span className="contact__social_icon">
          <a target="_blank" rel="noreferrer" href={href}>
            {children}
          </a>
        </span>
      </div>
    </IconContext.Provider>
  )
}

SocialMediaIcon.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
}

export default SocialMediaIcon
