import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import React, { useState, setState } from "react"
import Image from "../components/image"
import { timeout } from "../lib/timeout"
import storage from "../lib/storage"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerImageState: this.getHeaderState() }
  }

  static propTypes = {
    siteTitle: PropTypes.string,
    mainHeader: PropTypes.bool,
  }

  static defaultProps = {
    siteTitle: ``,
    mainHeader: false,
  }

  getHeaderState() {
    return storage.get('headerShown', 1) ? 1 : 1;
  }

  async headerIntroTransition() {
    while (this.state.headerImageState < 7) {
      await timeout(1000)

      if (this.state.headerImageState === 6) {
        storage.set('headerShown', 1, 1);
      }

      this.setState((state) => {
        return { headerImageState: this.state.headerImageState + 1 };
      });
    }
  }

  componentDidMount() {
    if (this.state.headerImageState < 8) {
      this.headerIntroTransition();
    }
  }

  headerContent() {
    if (this.props.mainHeader) {
      return (
        <div >
          <Image ordnum={this.state.headerImageState} />
        </div>
      )
    }

    return (
      <div>
        Marshall Hattersley
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <SEO title="Main" />
        <Image ordnum={this.state.headerImageState} />
      </Layout>
    )
  }
}
