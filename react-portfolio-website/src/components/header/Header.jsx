import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/me.JPG'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5 className='text-light'>Hi there! I am</h5>
        <h1>Alexandra Wenner</h1>
        <h5 className='text-light'>a Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        {/* <a href= "#contact" className='scroll_down'>Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header