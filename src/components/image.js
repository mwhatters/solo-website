import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { TransitionGroup, CSSTransition } from 'react-transition-group'


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

const Image = ({ ordnum }) => {

  Image.propTypes = {
    ordnum: PropTypes.number,
  }

  const data = useStaticQuery(graphql`
    query {
      ord1: file(relativePath: { eq: "ords/1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord2: file(relativePath: { eq: "ords/2.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord3: file(relativePath: { eq: "ords/3.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord4: file(relativePath: { eq: "ords/4.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord5: file(relativePath: { eq: "ords/5.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord6: file(relativePath: { eq: "ords/6.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord7: file(relativePath: { eq: "ords/7.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ord8: file(relativePath: { eq: "ords/8.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let ordnumLookup = 'ord' + ordnum;

  return (
    <CSSTransition
      key={ordnum}
      classNames="header"
      timeout={{ enter: 500, exit: 500 }}
    >
      <Img className="header__main-img" fluid={data[ordnumLookup].childImageSharp.fluid} />
    </CSSTransition>
  )
}

export default Image
