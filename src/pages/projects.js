import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Spacer from "../components/util/spacer"


const projects = [
  {
    name: 'Glyph',
    pageLink: '/music/glyph',
    imgSrc: '',
    key: 'glyph'
  },
  {
    name: 'SC2020',
    pageLink: '/music/sc2020',
    imgSrc: '',
    key: 'sc2020'
  },
  {
    name: 'Brooks Park',
    pageLink: '/projects/brookspark',
    imgSrc: '',
    key: 'brookspark'
  },
  {
    name: 'Rest your Eyes Easy, Now',
    pageLink: '/projects/restyoureyeseasynow',
    imgSrc: '',
    key: 'restyoureyeseasynow'
  },
  {
    name: 'Luna',
    pageLink: '/projects/sib',
    imgSrc: '',
    key: 'sib'
  },
  {
    name: 'On to the Moon',
    pageLink: '/projects/ontothemoon',
    imgSrc: '',
    key: 'ontothemoon'
  },
  {
    name: 'Cheshire King',
    pageLink: '/projects/cheshireking',
    imgSrc: '',
    key: 'cheshireking'
  },
  {
    name: 'Into Silence',
    pageLink: '/projects/intosilence',
    imgSrc: '',
    key: 'cheshireking'
  },
  {
    name: 'Aloud',
    pageLink: '/projects/aloud',
    imgSrc: '',
    key: 'aloud'
  },
  {
    name: 'On Isolation',
    pageLink: '/projects/onisolation',
    imgSrc: '',
    key: 'onisolation'
  },
]

export default class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  generateProjectLinks() {
    let musicProfiles = []
    let row = 1
    let col = 1
    let projectIndex = 0

    for (projectIndex = 0; projectIndex < projects.length; projectIndex++) {
      musicProfiles.push(
        <div
          key={projects[projectIndex].name}
          style={{
            gridColumnStart: col,
            gridColumnEnd: col,
            gridRowStart: row,
            gridRowEnd: row,
            border: `1px black solid`
          }}
        >
          <div className="project__profile_item">
            {projects[projectIndex].name}
          </div>
        </div>
      )

      console.log(projects[projectIndex].name)

      col++
      if (col > 3) { row++; col = 1}
    }

    return musicProfiles
  }

  render() {

    let numberOfRows = Math.ceil(projects.length / 3)

    return (
      <Layout>
        <div className="music__main__wrapper">
          <SEO title="Music" />
          <Spacer marginTop={100} />
          <div 
            className="music__grid"
            style={{
              gridTemplateColumns: `repeat(3, 1fr)`,
              gridTemplateRows: `repeat(${numberOfRows}, 1fr)`,
              height: 266.66 * numberOfRows,
              width: `800px`,
              marginBottom: `150px`,
            }}
          >
            {this.generateProjectLinks()}
          </div>
        </div>
      </Layout>
    )
  }
}

