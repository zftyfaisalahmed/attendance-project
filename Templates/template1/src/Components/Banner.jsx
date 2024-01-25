import React from 'react'
import EmpolyeDetails from './EmpolyeDetails';

const Banner = () => {
  return (
    <div>
        <div class="banner image">
            <div>
                <h1>WELCOME TO ATTEND APPLICATION</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
                    iste est, ullam, dignissimos nihil enim commodi earum officia sunt,
                    voluptate asperiores! Facilis nam quo dolorum aliquid iusto provident
                    similique exercitationem!
                </p>
                <button><i class="bi bi-person-add"></i> ADD EMPOLYEE</button>
            </div>
        </div>
        <EmpolyeDetails />
    </div>
  )
}

export default Banner