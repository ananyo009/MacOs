import React from 'react'
import Window from './window'
import "./resume.scss"

const Resume = ({windowname,windowstate,setwindowstate}) => {
  return (
      <Window windowname={windowname} setwindowstate={setwindowstate}>
          <div className="resume-viewer">
              
          <embed src="/resume.pdf" frameborder="0"></embed>

          </div>
    </Window>
  )
}

export default Resume

