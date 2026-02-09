import React from 'react'
import '../windows/window.scss'
import { Rnd } from 'react-rnd'


const Window = ({children, width="35vw", height="60vh" ,windowname , windowstate, setwindowstate}) => {
    return (
        <Rnd
            default={{
                width: width,
                height: height,
                x: 300,
                y:100
            }}
        >
            <div className='windows'>
          <div className="nav">
              <div className="dots">
                        <div className="dot red"
                            onClick={() => {setwindowstate(state=>({...state,[windowname]:false}))
                            
                        }}
                        ></div>
                 <div className="dot yellow"></div>
                 <div className="dot green"></div>
              </div>
                    <div className="title">
                        <p>AnanyoMita -zsh</p>
                    </div>
          </div>
                <div className="main-content">
                    {children}
          </div>
          
        </div>
        </Rnd>
      
  )
}

export default Window