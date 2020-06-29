import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"

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
  </Layout>
)

export default ContactPage
