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
        <img src="./public/docIcons/github.svg" alt="" />
      </div>
      <div
        className="icon calender"
        onClick={() => setwindowstate((state) => ({ ...state, calendar: true }))}
      >
        <img src="./public/docIcons/calender.svg" alt="" />
      </div>
      <div
        className="icon note"
        onClick={() => setwindowstate((state) => ({ ...state, note: true }))}
      >
        <img src="./public/docIcons/note.svg" alt="" />
      </div>
      <div
        className="icon mail"
        onClick={() => {
          window.open("mailto:ananyomitra310@gmail.com", "_blank");
        }}
      >
        <img src="./public/docIcons/mail.svg" alt="" />
      </div>
      <div
        className="icon pdf"
        onClick={() => setwindowstate((state) => ({ ...state, resume: true }))}
      >
        <img src="./public/docIcons/pdf.svg" alt="" />
      </div>
      <div
        className="icon spotify"
        onClick={() => setwindowstate((state) => ({ ...state, spotify: true }))}
      >
        <img src="./public/docIcons/spotify.svg" alt="" />
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
        <img src="./public/docIcons/link.svg" alt="" />
      </div>
      <div
        className="icon cli"
        onClick={() => setwindowstate((state) => ({ ...state, cli: true }))}
      >
        <img src="./public/docIcons/cli.svg" alt="" />
      </div>
    </footer>
  );
}

export default Doc