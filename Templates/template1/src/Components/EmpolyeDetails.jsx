import React from 'react'
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const EmpolyeDetails = () => {
  return (
    <div className='backgrond'>
        <section class="row">
            <div class="col-lg-6">
                <div className="ceo">
                    <div className='text-black'>
                        <h1>Wiliam Smith, CEO</h1>
                        <p>Know Employee, Details Here <i class="bi bi-arrow-down-circle-fill"></i></p>
                        <NavLink className='btnn text-white btnnn' to={'/payroll'}>View Employee</NavLink>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 ">
                    <div class="consulting consul"> 
                        <div class="title text-secondary">
                            <p>ABOUT <span class="text-yellow">02/05</span></p>
                            <h1>Attendance Agency</h1>
                            <h3>Attendance tracking is a way to keep track of employee attendance and absenteeism.</h3>
                        </div>
                        <p>Attendance Management keeps track of your employee hours. It is the system you use to document the time your employees work and the time they take off. </p>                    
                        <p> Attendance Management can be done by recording employee hours on paper, using spreadsheets, punching time cards, or using online attendance software for your company. </p>
                    </div>
                    <div class="row my-20 cole">
                        <div class="col-lg-6 cole">
                            <div class="consulting-box1">
                                <h3>We're manage or employees</h3>
                                <button>Add Empolyee</button>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="consulting-box2">
                                <h3>How did you <div>about us?</div></h3>
                                <p>lorem ipsum dolor ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>     
        </section>
        <Footer />
    </div>
    
  )
}

export default EmpolyeDetails