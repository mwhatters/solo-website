import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Body from "../components/body"
import Navbar from "../components/navbar"
import { TransitionPortal } from "gatsby-plugin-transition-link";
import "../css/components/layout.css"

const Layout = ({ children, alignment, scrollEnabled }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div 
        className={`layout__main_wrapper ${scrollEnabled ? 'o__scroll' : ''}`}
        style={{ alignItems: alignment }}
      >
        <Body 
          children={children} 
          siteTitle={data.site.siteMetadata.title} 
        />
      </div>
      <div className="layout__fake_footer"></div>
      <TransitionPortal>
          <Navbar />
      </TransitionPortal>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alignemnt: PropTypes.string,
  scrollEnabled: PropTypes.bool,
}

Layout.defaultProps = {
  scrollEnabled: false,
}

export default Layout
