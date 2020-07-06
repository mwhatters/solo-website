import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Body from "../components/body"
import "../css/components/layout.css"
import withSizes from 'react-sizes'

const Layout = ({ children, alignment, scrollEnabled, isShortScreen }) => {
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
        className={`layout__main_wrapper ${scrollEnabled || isShortScreen ? 'o__scroll' : ''}`}
        style={{ alignItems: alignment }}
        >
        <Body 
          children={children} 
          siteTitle={data.site.siteMetadata.title} 
        />
      </div>
      <div className="layout__fake_footer"></div>
      <Navbar />
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

const mapSizesToProps = ({ height }) => ({
  isShortScreen: height < 640,
})

export default withSizes(mapSizesToProps)(Layout)
