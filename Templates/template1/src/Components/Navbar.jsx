import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
        <nav>
            <div  class="mx-50">
                <img src='https://res.cloudinary.com/dvzviljl7/image/upload/v1705749612/ym8kmpfaj6vfznxv6zwh.png' alt="" />
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">MEETINGS</a></li>
                    <li><a href="/">PAGES</a></li>
                    <li><a href="/">COURSES</a></li>
                    <li><a href="/">CONTACT US</a></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
  )
}

export default Navbar