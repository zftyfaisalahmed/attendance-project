import React from 'react'
import { NavLink } from 'react-router-dom'

const PayRoll = () => {
  return (
    <div class="content">
        <div class="sidenav text-white">
            <h2>Payroll System</h2>
            <ul>
                <li><NavLink href="#" to={"/payroll"} className="text-white"><i class="bi bi-person-check-fill"></i>Employees</NavLink></li>
                <li><NavLink href="#" className="text-white" to={"/payroll/attend"}><i class="bi bi-calendar-event"></i>Attendance</NavLink></li>
                <li><a href="#" className="text-white"><i class="bi bi-clock"></i>Time Clock</a></li>
                <li><a href="#" className="text-white"><i class="bi bi-credit-card-fill"></i>Payroll</a></li>
            </ul>
            <button type="button"><i class="fa-solid fa-sign-out"></i>Logout</button>
        </div>
    </div>
  )
}

export default PayRoll