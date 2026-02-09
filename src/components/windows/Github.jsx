import React from 'react'
import Window from '../windows/window.jsx'
import "../windows/github.scss"
import githubData from "../../assets/github.js"

const GithubCard = (data) => {


    return <div className="card">
            <img src={data.image} alt="" />
            <h1>{data.title}</h1>
            <p className='desc'>{data.description}</p>
            <div className="tags">
            {data.tech.map(tag => <p className='tag'>{tag}</p>)}
            </div>
            <div className="url">
            <a target='_blank' href={data.repoLink}>Repo link</a>
                <a target='_blank' href={data.demoLink}>Demo link</a>
            </div>
        </div>
}

const Github = ({windowname, windowstate , setwindowstate}) => {

    githubData.map((elem) => {
        // console.log(GithubCard(elem))
        GithubCard(elem)
    })

  return (
      <Window windowname={windowname} setwindowstate={setwindowstate} windowstate={windowstate}>
          <div className="cards">
              {githubData.map((project) => {
                  return GithubCard(project)
              })}
          </div>
    </Window>
  )
}

export default Github