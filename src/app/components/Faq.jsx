"use client"

import React, { useState } from 'react'
import data from '@/utils/data'

const FrequentlyAskedQuestion = () => {
  const [show, setShow] = useState(false)
  const [id, setId] = useState(null)
  const handleDrop = (val) => {
     setId(prevOpenId => (prevOpenId === val ? null : val));
     setShow(true)
     }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className='faq-container'>
      <div className='faq-box'>
        <h1>Frequently Asked Questions</h1>
        <div className='order-faq'>
          <ul>
            {data.map((items, index) => {
              return (
                <li key={items.id}>
                  <h3>
                    <button onClick={() => {handleDrop(items.id) }}>
                      <span>{items.key}</span>
                      <svg style={{ transform: show && id === items.id ? 'rotate(45deg)' : '' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"></path>
                      </svg>
                    </button>
                  </h3>
                  {show && id=== items.id && <div className='faq-text'>{items.value}</div>}
                </li>
              )
            })}
          </ul>
        </div>
             <div className='sub-container'>
          <form className='sub-form'>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='input-container'>
            <input className='input-sub' placeholder='Email address'/>
            <button onClick={(e)=>{handleSubmit(e)}} className='btn-signup'>Get Started {">"}</button>
          </div>
          </form>          
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestion