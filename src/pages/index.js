import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PatternInstance from "../components/patternInstance"
import TitleImage from "../components/titleImage"
import "../css/pages/index.css"

const IndexPage = () => {
  return (
    <Layout alignment='center'>
      <SEO title="Main" />
      <div className="index__main__wrapper">
        <div className="index__image_stack__wrapper">
          <div className="index__image_stack">
            <TitleImage main={true} ordnum={8} />
            <PatternInstance left={350} variation={3} animation="g1" />
            <PatternInstance left={550} variation={2} animation="g2" />
            <PatternInstance left={-320} variation={3} animation="g1" />
            <PatternInstance left={-520} variation={2} animation="g2" />
          </div>
        </div>

        <div className="index__title">
          <div className="index__title_name">
            Marshall Hattersley
          </div>
          <div className="index__subtitle">
            Musician · Composer · Game Designer · Programmer
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage