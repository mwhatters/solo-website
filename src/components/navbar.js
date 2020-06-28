import { Link } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  return (
    <nav>
      <AniLink fade
        duration={1.3}
        to="/"
        className="navbar__link"
        activeClassName="navbar__link-selected"
      >
        HOME
      </AniLink>

      <AniLink fade
        duration={1.3}
        to="/music/"
        className="navbar__link"
        activeClassName="navbar__link-selected"
      > 
        MUSIC
      </AniLink>

      <AniLink fade
        duration={1.3}
        to="/projects/"
        className="navbar__link"
        activeClassName="navbar__link-selected"
      >
        PROJECT
      </AniLink>

      <AniLink fade
        duration={1.3}
        to="/contact/"
        className="navbar__link"
        activeClassName="navbar__link-selected"
      >
        CONTACT
      </AniLink>
    </nav>
  )
}

export default Navbar