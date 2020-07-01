import React from "react"

const projects = {
  glyph: {
    name: 'Glyph',
    imageKey: 'glyph',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1326727985/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=false/"
        seamless>
        <a href="http://lushboystudios.bandcamp.com/album/glyph">Glyph by beefyuncle</a>
      </iframe>
    ),
    writtenContent: (
      <>
      <p>
        <a target="_blank" href="https://gamebanana.com/maps/209296">Link to Mod</a><br/>
          <a target="_blank" href="https://youtu.be/0_xY7Gy5uJE">Playthrough of the mod</a>
      </p>
      <p>
        <em>
            "The only way I can describe this is just... complete. It feels so well thought-out and is fantastically executed. 
            The puzzles are a well-made bonus instead of a crutch, the music is atmospheric and peaceful, and the gameplay, 
            while difficult, rarely feel unfair. A hearty round of applause for you, good sir.
        </em> <strong>-- a review by a player, found on Gamebanana</strong>
      </p>
      <p>
          Glyph is a mod for the popular 2d platformer called <a target="_blank" href="http://www.celestegame.com/">Celeste</a> I made myself. It includes over 250 rooms of gameplay, 
        custom assets (mostly re-colors of base-game assets), 50+ minutes of original music, and a large amount of custom code (written with C#). It's one of the most
        popular mods released for the game yet, with over 56 thousand views and 750 downloads.
      </p>
      <p>
          This was one of the more affirming experiences I've ever had working with video game design. What most excited me was the
        use of <a target="_blank" href="https://www.fmod.com/">FMOD</a> to integrate a fully dynamic musical score with the gameplay. The gimmick of the map revolves around traveling through portals
        to different dimensions. In each dimension, a different ambience and set of instrumentation accompanies the change of scenery. This was both a compositional challenge in a addition to a technical one,
        but the results were very effective. 
      </p>
      <p>
        I spent an upwards of 4 months total on creating this mod. Most of that time was spent coding custom mechanics and adding gameplay levels. I wrote the score for the game
        in about 2 weeks.
      </p>
      </>
    ),
  },
  sc2020: {
    name: 'Spring Collab 2020',
    imageKey: 'sc2020',
    imageContent: (
      <iframe 
        width="250" 
        height="300" 
        scrolling="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845548390&color=%2394745c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    ),
    writtenContent: (
      <div>
        This is a sample song from work I did for a community modding collaboration for the game <a target="_blank" href="http://www.celestegame.com/">Celeste</a>
      </div>
    ),
  },
  brookspark: {
    name: 'Brooks Park',
    imageKey: 'brookspark',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=3583524133/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://brookspark.bandcamp.com/album/stranger-nights-nothing-left-to-lose">Stranger Nights • Nothing Left To Lose by Brooks Park</a>
      </iframe>
    ),
  },
  luna: {
    name: 'Luna',
    imageKey: 'luna',
    writtenContent: (
      <em>
        Find the game available on Steam <a target="_blank" href="https://store.steampowered.com/app/666810/Luna/">here</a>
      </em>
    ),
  },
  ontothemoon: {
    name: 'On to the Moon',
    imageKey: 'ontothemoon',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1515720055/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://vespersails.bandcamp.com/album/on-to-the-moon">On to the Moon by Vesper Sails</a>
      </iframe>
    ),
  },
  sib: {
    name: 'Sib',
    imageKey: 'sib'
  },
  cheshireking: {
    name: 'Cheshire King',
    imageKey: 'cheshireking',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=1560218554/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://vespersails.bandcamp.com/album/cheshire-king">Cheshire King by Vesper Sails</a>
      </iframe>
    ),
  },
  intosilence: {
    name: 'Into Silence',
    imageKey: 'intosilence',
    imageContent: (
      <iframe
        width="250"
        height="300"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457891092&color=%2394745c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    ),
  },
  aloud: {
    name: 'Aloud',
    imageKey: 'aloud',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/track=2332123971/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://thedukeandthedauphin.bandcamp.com/track/aloud">Aloud by The Duke And The Dauphin</a>
      </iframe>
    ),
  },
  onisolation: {
    name: 'On Isolation',
    imageKey: 'onisolation',
    imageContent: (
      <iframe
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
          height: '412px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/album=51087116/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://thedukeandthedauphin.bandcamp.com/album/on-isolation">On Isolation by The Duke And The Dauphin</a>
      </iframe>
    ),
  },
}

export default projects;

