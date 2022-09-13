import React from 'react'
import './about.css'
import ME from '../../images/me2.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

const About = () => {
  return (
   <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    {/* <div className='about__header'>
    </div> */}

    <div className='container about__container'>
      <div className='about__me'>
        <div className="about__me-image">
          <img src={ME} alt="About Image"></img>
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='blog__card'>
            <BsReverseLayoutTextWindowReverse className='about__icon'/>
            <h5 className='blog__text'>
              <a href='https://medium.com/@alexandrawenner05'>Blogs</a>
            </h5>
          </article>

           {/* <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5><a href='#projects' onClick={('#projects')}>Projects</a></h5>
          </article> */}

          {/* <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 Year</small>
          </article> */}
        </div>

        <p>
          I am a Software Engineer with a passion for Design! I believe the design process ties everything together in the end. While I am a Full-stack Developer, that is why I love the frontend. I can create complex functions and style them to ensure they work as a pair.
        </p>

        <p>
          I love learning new things and I am excited to seek out any opportunities to code and collaborate on a team to showcase and strengthen my abilities. 
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About