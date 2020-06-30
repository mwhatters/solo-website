import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import PatternInstance from "../components/patternInstance"
import SocialMediaIcons from "../components/socialMediaIcons"



const ContactPage = () => (
  <Layout>
    <div className="contact__main__wrapper">
      <SEO title="Contact" />
      <Spacer marginTop={100} />
      <h2>Contact me</h2>
      <Spacer marginTop={50} />
      <div className="contact__main_info">
        I'm looking for work in music, web / software development, and game design! 
        For inquiries, feel free to reach out at <a href="mailto:mwhatters@gmail.com">mwhatters@gmail.com</a>
      </div>
      <Spacer marginTop={70} />
      <SocialMediaIcons />
      <Spacer marginTop={20} />
      <em style={{ fontSize: 13 }}>
        This page was made by myself using the react framework <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a>
      </em>
    </div>
    <Spacer marginTop={40} />
    <div style={{ position: 'relative' }}>
      <PatternInstance top={-80} left={-330} variation={2} animation="g1" />
      <PatternInstance top={-650} left={-230} variation={4} animation="g4" />
      <PatternInstance top={20} left={450} variation={4} animation="g2" />
      <PatternInstance top={-450} left={600} variation={2} animation="g5" />
      <PatternInstance top={-300} left={-450} variation={3} animation="g6" />
    </div>
  </Layout>
)

export default ContactPage
