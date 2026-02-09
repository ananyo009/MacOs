import React from 'react'
import '../components/doc.scss'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Doc = ({windowstate,setwindowstate}) => {
  return (
    <footer className="Dock">
      <div
        className="icon github"
        onClick={() => setwindowstate((state) => ({ ...state, github: true }))}
      >
        <img src="./docIcons/github.svg" alt="" />
      </div>
      <div
        className="icon calender"
        onClick={() => setwindowstate((state) => ({ ...state, calendar: true }))}
      >
        <img src="./docIcons/calender.svg" alt="" />
      </div>
      <div
        className="icon note"
        onClick={() => setwindowstate((state) => ({ ...state, note: true }))}
      >
        <img src="./docIcons/note.svg" alt="" />
      </div>
      <div
        className="icon mail"
        onClick={() => {
          window.open("mailto:ananyomitra310@gmail.com", "_blank");
        }}
      >
        <img src="./docIcons/mail.svg" alt="" />
      </div>
      <div
        className="icon pdf"
        onClick={() => setwindowstate((state) => ({ ...state, resume: true }))}
      >
        <img src="./docIcons/pdf.svg" alt="" />
      </div>
      <div
        className="icon spotify"
        onClick={() => setwindowstate((state) => ({ ...state, spotify: true }))}
      >
        <img src="./docIcons/spotify.svg" alt="" />
      </div>
      <div
        className="icon link"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/ananyo-mitra-993560280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            "_blank",
          );
        }}
      >
        <img src="./docIcons/link.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => setwindowstate((state) => ({ ...state, cli: true }))}
      >
        <img src="./docIcons/cli.svg" alt="" />
      </div>
    </footer>
  );
}

export default Doc