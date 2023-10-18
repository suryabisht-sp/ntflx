import React, { useRef, useState } from 'react';

const VideoStreaming = ({modalOff}) => {
  const vidRef = useRef()
  const data = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
  ]

  // Generate a random index to select a video URL
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomVideoUrl = data[randomIndex];
 const[isplaying, setIsPlaying]=useState(false)
  const handlePlay = () => {
    // const data= vidRef.current.play()
    vidRef.current.play()
    setIsPlaying(true)
  }

  const handlePause = () => {
    // const data= vidRef.current.play()
    vidRef.current.pause()
    setIsPlaying(false)
  }
  const handleFullScreen = () => {
    const elem = vidRef.current;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }


  const handleClose = () => {
    modalOff(false)
  }
  return (
    <div style={{ zIndex: "2", display: "flex", justifyContent:"center"  }}>
      <div style={{ zIndex: "2", position: "absolute", width:"70%", top:"10%"}}>
       <button className='btn-newclose play-btn' onClick={() => { handleClose() }}>x</button>
         <video ref={vidRef} style={{ width: "100%", height: "auto",border:"1px solid #ffffff12" }}>
          <source src={randomVideoUrl} type="video/mp4" />
        </video>  
      {!isplaying ?
        <button className='btn-play play-btn' onClick={() => { handlePlay() }}>&#9654;</button>    
      :<button className='btn-play play-btn' onClick={() => { handlePause() }}>&#8545;</button>}
      {isplaying && <button className='btn-full play-btn' onClick={() => { handleFullScreen() }}>
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%" fill='#fff'>
          <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
          <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
          <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
          <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
        </svg>
      </button>}
      </div>
      </div>
  );
}

export default VideoStreaming;
