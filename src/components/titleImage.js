import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const TitleImage = ({ ordnum, main, opacity }) => {
  const data = useStaticQuery(graphql`
    query {
      ord1: file(relativePath: { eq: "ords/1.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord2: file(relativePath: { eq: "ords/2.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord3: file(relativePath: { eq: "ords/3.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord4: file(relativePath: { eq: "ords/4.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord5: file(relativePath: { eq: "ords/5.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord6: file(relativePath: { eq: "ords/6.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord7: file(relativePath: { eq: "ords/7.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
      ord8: file(relativePath: { eq: "ords/8.png" }) { childImageSharp { fixed {...GatsbyImageSharpFixed} } }
    }
  `)

  const ordnumLookup = 'ord' + ordnum;

  return (
    <Img 
      style={{
        opacity,
      }}
      className={`index__main-img ${main ? 'g-main' : null}`} 
      fixed={data[ordnumLookup].childImageSharp.fixed} 
    />
  )
}

TitleImage.propTypes = {
  ordnum: PropTypes.number,
  main: PropTypes.bool,
  opacity: PropTypes.number,
}

TitleImage.defaultProps = {
  opacity: 1,
}

export default TitleImage
