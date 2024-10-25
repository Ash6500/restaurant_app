import React from 'react'
import { Link } from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only  thing we are serious about is food.</p>
                </div>
                <p className="mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur labore tenetur expedita sit, enim delectus eos doloremque molestias adipisci provident earum, tempore at, in neque illum inventore eveniet? Eum ut repellendus iste qui quo, at, cum libero maiores aliquid suscipit amet repellat placeat debitis ratione earum optio ex temporibus?</p>
                <Link to={'/'}>
                    Explore menu
                    <span>
                        <HiArrowNarrowRight />
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About