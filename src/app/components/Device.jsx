import React from 'react'

const Device = () => {
  return (
    <div className='Device-container'>
      <div className='device-box'>
        <div>
          <h1>
            Watch everywhere
          </h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </h3>
        </div>
        <div className=''>
          <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />
          <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="">
            <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" /></video>
        </div>
      </div>
    </div>
  )
}

export default Device