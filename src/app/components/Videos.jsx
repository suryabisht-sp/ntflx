import React, { useRef, useState } from 'react';

const Videos = () => {
  const vidRef=useRef()
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

  const handlePlay = () => {
    // const data= vidRef.current.play()
      vidRef.current.play() 
  }


  return (
    <div style={{ zIndex: "2" }}>
      <div>
      <video ref={vidRef} style={{ width: "100%", height: "auto", }}>
        <source src={randomVideoUrl} type="video/mp4" />
      </video>
</div>
        <button className='btn-play' onClick={() => { handlePlay() }}>Play</button>
      <div className='add-new'>
         <span>+</span>
      </div>
    </div>
  );
}

export default Videos;
