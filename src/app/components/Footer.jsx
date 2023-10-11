import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-box'>
        Questions? Call <span> 000-800-919-1694</span>
        <div className='list-start'>
          <ul className='footer-list'>
            <li>FAQ</li>
            <li>
              Help Centre</li>
            <li>
              Account</li>
            <li>Media Centre
            </li>
            <li>Investor Relations
            </li>
            <li>
              Jobs
            </li>
            <li>Ways to Watch
            </li>
            <li>Terms of Use  </li>
            <li>Privacy</li>
            <li>
              Cookie Preferences</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>     
          <div className="drop-select">
             <svg className='language-option' width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="white"></path></svg>
              <select name="LanguageSelect" className='select' >
              <option className="option" lang="en" label="English" defaultValue="en-IN">English</option>
              <option className="option"  lang="hi" label="हिन्दी" defaultValue="hi-IN">हिन्दी</option></select>
          </div>
        <div className='netflix-india'>Netflix India</div>
      </div>
    </div>
  )
}

export default Footer