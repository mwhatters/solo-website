import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types"
import NavbarBorder from "../components/navbarBorder"
import "../css/components/navbar.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  const [width, setWidth] = useState("20px");
  const [offset, setOffset] = useState("20px");
  const [activeEl, setActiveEl] = useState(null);

  const changeActiveEl = (el) => {
    setWidth(el.currentTarget.offsetWidth)
    setOffset(el.currentTarget.offsetLeft)
  }

  return (
    <div className="navbar__main-wrapper">
      <nav className="navbar__menu__main">
        <AniLink fade
          bg="#F5F5DD"
          to="/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          onClick={changeActiveEl}
        >
          HOME
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/about/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          onClick={changeActiveEl}
        >
          ABOUT
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/projects/"
          partiallyActive={true}
          className="navbar__link"
          activeClassName="navbar__link-selected"
          onClick={changeActiveEl}
        >
          PROJECTS
        </AniLink>
        <AniLink fade
          bg="#F5F5DD"
          to="/contact/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          onClick={changeActiveEl}
        >
          CONTACT
        </AniLink>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  changeActiveEl: PropTypes.func,
}

export default Navbar

