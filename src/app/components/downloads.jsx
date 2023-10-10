import React from 'react'

const Downloads = () => {
  return (
    <div className='download-container'>
      <div className='download-sub'>
        <div>
          <img style={{
            width: "479px",
            height: "380px"
          }} alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          <div className='card-download'>
            <div className='image-div'>
            <img alt="" style={{height:"80px"}} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
             </div>
              <div>
            <div className='strange'>Stranger Things
            </div>
            <div className='downloading' >Downloading...</div>
          </div>
          <div>
            </div>
          </div>
        </div>
          <div className='download-text'>
        <h1>
          Download your shows to watch offline
        </h1>
        <h3>
          Save your favourites easily and always have something to watch.
        </h3>
      </div>
      </div>
      </div>
    )
}

export default Downloads