import React, { useEffect } from 'react'
import { useState } from 'react'
import Markdown from 'react-markdown'
import Window from './window'
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./notes.scss"


const Notes = ({windowname,windstate,setwindowstate}) => {

    const [markdown, setmarkdown] = useState(null)

    useEffect(() => {
        fetch('/note.txt')
            .then(res => res.text())
            .then(text => setmarkdown(text))
    }, [])
    

  return (
      <Window windowname={windowname} setwindowstate={setwindowstate}>
          <div className="note-viewer">
              {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>:<p>Loading...</p>}
          </div>
    </Window>
  )
}

export default Notes