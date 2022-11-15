import React from 'react'
import IMG1 from "../assets/portfolio1.jpg"
import "./Projects.css"

const Projects = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className="btn">Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projects