import { Link } from "gatsby"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./navbar.css"

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef     = React.createRef(),
    this.aboutRef    = React.createRef(),
    this.projectsRef = React.createRef(),
    this.contactRef  = React.createRef(),
    this.state = {
      currentRef: null,
    }
  }

  setCurrentRef(ref) {
    this.setState((state) => {
      return { currentRef: ref }
    })
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <nav>
        <AniLink fade
          bg="#F5F5DD"
          to="/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          ref={this.homeRef}
        >
          HOME
        </AniLink>

        <AniLink fade
          bg="#F5F5DD"
          to="/about/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          ref={this.aboutRef}
        >
          ABOUT
        </AniLink>

        <AniLink fade
          bg="#F5F5DD"
          to="/projects/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          ref={this.projectsRef}
        >
          PROJECTS
        </AniLink>

        <AniLink fade
          bg="#F5F5DD"
          to="/contact/"
          className="navbar__link"
          activeClassName="navbar__link-selected"
          ref={this.contactRef}
        >
          CONTACT
        </AniLink>
        <div className="navbar__links__bottom_border"></div>
      </nav>
    )
  }
}
