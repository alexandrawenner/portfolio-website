import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience __container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content"></div>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>React.js</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
        <div className='experience__backend'></div>
          <h3>Backend Developemt</h3>
          <div className="experience__content"></div>
          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Ruby on Rails</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Active Record</h4>
            <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
            <BsFillPatchCheckFill />
            <h4>Sinatra</h4>
            <small className='text-light'>Experienced</small>
          </article>
      </div>
    </section>
  )
}

export default Experience