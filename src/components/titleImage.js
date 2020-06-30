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

const TitleImage = ({ ordnum, main, opacity }) => {

  TitleImage.propTypes = {
    ordnum: PropTypes.number,
    main: PropTypes.bool,
  }

  TitleImage.defaultProps = {
    opacity: 1,
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
      ord2: file(relativePath: { eq: "ords/2.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord3: file(relativePath: { eq: "ords/3.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord4: file(relativePath: { eq: "ords/4.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord5: file(relativePath: { eq: "ords/5.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord6: file(relativePath: { eq: "ords/6.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord7: file(relativePath: { eq: "ords/7.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ord8: file(relativePath: { eq: "ords/8.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  let ordnumLookup = 'ord' + ordnum;

  function imgClass() {
    let imgClass = "index__main-img "

    if (main) {
      imgClass += "g-main"
    }

    return imgClass
  }

  return (
    <Img 
      style={{
        opacity,
      }}
      className={imgClass()} 
      fixed={data[ordnumLookup].childImageSharp.fixed} 
    />
  )
}

export default TitleImage
