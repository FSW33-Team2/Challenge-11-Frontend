'use client'
import React from 'react'
import { Carousel } from '@material-tailwind/react'

import "video-react/dist/video-react.css"; // import css
import {Player, BigPlayButton} from 'video-react'


export default function CarouselCustomNavigation() {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      
        <Player
            playsInline
            poster="/GameListPageImage/traditional.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        > 
        <BigPlayButton position="center"></BigPlayButton>  

        </Player>
     
     

    
      <Player
            playsInline
            poster="/GameListPageImage/pubg.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        > 
        <BigPlayButton position="center"></BigPlayButton>  

        </Player>
    
     

     
      <Player
            playsInline
            poster="/GameListPageImage/free-fire.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        > 
        <BigPlayButton position="center"></BigPlayButton>  

        </Player>
  
    
    </Carousel>
  )
}
