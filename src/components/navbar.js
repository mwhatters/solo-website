import { Link } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./navbar.css"
import NavbarBorder from "../components/navbarBorder"
import TransitionLink from "gatsby-plugin-transition-link"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "20px",
      offset: "20px",
    }
  }

  render() {
    return (
      <nav>
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
        <NavbarBorder width={this.state.width} offset={this.state.offset} />
      </nav>
    )
  }
}

