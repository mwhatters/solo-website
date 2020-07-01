import React, { useState } from 'react';
import PropTypes from "prop-types"
import "../css/components/navbar.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  return (
    <div className="navbar__main-wrapper">
      <nav className="navbar__menu__main">
        <AniLink fade
          bg="#F5F5DD"
          to="/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
        >
          HOME
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/about/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
        >
          ABOUT
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/projects/"
          partiallyActive={true}
          className="navbar__link"
          activeClassName="navbar__link-selected"
        >
          PROJECTS
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/contact/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
        >
          CONTACT
        </AniLink>
      </nav>
    </div>
  )
}

export default Navbar

