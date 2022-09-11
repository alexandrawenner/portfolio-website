import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/alexandra-wenner/"><BsLinkedin /></a>
        <a href="https://github.com/alexandrawenner"><BsGithub /></a>
      </div>

      {/* <div className='footer__copyright'>
        <small>&copy; </small>
      </div> */}

    </footer>
  )
}

export default Footer