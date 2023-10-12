"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Modal = ({ items, modalOff }) => {
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
    rty()
  }, [items])

  const [vData, setVData] = useState()
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [show, setShow] = useState(false)

  let mouseOverTimeout;

  const videoData = async () => {
    setShow(true)
    // const url = `https://jimov-api.vercel.app/anime/flv/episode/one-piece-film-red-1`;
    const options = {
      method: 'GET',
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setVData(result)
      console.log("result", result?.servers[0]?.url)

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isMouseOver) {
      mouseOverTimeout = setTimeout(() => {
        videoData();
      }, 2000); // Trigger after 2 seconds
    } else {
      clearTimeout(mouseOverTimeout);
    }
    return () => {
      clearTimeout(mouseOverTimeout); // Cleanup on component unmount or when isMouseOver changes
    };
  }, [isMouseOver, vData]);

  const mouseOut = () => {
    setIsMouseOver(false)
    setShow(false)
  }

  const handleClose = () => {
    modalOff(false)
  }
  return (
    <div className='modal-1'>
      <button onClick={() => { handleClose() }}>Close</button>
      <div className='layer-modal'></div>
      <div className='episodes' >
        <div className='image-box'>
          {!show ?
            <div>
              <img alt="" fill={true} src={title?.image?.url}
                onMouseOver={() => setIsMouseOver(true)}
                onMouseOut={() => mouseOut()} />
            </div> :
            <div>
              <video controls loop autoPlay style={{ width: "100%", height: "auto" }}>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
              </video>
            </div>
          }
        </div>
        <div className='episode-sub' onMouseOut={() => mouseOut()}>
          <ul>
            {title && title?.episodes?.map((epi, index) => {
              return (
                <li>
                  <div className='list'>
                    <img src={epi?.image} style={{ width: "50px" }} />
                    <div className='list-text'>
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
  )
}

export default Modal