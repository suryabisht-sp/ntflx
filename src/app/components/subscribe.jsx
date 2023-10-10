import React from 'react'

const Subscribe = () => {
  return (
    <div >
      <div className='background-img'>

      <img alt=""
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"></img>
        </div>
      <div className='subscribe-container'>
        <h1>
          The biggest Indian hits. The best Indian stories. All streaming here.
        </h1>
        <p>
          Watch anywhere. Cancel anytime.
        </p>
        <div className='sub-container'>
          <form className='sub-form'>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='input-container'>
            <input className='input-sub' placeholder='Email address'/>
            <button className='btn-signup'>Get Started {">"}</button>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Subscribe;