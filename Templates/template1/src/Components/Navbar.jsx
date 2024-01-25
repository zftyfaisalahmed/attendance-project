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
                        <li><a href="/">ATTENDANCE</a></li>
                        <li><a href="/">PAYROLL</a></li>
                        <li className='btn btn-danger'><a href="/">LOG OUT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar