"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Videos from './Videos'

const Modal = ({items, modalOff }) => {
//   const items={
//     "title": "Django Unchained",
//     "boxart": "http://cdn0.nflximg.net/images/3530/11573530.jpg",
//     "trackId": 13462372,
//     "playerUrl": "http://www.netflix.com/WiPlayer?movieid=70230640&trkid=13462372",
//     "titleId": 70230640
// }
  const [title, setTitle] = useState()
  const rty = async () => {
    const url = `https://jimov-api.vercel.app${items?.url}`;
    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTitle(result)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!items?.boxart) {
      rty()
    }
    setTitle()
  }, [items])

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [show, setShow] = useState(false)

  let mouseOverTimeout;

  useEffect(() => {
    if (items?.boxart) { 
      setTitle()
    }

  if (isMouseOver) {
      mouseOverTimeout = setTimeout(() => {
        setShow(true)
      }, 2000); // Trigger after 2 seconds
    } else {
      clearTimeout(mouseOverTimeout);
    }
    return () => {
      clearTimeout(mouseOverTimeout); // Cleanup on component unmount or when isMouseOver changes
    };
  }, [isMouseOver]);

  const mouseOut = () => {
    setIsMouseOver(false)
    setShow(false)
  }

  const handleClose = () => {
    modalOff(false)
  }

  return (
    <div className='modal-cont'>
      <button onClick={() => { handleClose() }}>X</button>
        <div></div>
      <div className='modal-box'> 
        <div className='modal-sub-box'>
          <div className='video-box' style={{ width:"50%" }} >
            {!show ?
              <div style={{ width:"50%" }}>
                {items?.boxart ? <img alt="" src={items?.boxart}
                  onMouseOver={() => setIsMouseOver(true)}
                  onMouseOut={() => mouseOut()} />
                  :
                  <img alt="" src={title?.image?.url}
                    onMouseOver={() => setIsMouseOver(true)}
                    onMouseOut={() => mouseOut()} />}
              </div> :
              <Videos />
            }
        </div>
        <div className='video-box-text' onMouseOut={() => mouseOut()}>
            <ul>
              {items?.boxart &&
                <div className='video-img'>
                    <img src={items?.boxart} style={{ width:"50px" }} />
                    <div className='image-epi'>
                      <span>{items?.title}</span>
                      <span> Episode 1 </span>
                    </div>
                  </div>}
            {title && title?.episodes?.map((epi, index) => {
              return (
                <li>
                  <div className='video-img'>
                    <img src={epi?.image} style={{ width:"50px" }} />
                    <div className='image-epi'>
                      <span>{epi?.name}</span>
                      <span> {epi?.number}</span>
                    </div>
                  </div>
                </li>)
            })}
            <li></li></ul>
        </div>
</div>  
        </div>
    </div>
  )
}

export default Modal