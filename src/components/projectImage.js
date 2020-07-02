import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image" 
import { useStaticQuery, graphql } from "gatsby"

const ProjectImage = ({ projectKey, parentStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      glyph:        file(relativePath: { eq: "projects/glyph.jpg" })        { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      sc2020:       file(relativePath: { eq: "projects/sc2020.jpg" })       { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      brookspark:   file(relativePath: { eq: "projects/brookspark.jpg" })   { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      luna:         file(relativePath: { eq: "projects/luna.jpg" })         { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      ontothemoon:  file(relativePath: { eq: "projects/ontothemoon.jpg" })  { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      cheshireking: file(relativePath: { eq: "projects/cheshireking.jpg" }) { childImageSharp { fluid { ...GatsbyImageSharpFluid } } },
      sib:          file(relativePath: { eq: "projects/sib.jpg" })          { childImageSharp { fluid { ...GatsbyImageSharpFluid } }  }
      intosilence:  file(relativePath: { eq: "projects/intosilence.jpg" })  { childImageSharp { fluid { ...GatsbyImageSharpFluid } }  }
      aloud:        file(relativePath: { eq: "projects/aloud.jpg" })        { childImageSharp { fluid { ...GatsbyImageSharpFluid } }  }
      onisolation:  file(relativePath: { eq: "projects/onisolation.jpg" })  { childImageSharp { fluid { ...GatsbyImageSharpFluid } }  }
    }
  `)

  if (data[projectKey]) {
    return (
      <Img 
        fluid={data[projectKey].childImageSharp.fluid} 
        style={parentStyle}
      />
    )
  }

  return (<div/>)
}

ProjectImage.propTypes = {
  projectKey: PropTypes.string.isRequired,
  parentStyle: PropTypes.object,
}

export default ProjectImage
