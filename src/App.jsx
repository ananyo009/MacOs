import React, {} from 'react'
import "./app.scss"
import Doc from './components/Doc'
import Navbar from './components/Navbar.jsx'
import Window from './components/windows/window.jsx'
import Github from './components/windows/Github.jsx'
import Notes from './components/windows/Notes.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from './components/windows/Spotify.jsx'
import CLI from './components/windows/CLI.jsx'
import { useState } from 'react'
import Calender from './components/windows/Calender.jsx'

const App = () => {

  const [windowstate, setwindowstate] = useState({
    github: false,
    cli: false,
    spotify: false,
    note: false,
    calendar: false
  })

  
  return (
    <main>
      <Navbar />
      {windowstate.github && (
        <Github
          windowstate={windowstate}
          setwindowstate={setwindowstate}
          windowname="github"
        />
      )}
      {windowstate.note && (
        <Notes
          windowstate={windowstate}
          setwindowstate={setwindowstate}
          windowname="note"
        />
      )}
      {windowstate.resume && (
        <Resume
          windowstate={windowstate}
          setwindowstate={setwindowstate}
          windowname="resume"
        />
      )}
      {windowstate.spotify && (
        <Spotify
          windowstate={windowstate}
          setwindowstate={setwindowstate}
          windowname="spotify"
        />
      )}
      {windowstate.cli && (
        <CLI
          windowstate={windowstate}
          setwindowstate={setwindowstate}
          windowname="cli"
        />
      )}
      {windowstate.calendar && (<Calender windowname="calendar" windowstate={windowstate} setwindowstate={setwindowstate} />)}
      <Doc windowstate={windowstate} setwindowstate={setwindowstate} />
    </main>
  );
}

export default App