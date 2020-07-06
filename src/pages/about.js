import React from "react"
import Layout from "../components/layout"
import Panel from "../components/panel"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Spacer from "../components/util/spacer"
import PatternInstance from "../components/patternInstance"
import withSizes from 'react-sizes'
import profileContent from '../lib/profileContent'

const AboutPage = ({ isMobile }) => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "itme.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const profileImageContent = (
    <div>
      <Spacer marginTop={20} />
      <Img
        fluid={data.profile.childImageSharp.fluid}
        style={{
          width: `200px`,
          height: `200px`,
          borderRadius: `50%`,
        }}
      />
    </div>
  )

  const onMobile = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 705
    } else {
      return isMobile
    }
  }

  const bgImageOpacity = () => { return onMobile() ? 0.15 : 1 }

  const backgroundContent = () => (
    <div style={{ position: 'relative' }}>
      <PatternInstance opacity={bgImageOpacity()} top={onMobile() ? -900 : -100} left={onMobile() ? 0 : -330} variation={2} animation="g1" />
      <PatternInstance opacity={bgImageOpacity()} top={-450} left={-80} variation={4} animation="g2" />
      <PatternInstance opacity={bgImageOpacity()} top={-750} left={-230} variation={5} animation="g-main" />
      <PatternInstance opacity={bgImageOpacity()} top={onMobile() ? -500 : -270} left={onMobile() ? 250 : -430} variation={3} animation="g3" />
      <PatternInstance opacity={bgImageOpacity()} top={onMobile() ? -800 : 0} left={onMobile() ? 300 : 630} variation={6} animation="g2" />
    </div>
  )

  return (
    <Layout>
      <SEO title="About" />
      <div>
        <Panel
          header="about me"
          imageContent={profileImageContent}
          content={profileContent}
        />
        {backgroundContent()}
      </div>
    </Layout>
  )
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 705,
})

export default withSizes(mapSizesToProps)(AboutPage)
