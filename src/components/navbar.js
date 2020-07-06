import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import "../css/components/navbar.css"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaHome, FaAddressCard, FaArchive, FaPhone  } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import withSizes from 'react-sizes'
import { timeout } from '../lib/timeout'
import NavbarBorder from './navbarBorder';


const Navbar = ({ isMobile, }) => {
  const windowAndDocumentIsDefined = () => {
    return typeof window !== 'undefined' && typeof document !== 'undefined'
  }

  const [width, setWidth] = useState(0)
  const [offset, setOffset] = useState(0)
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (!windowAndDocumentIsDefined()) {
      setWidth(0)
      setOffset(0)
      return;
    }
    calibrateNavBar()
    addNavBarTransitionCss()
    window.onresize = calibrateNavBar;
    return;
  }, [])

  const calibrateNavBar = () => {
    let url = new URL(window.location)
    let path = url.pathname
    let activeNode = document.getElementById(`nav__${path}`)
    setWidth(activeNode.offsetWidth)
    setOffset(activeNode.offsetLeft)
    mobileEnabled()
  }

  const mobileEnabled = () => {
    if (!windowAndDocumentIsDefined()) {
      return setMobile(isMobile)
    }

    setMobile(window.innerWidth < 705)
  }

  const addNavBarTransitionCss = async function() {
    await timeout(50)
    let navBarEl = document.getElementById(`navbar__border`)
    navBarEl.classList.add("navbar__links__bottom_border__transition")
    return;
  }

  const setActiveMenuItem = (el) => {
    setWidth(el.currentTarget.offsetWidth)
    setOffset(el.currentTarget.offsetLeft)
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
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {mobile ? <FaHome /> : "HOME"}
          </AniLink>
          <AniLink fade
            id="nav__/about/"
            bg="#F5F5DD"
            to="/about/"
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {mobile ? <FaAddressCard /> : "ABOUT"}
          </AniLink>
          <AniLink fade
            id="nav__/projects/"
            bg="#F5F5DD"
            to="/projects/"
            partiallyActive={true}
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {mobile ? <FaArchive /> : "PROJECTS"}
          </AniLink>
          <AniLink fade
            id="nav__/contact/"
            bg="#F5F5DD"
            to="/contact/"
            className="navbar__link"
            activeClassName="navbar__link-selected"
            onClick={setActiveMenuItem}
          >
            {mobile ? <FaPhone /> : "CONTACT"}
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

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(Navbar)

