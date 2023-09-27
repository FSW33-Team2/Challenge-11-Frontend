import "video-react/dist/video-react.css"; // import css

import React from 'react';
import { Player, ControlBar, ReplayControl } from 'video-react';

export default props => {
  return (
    <Player
      playsInline
      poster="https://upload.wikimedia.org/wikipedia/id/0/0d/Avengers_Endgame_poster.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >

      

     <ControlBar autoHide={false}>
        <ReplayControl seconds={5} order={2.1} />
      </ControlBar>
      
    </Player>
  );
};
