import React from 'react'
import{Carousel}from "react-responsive-carousel"
import"react-responsive-carousel/lib/styles/carousel.min.css"
import img from "../Assests/3.jpg"
import img1 from "../Assests/4.jpg"

const Services = () => {
  return (
    <div className='services'>
    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} interval={1000} showThumbs={false}>
        <div>
            <img src={img} alt='Item1'/>
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img1} alt='Item2'/>
            <p className='legend'>peer-to-peer Support</p>
        </div>
    </Carousel>
    </div>
  )
}

export default Services