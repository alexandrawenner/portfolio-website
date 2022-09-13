import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/portfolio1.png'
import IMG2 from '../../images/portfolio2.png'
import IMG3 from '../../images/portfolio3.png'
import IMG4 from '../../images/portfolio4.png'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'Broadway Hub',
    github: 'https://github.com/alexandrawenner/Capstone-Project',
    demo: 'https://www.linkedin.com/posts/alexandra-wenner_softwareengineering-capstoneproject-flatiron-activity-6969409376784654336-Q8Ft?utm_source=share&utm_medium=member_desktop',
    website: ''
  },
  {
    id: 2,
    image: IMG3,
    title: 'Nu Vibration',
    github: 'https://github.com/alexandrawenner/nu-vibration-app',
    demo: 'https://www.linkedin.com/posts/victorzarour_softwareengineer-developer-reactjs-activity-6961407246501089280-ofIK?utm_source=share&utm_medium=member_desktop',
    website: 'https://releasethewiggle.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG2,
    title: 'Indie Hub',
    github: 'https://github.com/alexandrawenner/my-app-frontend',
    demo: 'https://www.linkedin.com/posts/alexandra-wenner_ruby-fullstackdevelopment-flatiron-activity-6960009491044016128-6f9G?utm_source=share&utm_medium=member_desktop',
    website: 'https://indie-hub.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Task Daily',
    github: 'https://github.com/alexandrawenner/productivity-app-attempt2',
    demo: 'https://www.linkedin.com/posts/alexandra-wenner_react-project-flatiron-activity-6960007593662500865-eV1y?utm_source=share&utm_medium=member_desktop',
    website: ''
  },
]

const Portfolio = () => {  
  return (
    <section id='portfolio'>
      <div className='port__header'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </div>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo, website}) => {
            return(
              <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn' target='_blank'>Live Demo</a>
                  <a href={website} className='btn' target='_blank'>Visit Website</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio