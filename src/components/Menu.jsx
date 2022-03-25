import React from 'react'
import yoga from "../images/yoga.png"
import settings from "../images/settings.png"
import calendar from "../images/calendar.png"

const Menu = () => {
  return (
    
        /* <nav>
            <ul>
                <li>start</li>
                <li>profile</li>
                <li>settings</li>
            </ul>
        </nav> */
        <div className='menu'>
          <div className='menuItems'>
            <img src={calendar} alt="some" />
            <p>Today</p>
          </div>
          <div className='menuItems'>
          <img src={yoga} alt="some" />
            <p>Excersise</p>
          </div>
          <div className='menuItems'>
          <img src={settings} alt="some" />
            <p>Settings</p>
          </div>
        </div>
  )
}

export default Menu