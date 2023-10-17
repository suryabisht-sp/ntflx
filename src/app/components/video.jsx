import React from 'react'

const Video = () => {
  return (
    <div className='video-comp'> 
<div className='video-sub-comp'>
      <div className='video-text'>
      <h1>
        Enjoy on your TV
      </h1>
      <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
      </div>
        <div className='common-video'>
          <img className='img-1' alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" />
        <video muted autoPlay playsInline loop>
          <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"></source>
        </video>
        </div>
  </div>
      </div>
  )
}

export default Video