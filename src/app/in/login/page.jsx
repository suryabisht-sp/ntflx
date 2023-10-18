"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Login = () => {
  const [logoWidth, setLogoWidth] = useState(175);
  const [email, setEmail] = useState("")
  const [pass, setPassword] = useState("")
  
  const handlePass = (e) => {
    setPassword(e.target.value)    
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const router = useRouter()
  const rty = async () => {
    const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3baee63a22msh441e48c4e4dee8cp1bbcd9jsn081d3ae72a13',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
} catch (error) {
	console.error(error);
}
}

useEffect(()=>{
  rty()
},[])

  useEffect(() => {
    const handleResize = () => {
      const layerElement = document.querySelector('.layer');
      if (layerElement) {
        if (window.innerWidth <= 767) {
          setLogoWidth(100);
          if (layerElement) {
            layerElement.style.backgroundColor = 'black';
          }
          // Set width to 80 for mobile devices
        } else {
          layerElement.style.backgroundColor = '#0000009e';
          setLogoWidth(175); // Reset to default width for larger screens
        }
      };
    }
    handleResize(); // Call the function on initial render
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleclick = (e) => {
    e.preventDefault();
    if (!pass) {
      alert("Email or password missing")
      return
    }
        if (!pass) {
      alert("Email or password missing")
      return
    }
   sessionStorage.setItem("user",email)
    router.push("../in/watching")
  }

  return (
    <div className='login-container'>
      <div className='layer'></div>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt="" />
      <span className="logo" >
        <svg xmlns="http://www.w3.org/2000/svg" width={logoWidth} height="52px" viewBox="0 0 512 138"><path fill="#DB202C" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0h21.562ZM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012H512ZM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05l-21.562.004ZM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448H164.58ZM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45ZM48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49l28.08 77.842Zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78Z" /></svg>
      </span>
      <div className='form-container'>
        <div className='layer'>
      <form className='form'>
        <h3>Sign In</h3>
        <div className='input-container'>
          <input defaultValue={email} onChange={(e)=>{handleEmail(e)}} type='text' placeholder='Email or phone number' autoComplete='false' required/>
          <input defaultValue={pass} onChange={(e)=>{handlePass(e)}} type='password' placeholder='Password' autoComplete='false' required/>
        </div>
            <button onClick={(e)=>{handleclick(e)}}>Sign In</button>
            <div className='rem'>
              <div className='check1'>
              <input className='checkbox' type='checkbox' />
            <span>Remember me</span>
              </div>
              <span>Need help?</span>
              </div>
          </form>
          <div className='login-text'>
            <span>New to Netflix? <span className='blue'>Sign up now.</span></span>
           <div className='net-text'>
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            </span>
              <span className='blue1'> Learn more.</span>
              </div>
          </div>
        </div>
      </div>
       <div className='footer-container'>
      <div className='footer-box'>
        Questions? Call <span> 000-800-919-1694</span>
        <div className='list-start'>
          <ul className='footer-list'>
            <li>FAQ</li>
            <li>
              Help Centre</li>
            <li>
              Terms of Use 
              </li>
            <li>Privacy
            </li>
            <li>Cookie Preferences
            </li>
            <li>
              Corporate Information
            </li>            
          </ul>
        </div>     
          <div className="drop-select">
             <select name="LanguageSelect" className='select' >
              <option className="option" lang="en" label="English" defaultValue="en-IN">English</option>
              <option className="option"  lang="hi" label="हिन्दी" defaultValue="hi-IN">हिन्दी</option></select>
          </div>
         </div>
    </div>
    </div>
  )
}

export default Login
