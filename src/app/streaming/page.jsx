"use client"

import React, { createRef, useEffect, useState } from 'react'
import { Documentries } from '@/utils/Documentries';
import Image from 'next/image';
import { action } from "@/utils/Action&Adventure"
import { movies } from '@/utils/Movie';
import { Drama } from '@/utils/Drama';
import Modal from '../components/modal';
import { useRouter } from 'next/navigation';
import Loader from '../components/loader';
import dataCar from '@/utils/carousalData';

const Streaming = () => {
  const [logoWidth, setLogoWidth] = useState();
  const [avail, setAvail] = useState()
  const [title, setTitle] = useState()
  const [data, setData] = useState();
  const [show, setShow] = useState(false)
  const modalRef = createRef();
  const router = useRouter()
  const [showdata, setShowData] = useState(false)
  const [avat, setAvat] = useState()
  const rty = async () => {
    const url = 'https://jimov-api.vercel.app/anime/flv/filter?gen=accion&status=finalizado&ord=1&page=1';
    const options = {
      method: 'GET',
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setTitle(result.results)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    rty()
    setAvat(sessionStorage.getItem("avatar"))
  }, [])

  useEffect(() => {
    const data = sessionStorage.getItem("user")
    const avatar = sessionStorage.getItem("avatar")
    if (!data) {
      router.push("./in/login")
    }
    if (data) {
      if (!avatar) {
        router.push("./in/login")
      }
      else {
        setShowData(true)
      }
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const layerElement = document.querySelector('.layer');
      if (window.innerWidth <= 767) {
        setLogoWidth(100);
        if (layerElement) {
          layerElement.style.backgroundColor = 'black';
        }
        // Set width to 80 for mobile devices
      } else {
        setLogoWidth(175); // Reset to default width for larger screens
        // layerElement.style.backgroundColor = '#0000009e';
      }
    };
    handleResize(); // Call the function on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [showdata]);

  const handleStream = (items) => {
    setData()
    setData(items)
    setShow(true)
  }

  useEffect(() => {
    if (showdata) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShow(true);
            observer.disconnect(); // Stop observing once modal is shown
          }
        },
        {
          threshold: 0.5, // Adjust threshold as needed
        }
      );
      observer.observe(modalRef.current);
      return () => {
        observer.disconnect(); // Clean up observer on component unmount
      };
    }
  }, []);

  const logout = () => {
    sessionStorage.clear()
    router.push("/")
  }

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % dataCar.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

 
  return (
    <>{showdata ?
      <div className='home-container1'>
        <div className="slide-container">
          {dataCar.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === slideIndex ? 'active' : ''}`}
            >
              <img src={slide.poster} alt={slide.name} />
              <div className='slide-text'>
                <h1 className='slide-text1'>Tv Series</h1>
                <h2 className='slide-text2'>{slide.name}</h2>
                {logoWidth > 100 && <p>{slide.description}</p>}
              </div>
            </div>
          ))}
          <div className='btn-box'>
            <button className='lecture'>&#9654; {logoWidth > 100 && "Lecture"}</button>
            <button className='list'>+ {logoWidth > 100 && "My List"}</button>
          </div>
        </div>
        <div className='layer'></div>
        <span className="logo" >
          <svg xmlns="http://www.w3.org/2000/svg" width={`${logoWidth}px`} height="52px" viewBox="0 0 512 138"><path fill="#DB202C" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0h21.562ZM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012H512ZM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05l-21.562.004ZM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448H164.58ZM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45ZM48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49l28.08 77.842Zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78Z" /></svg>
        </span>
        <div className='avatar'>
          <span> Hello User</span>
          <button className='btn-clse' onClick={() => { logout() }}>LogOff</button>
          <img src={avat} alt='' />
        </div>
        <span className='text'>Documentaries</span>
        <div className='home-container'>
          {Documentries && Documentries.map((items, index) => {
            return (
              <div key={index} className='card' onClick={() => { handleStream(items) }}>
                <Image className='image1' alt="" width={250} height={175} src={items?.boxart} />
              </div>
            )
          })}
        </div>
        <span className='text2'>Action & Adventure</span>
        <div className='home-container2'>
          {action && action.map((items, index) => {
            return (
              <div key={index} className='card' onClick={() => { handleStream(items) }}>
                <Image className='image1' alt="" width={250} height={175} src={items?.boxart} />
              </div>
            )
          })}
        </div>
        <span className='text3'>All Movies</span>
        <div className='home-container3'>
          {movies && movies.map((items, index) => {
            return (
              <div key={index} className='card' onClick={() => { handleStream(items) }}>
                <Image className='image1' alt="" width={250} height={175} src={items?.boxart} />

              </div>
            )
          })}
        </div>
        <span className='text4'>Dramas</span>
        <div className='home-container4'>
          {Drama && Drama.map((items, index) => {
            return (
              <div key={index} className='card' onClick={() => { handleStream(items) }}>
                <Image className='image1' alt="" width={250} height={175} src={items?.boxart} />

              </div>
            )
          })}
        </div>
        <span className='text5'>Anime</span>
        <div className='home-container5'>
          {title && title.map((items, index) => {
            return (
              <div key={index} className='card' onClick={() => { handleStream(items) }}>
                <Image className='image1' alt={items.name} width={250} height={175} src={items?.image} />
              </div>
            )
          })}
        </div>
        <div ref={modalRef} className={`modal-pop ${show ? 'visible' : 'hidden'}`} >
          {show && <Modal items={data} modalOff={setShow} />}
        </div>
      </div > :
      <Loader />}
    </>
  )
}

export default Streaming
