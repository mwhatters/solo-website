/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Body from "../components/body"
import Navbar from "../components/navbar"
import { TransitionPortal } from "gatsby-plugin-transition-link";
import "./layout.css"

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
        className={`body__main-wrapper ${scrollEnabled ? 'o__scroll' : ''}`}
        style={{
          alignItems: alignment,
        }}
      >
        <Body 
          className="body__main-content ${}"
          children={children} 
          siteTitle={data.site.siteMetadata.title} 
        />
      </div>
      <div className="body__fake_footer"></div>

      <TransitionPortal>
        <div className="navbar__main-wrapper">
          <Navbar/>
        </div>
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
