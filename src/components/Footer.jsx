import React from 'react';
import '../assets/styles/Footer.css'

function Footer() {
    const today = new Date();
    const year = today.getFullYear();

  return (
    <footer>
        <div className="footer-container">
            <h3>{year} &copy; Noly the Dev</h3>
            <p>Buy me a Coffee</p>
        </div>
    </footer>
  )
}

export default Footer