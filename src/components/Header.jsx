import React from 'react';
import '../assets/styles/Header.css';
import Select from 'react-select';

const options = [
    { value: 'macos', label: 'MacOs' },
    { value: 'windows', label: 'Windows' },
    { value: 'linux', label: 'Linux' }
  ]

function Header() {
  return (
    <header className='header'>
        <div className="logo-container">
            <i className="fa-solid fa-chevron-right"></i>
            <h2>CommandKit</h2>
        </div>
        <div className="header-button-container">
        <Select options={options} />
        </div>

          
        </header>
  )
}

export default Header