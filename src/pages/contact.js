import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import PatternInstance from "../components/patternInstance"
import SocialMediaIcons from "../components/socialMediaIcons"
import Panel from "../components/panel"


import "../css/pages/contact.css"




const ContactPage = () => {

  const contactContent = (
    <>
    <div className="contact__main_info">
      <h1>contact me</h1>
      I'm looking for work in music, web / software development, and game design!
          For inquiries, feel free to reach out at <a href="mailto:mwhatters@gmail.com">mwhatters@gmail.com</a>
    </div>
    <Spacer marginTop={40} />
    <SocialMediaIcons />
    <Spacer marginTop={20} />
    <div className="contact__footer_info">
      This page was made using the react framework <a target="_blank" href="https://www.gatsbyjs.org/">Gatsby</a>
      <br />
      You can find the source code for it <a target="_blank" href="https://github.com/mwhatters/solo-website">here</a>
    </div>
    <Spacer marginTop={40} />
    </>
  )

  return (
    <Layout>
      <SEO title="Contact" />
      <div>
        <Panel
          // header="contact me"
          content={contactContent}
        />
        <div style={{ position: 'relative' }}>
          <PatternInstance top={-80} left={-330} variation={2} animation="g1" />
          <PatternInstance top={-650} left={-230} variation={4} animation="g4" />
          <PatternInstance top={20} left={450} variation={4} animation="g2" />
          <PatternInstance top={-450} left={600} variation={2} animation="g5" />
          <PatternInstance top={-300} left={-450} variation={3} animation="g6" />
        </div>
      </div>

        
    </Layout>
  )
}

export default ContactPage
