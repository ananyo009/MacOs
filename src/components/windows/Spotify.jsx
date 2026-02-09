import React from 'react'
import Window from './window';
import "./spotify.scss"

const Spotify = ({ windowname, setwindowstate }) => {
  return (
    <Window width='20vw' windowname={windowname} setwindowstate={setwindowstate}>
      <div className="spotify">
        <iframe
          data-testid="embed-iframe"
          style={{borderRadius: "12px"}}
          src="https://open.spotify.com/embed/playlist/0i2S0eEdftTrmLKueMWUKX?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </Window>
  );
}

export default Spotify