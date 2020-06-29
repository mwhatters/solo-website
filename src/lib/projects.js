import React from "react"

const projects = {
  glyph: {
    name: 'Glyph',
    imageKey: 'glyph',
    writtenContent: (
      <div>
        This is a project called glyph
      </div>
    ),
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1326727985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://lushboystudios.bandcamp.com/album/glyph">Glyph by beefyuncle</a>
      </iframe>
    )
  },
  sc2020: {
    name: 'SC2020',
    imageKey: 'sc2020',
  },
  brookspark: {
    name: 'Brooks Park',
    imageKey: 'brookspark',
  },
  restyoureyeseasynow: {
    name: 'Rest your Eyes Easy, Now',
    imageKey: 'restyoureyeseasynow',
  },
  sib: {
    name: 'Luna',
    imageKey: 'sib',
  },
  ontothemoon: {
    name: 'On to the Moon',
    imageKey: 'ontothemoon',
  },
  cheshireking: {
    name: 'Cheshire King',
    imageKey: 'cheshireking',
  },
  intosilence: {
    name: 'Into Silence',
    imageKey: 'intosilence',
  },
  aloud: {
    name: 'Aloud',
    imageKey: 'aloud',
  },
  onisolation: {
    name: 'On Isolation',
    imageKey: 'onisolation',
  },
}

export default projects;