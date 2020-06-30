import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import PatternInstance from "../components/patternInstance"


const ContactPage = () => (
  <Layout>
    <div className="about__main__wrapper">
      <SEO title="Contact" />
      <Spacer marginTop={100} />
      <h2>Contact me</h2>
      <Spacer marginTop={50} />
      <div className="contact__main_info">
        I'm looking for work in music, web / software development, and game design! 
        For inquiries, feel free to reach out at <a href="mailto:mwhatters@gmail.com">mwhatters@gmail.com</a>
      </div>
      <Spacer marginTop={130} />
      <div>
        Social Media Links
      </div>
      <div>
        CV
      </div>
    </div>
    <div style={{ position: 'relative' }}>
      <PatternInstance top={-100} left={-330} variation={2} animation="g1" />
      <PatternInstance top={-655} left={300} variation={4} animation="g2" />
      <PatternInstance top={-750} left={650} variation={7} animation="g3" />
      <PatternInstance top={0} left={630} variation={6} animation="g2" />
      <PatternInstance top={80} left={200} variation={5} animation="g-main" />
    </div>
  </Layout>
)

export default ContactPage
