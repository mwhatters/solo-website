import React from "react"

const projects = {
  glyph: {
    name: 'Glyph',
    imageKey: 'glyph',
    imageContent: (
      <iframe
        title="glyph"
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
        <a target="_blank" rel="noreferrer" href="https://gamebanana.com/maps/209296">Link to Mod</a><br/>
          <a target="_blank" rel="noreferrer" href="https://youtu.be/0_xY7Gy5uJE">Playthrough of the mod</a>
      </p>
      <p>
        <em>
            "The only way I can describe this is just... complete. It feels so well thought-out and is fantastically executed. 
            The puzzles are a well-made bonus instead of a crutch, the music is atmospheric and peaceful, and the gameplay, 
            while difficult, rarely feel unfair. A hearty round of applause for you, good sir.
        </em> <strong>-- a review by a player, found on Gamebanana</strong>
      </p>
      <p>
          Glyph is a mod for the popular 2d platformer called <a target="_blank" rel="noreferrer" href="http://www.celestegame.com/">Celeste</a> I made myself. It includes over 250 rooms of gameplay, 
        custom assets (mostly re-colors of base-game assets), 50+ minutes of original music, and a large amount of custom code (written with C#). It's one of the most
        popular mods released for the game yet, with over 56 thousand views and 750 downloads.
      </p>
      <p>
          This was one of the more affirming experiences I've ever had working with video game design. What most excited me was the
        use of <a target="_blank" rel="noreferrer" href="https://www.fmod.com/">FMOD</a> to integrate a fully dynamic musical score with the gameplay. The gimmick of the map revolves around traveling through portals
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
        title="SpringCollab2020"
        width="250" 
        height="300" 
        scrolling="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/845548390&color=%2394745c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    ),
    writtenContent: (
      <div>
        This is a sample song from work I did for a community modding collaboration for the game <a target="_blank" rel="noreferrer" href="http://www.celestegame.com/">Celeste</a>.
        In this collaboration I contributed over 10 original songs, with dynamic layering included. I also designed a short level for the project. The full set of songs I composed
        will be available once the project is made publically available.
      </div>
    ),
  },
  brookspark: {
    name: 'Brooks Park',
    imageKey: 'brookspark',
    imageContent: (
      <iframe
        title="BrooksPark"
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
    writtenContent: (
      <div>
        <p>
          Brooks Park is a solo project created last year shortly after leaving Intercom. Inspired by lofi and DIY bands such as Dr Dog, Still Woozy, and Unknown Mortal Orchestra,
          Brooks Park features self-produced vocals, composition, instrumentation, and mixing. Drumming in the two tracks here were performed by Evan Kaiser. Thanks to Danielle Goldsmith for drum mixing assistance
          and James Meder of Pique Recording for mastering.
        </p>
        <p>
          It's been some time since I've worked on this project but I intend to keep producing music in this style. 
          The music can be found on Spotify and all major streaming platforms.
        </p>
      </div>
    ),
  },
  luna: {
    name: 'Luna',
    imageKey: 'luna',
    writtenContent: (
      <div>
        <p>
          <a target="_blank" rel="noreferrer" href="https://store.steampowered.com/app/666810/Luna/">Link to Game</a>
        </p>
        <p>
          <em>simple enough for anyone can pick up, yet challenging enough its hard to put down. Well worth the price tag.</em> -- <strong>customer review on steam store</strong>
        </p>
        <p>
          Luna is an original, full length 2d platformer I created in Unity over a 1.5 year period. It features the story of a character named Luna, 
          who much overcome their creator and defeat his powerful minions. The game is built around the concept of being able to rotate the world in which you are moving through, 
          thus affecting the gravity of the player and surrounding objects.
          It was released in August of 2017 and was my first attempt at designing a video game from scratch.
          Given my limitations on both a technical and visual level, I'm ultiamtely proud of this effort. 
        </p>
        <div>
          <p>
            <strong>Original Trailer</strong>
          </p>
          <iframe title="lunaTrailer" width="95%" height="315" src="https://www.youtube.com/embed/9YIxb9ar6mY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <br></br>
          <br></br>
        </div>
      </div>
    ),
  },
  ontothemoon: {
    name: 'On to the Moon',
    imageKey: 'ontothemoon',
    imageContent: (
      <iframe
        title="OnToTheMoon"
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
    writtenContent: (
      <div>
        <p>
          On To the Moon is the second feature-length album by my former band <b>Vesper Sails</b>. 
          It features Ian Harshman on lead guitar, David Adamiak on bass, 
          Evan Kaiser on drums, and myself on vocals, rhythm guitar, 
          keys, and (occasionally) saxaphone.
        </p>
        <p>
          This is likely Vesper Sail's last effort as a band, 
          for both Ian and myself have moved to different parts of the country to pursue different things. That being said,
          the four of us remain good friends to this day.
        </p>
      </div>
    ),
  },
  sib: {
    name: 'Sib',
    imageKey: 'sib',
    writtenContent: (
      <div>
        <p>
          <a target="_blank" rel="noreferrer" href="https://gamebanana.com/maps/209296">Link to Mod</a><br/>
          <a target="_blank" rel="noreferrer" href="https://youtu.be/k7FpchG9slQ">Playthrough of the mod</a>
        </p>
        <p>
          Sib is the first mod I made for the game <a target="_blank" rel="noreferrer" href="http://www.celestegame.com/">Celeste</a> and is noticably less polished
          than its successor, <a href="./?project=glyph">Glyph</a>. It is still fondly enjoyed by the community, however.
        </p>
        <p>
          The project features a 12-minute soundtrack I composed myself. You can listen to it <a target="_blank" rel="noreferrer" href="https://soundcloud.com/lushboy-studios/sets/sib-the-crane-soundtrack">on Soundcloud</a>
        </p>

      </div>
    ),
  },
  cheshireking: {
    name: 'Cheshire King',
    imageKey: 'cheshireking',
    imageContent: (
      <iframe
        title="CheshireKing"
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
    writtenContent: (
      <div>
        <p>
          Cheshire Kind is the first full-length feature album by my old band <b>Vesper Sails</b>.
          It features Ian Harshman on lead guitar, David Adamiak on bass,
          Evan Kaiser on drums, and myself on vocals, rhythm guitar,
          keys, and (occasionally) saxaphone.
        </p>
        <p>
          The recording engineer for this album was James Meder, who also mixed the tracks.
        </p>
      </div>
    ),
  },
  intosilence: {
    name: 'Into Silence',
    imageKey: 'intosilence',
    imageContent: (
      <iframe
        title="IntoSilence"
        width="250"
        height="300"
        scrolling="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457891092&color=%2394745c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
      </iframe>
    ),
    writtenContent: (
      <div>
        <p>
          Into Silence is an individual track I did some time ago. 
          The entirety of the track was made within a week, and release a few days after that.
          It features a 5/4 polyrhythm that persists through the track, a rhythm that I was very fond of
          at the time.

          All instrumentation, mixing and mastering, and artwork done by myself.
        </p>
      </div>
    ),
  },
  aloud: {
    name: 'Aloud',
    imageKey: 'aloud',
    imageContent: (
      <iframe
        title="Aloud"
        style={{
          border: '2px solid rgb(122, 122, 111)',
          width: '270px',
        }}
        src="https://bandcamp.com/EmbeddedPlayer/track=2332123971/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
        seamless>
        <a href="http://thedukeandthedauphin.bandcamp.com/track/aloud">Aloud by The Duke And The Dauphin</a>
      </iframe>
    ),
    writtenContent: (
      <div>
        <p>
          Aloud is a song by an old folk project of mine called <a target="_blank" rel="noreferrer" href="http://thedukeandthedauphin.bandcamp.com">The Duke And The Dauphin</a>,
          a duo consisting of me doing the music, and my friend Jeffrey Mull writing the words. This is a remake of a demo recorded back in 2012.
        </p>
      </div>
    ),
  },
  onisolation: {
    name: 'On Isolation',
    imageKey: 'onisolation',
    imageContent: (
      <iframe
        title="OnIsolation"
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
    writtenContent: (
      <div>
        <p>
          On Isolation is the last album of an old folk project of mine called <a target="_blank" rel="noreferrer" href="http://thedukeandthedauphin.bandcamp.com">The Duke And The Dauphin</a>,
          a duo consisting of me doing the music, and my friend Jeffrey Mull writing the words.
        </p>
        <p>
          These three songs were written, recorded, mixed, mastered, and released in a single week.
        </p>
      </div>
    ),
  },
}

export default projects;

