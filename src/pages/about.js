import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const AboutPage = () => {
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

  return (
    <Layout>
      <div className="about__main__wrapper">
        <SEO title="Projects" />
        <Spacer marginTop={130} />

        <div className="about__profile__wrapper">
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
          <Spacer marginLeft={80} />
          <div className="about__profile__info_wrapper">
            <div className="about__profile__info">
              <p>
                Hey thanks for checking this out! My name's Marshall, 
                I'm a person who is really passionate about music, video games, 
                web development, and philosophy. I've had years of experience 
                in the software world working for <a href="https://www.intercom.com/">Intercom</a> but 
                took time away to pursue composition and video game music development.
              </p>
              <p>
                Since leaving Intercom in March 2019, I spent time building audio engineering skills, familiarizing myself
                with dynamic music tools such as FMOD. During this time I've also composed over 2 hours worth of original music, done extensive
                work in video game modding, brushed up on drumming and guitar, and most importantly, took time to re-evaluate what it I'm looking for in life.
              </p>
              <p>
                I just moved down to San Diego, California, and in search for work! 
                I have web development (ruby on rails, react, ember), music composition, and dynamic audio engineering experiennce.
                I built and hosted this website myself using the react framework Gatsby, and deployed via nginx.
              </p>
              <p>
                <a 
                  href="https://drive.google.com/file/d/1qO16UjgJumDRsGEuqUTzHhTJZHNru0aQ/view?usp=sharing"
                  target="_blank"
                >
                    Link to my CV
                </a>
              </p>
              <Spacer marginBottom={20} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
