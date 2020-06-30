import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image" 
import { useStaticQuery, graphql } from "gatsby"


/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProjectImage = ({ projectKey, parentStyle }) => {
  const data = useStaticQuery(graphql`
    query {
      glyph: file(relativePath: { eq: "projects/glyph.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sc2020: file(relativePath: { eq: "projects/sc2020.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      brookspark: file(relativePath: { eq: "projects/brookspark.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      luna: file(relativePath: { eq: "projects/luna.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      ontothemoon: file(relativePath: { eq: "projects/ontothemoon.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      cheshireking: file(relativePath: { eq: "projects/cheshireking.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      sib: file(relativePath: { eq: "projects/sib.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      intosilence: file(relativePath: { eq: "projects/intosilence.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aloud: file(relativePath: { eq: "projects/aloud.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      onisolation: file(relativePath: { eq: "projects/onisolation.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  ProjectImage.propTypes = {
    projectKey: PropTypes.string.isRequired,
    parentStyle: PropTypes.object,
  }

  if (data[projectKey]) {
    return (
      <Img 
        fluid={data[projectKey].childImageSharp.fluid} 
        style={parentStyle}
      />
    )
  }

  return (<div />)

}

export default ProjectImage
