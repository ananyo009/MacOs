import React from 'react'
import '../components/nav.scss'
import Datetime from './Datetime'

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="./navicons/apple.svg" alt="" />
        </div>
        <div className="nav-item">
          <p>Ananyo Mitra</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="wifi-icon">
          <img src="./navicons/wifi.svg" alt="" />
              </div>
              <div className="nav-item">
                  <Datetime/>
              </div>
              
      </div>
    </nav>
  );
}

export default Navbar