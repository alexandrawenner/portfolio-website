import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <div className='exp__header'>
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        
        {/* END OF FRONTEND/ BEGINNING OF BACKEND */}

        <div className='experience__backend'>
          <h3>Backend Developemt</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Ruby on Rails</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Active Record</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sinatra</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience