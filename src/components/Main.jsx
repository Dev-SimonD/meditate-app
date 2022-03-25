import React from 'react'
import meditation from "../images/meditation.png"

const Main = () => {
  return (
      <div className='main'>
        <div className='mainBground'>
          
        </div>
    <div className='card myCard'>
      <img src={meditation} alt='none'></img>
      <p>Welcom to Meditate Calmly. Sit back, relax and let's get started.</p>
    <button className='button is-primary'>Continue</button>
    </div>
    </div>
  )
}

export default Main