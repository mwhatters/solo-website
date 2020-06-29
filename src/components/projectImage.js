import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

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

const ProjectImage = ({ projectKey }) => {

  ProjectImage.propTypes = {
    projectKey: PropTypes.string.isRequired,
  }

  const data = useStaticQuery(graphql`
    query {
      ord1: file(relativePath: { eq: "ords/1.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img fixed={data[projectKey].childImageSharp.fixed} />
  )
}

export default ProjectImage
