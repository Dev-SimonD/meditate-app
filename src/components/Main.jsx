import React from 'react'
import meditation from "../images/meditation.png"

const Main = () => {
  return (
      <div className='main'>
    <div className='card myCard'>
      <img src={meditation} alt='none'></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
         Dicta quasi aliquid autem atque sint temporibus veritatis 
         recusandae.</p>
    <button className='button is-primary'>Start Now</button>
    </div>
    </div>
  )
}

export default Main