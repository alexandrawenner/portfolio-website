import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio_item-image'>

          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com/alexandrawenner" className='btn' target='_blank'>Github</a>
          <a href="https://www.linkedin.com/posts/alexandra-wenner_softwareengineering-capstoneproject-flatiron-activity-6969409376784654336-Q8Ft?utm_source=share&utm_medium=member_desktop" className='btn' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio