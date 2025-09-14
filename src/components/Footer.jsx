import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="footer">
      <div className="footer-content">
        <h3>My Website</h3>
        <p>Building modern web experiences with React & Vite.</p>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <p className="copyright">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
