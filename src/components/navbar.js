import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import "../css/components/navbar.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaHome, FaAddressCard, FaArchive, FaPhone  } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import withSizes from 'react-sizes'
import { timeout } from '../lib/timeout'
import NavbarBorder from './navbarBorder';

const Navbar = ({ isMobile }) => {
  const windowAndDocumentIsDefined = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined'
  }

  const [width, setWidth] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!windowAndDocumentIsDefined()) {
      setWidth(0)
      setOffset(0)
      return;
    }

    calibrateNavBar()
    window.onresize = calibrateNavBar;
    return;
  }, [])

  const calibrateNavBar = () => {
    let url = new URL(window.location)
    let path = url.pathname
    let activeNode = document.getElementById(`nav__${path}`)
    setWidth(activeNode.offsetWidth)
    setOffset(activeNode.offsetLeft)
  }

  const setActiveMenuItem = (el) => {
    let navBarEl = document.getElementById(`navbar__border`)

    navBarEl.classList.add("navbar__links__bottom_border__transition")
    setWidth(el.currentTarget.offsetWidth)
    setOffset(el.currentTarget.offsetLeft)

    let transition = document.querySelector('.navbar__links__bottom_border__transition');
    transition.addEventListener('transitionend', () => {
      navBarEl.classList.remove("navbar__links__bottom_border__transition")
    });
  }

  return (
    <>
    <div className="navbar__main-wrapper">
      <IconContext.Provider value={{ size: 25 }}>
        <nav>
          <AniLink fade
            id="nav__/"
            bg="#F5F5DD"
            to="/"
            duration={0.3}
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {isMobile ? <FaHome /> : "HOME"}
          </AniLink>
          <AniLink fade
            id="nav__/about/"
            bg="#F5F5DD"
            to="/about/"
            duration={0.3}
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {isMobile ? <FaAddressCard /> : "ABOUT"}
          </AniLink>
          <AniLink fade
            id="nav__/projects/"
            bg="#F5F5DD"
            to="/projects/"
            duration={0.3}
            partiallyActive={true}
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {isMobile ? <FaArchive /> : "PROJECTS"}
          </AniLink>
          <AniLink fade
            id="nav__/contact/"
            bg="#F5F5DD"
            to="/contact/"
            duration={0.3}
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {isMobile ? <FaPhone /> : "CONTACT"}
          </AniLink>
        </nav>
      </IconContext.Provider>
      <NavbarBorder width={width} offset={offset} />
    </div>
    </>
  )
}

Navbar.propTypes = {
  isMobile: PropTypes.bool,
}

Navbar.defaultProps = {
  isMobile: false,
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(Navbar)

