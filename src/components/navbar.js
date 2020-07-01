import React from 'react';
import PropTypes from "prop-types"
import "../css/components/navbar.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaHome, FaAddressCard, FaArchive, FaPhone  } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import withSizes from 'react-sizes'


const Navbar = ({ isMobile }) => {
  return (
    <div className="navbar__main-wrapper">
      <IconContext.Provider value={{ size: 25 }}>
        <nav>
          <AniLink fade
            bg="#F5F5DD"
            to="/"
            className="navbar__link"
            activeClassName="navbar__link-selected"
          >
            {isMobile ? <FaHome /> : "HOME"}
          </AniLink>
          <AniLink fade
            bg="#F5F5DD"
            to="/about/"
            className="navbar__link"
            activeClassName="navbar__link-selected"
          >
            {isMobile ? <FaAddressCard /> : "ABOUT"}
          </AniLink>
          <AniLink fade
            bg="#F5F5DD"
            to="/projects/"
            partiallyActive={true}
            className="navbar__link"
            activeClassName="navbar__link-selected"
          >
            {isMobile ? <FaArchive /> : "PROJECTS"}
          </AniLink>
          <AniLink fade
            bg="#F5F5DD"
            to="/contact/"
            className="navbar__link"
            activeClassName="navbar__link-selected"
          >
            {isMobile ? <FaPhone /> : "CONTACT"}
          </AniLink>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 1000,
})

export default withSizes(mapSizesToProps)(Navbar)

