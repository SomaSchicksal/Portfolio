import React from 'react'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur debitis ab consequatur ullam qui quidem perspiciatis asperiores. Soluta repudiandae accusamus aspernatur iure sint ullam aliquam laborum recusandae, alias tenetur cupiditate?</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About