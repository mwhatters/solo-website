import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import TitleImage from "../components/titleImage"
import { timeout } from "../lib/timeout"
import storage from "../lib/storage"

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
        <div className="index__main__wrapper">
          <SEO title="Main" />
          <div className="index__image_stack">
            <TitleImage visible={true} ordnum={8} />
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
