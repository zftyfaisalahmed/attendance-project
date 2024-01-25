import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div class="one">
                <div class="two">
                    <div class="sec1">
                        <h2>Section</h2>
                        <p>Home</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>FAQs</p>
                        <p>About</p>
                    </div>
                    <div class="sec2">
                        <h2>Section</h2>
                        <p>Home</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>FAQs</p>
                        <p>About</p>
                    </div>
                    <div class="sec3">
                        <h2>Section</h2>
                        <p>Home</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>FAQs</p>
                        <p>About</p>
                    </div>
                </div>
                <div>
                    <h2>Subscribe to our newsletter</h2>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <input type="text" placeholder="Email address" id="Email" name="Email" required />
                    <button type="button">Subscribe</button>
                </div>
        </div>
        <hr />
        <div class="last">
            <p>Copyright &#169; 2024, Developed by :- Faizii Team.</p>
            <div>
                <b><i className="bi bi-facebook bi-1x"></i></b>
                <b><i className="bi bi-twitter bi-1x"></i></b>
                <b><i className="bi bi-youtube bi-1x"></i></b>
            </div>
        </div>
    </footer>
  )
}

export default Footer