import React from 'react'
import './about.css'
import ME from '../../images/me2.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image"></img>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 Year</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>Completed Projects</small>
          </article>

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 Year</small>
          </article>
        </div>

        <p>
          I am a Software Engineer with a passion for Design! I believe the design process ties everything together in the end. While I am a Full-stack Developer, that is why I love the frontend. I can create complex functions and style them to ensure they work as a pair.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About