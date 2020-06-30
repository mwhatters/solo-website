import Layout from "../components/layout"
import PatternInstance from "../components/patternInstance"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import TitleImage from "../components/titleImage"
import { timeout } from "../lib/timeout"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  static propTypes = {
    siteTitle: PropTypes.string,
    mainHeader: PropTypes.bool,
  }

  static defaultProps = {
    siteTitle: ``,
    mainHeader: false,
  }

  async indexIntro() {
    await timeout(1000);
  }

  componentDidMount() {
    if (this.state.headerImageState < 8) {
      this.indexIntro();
    }
  }

  render() {
    return (
      <Layout alignment='center'>
        <SEO title="Main" />
        <div className="index__main__wrapper">
          <div className="index__image_stack">
            <TitleImage main={true} ordnum={8} />
            <PatternInstance left={350} variation={3} animation="g1"/>
            <PatternInstance left={550} variation={2} animation="g2"/>
            <PatternInstance left={-320} variation={3} animation="g1"/>
            <PatternInstance left={-520} variation={2} animation="g2"/>
          </div>

          <div className="index__title index__title_visible">
            <div className="index__title_name">
              Marshall Hattersley
            </div>
            <div>
              Musician · Composer · Game Designer · Programmer
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
