import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const [color, setColor] = useState('rbg(0,0,0)')
  const Bodycolor=(event)=>{
    document.body.style.background=event.target.value;
    document.body.style.color='white';
  }
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">{props.landingpage}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`form-check form-switch my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable Dark Mode' : 'Enable light mode'}</label>
      </div>
      <label htmlFor="ColorInput" class="form-label">Color picker</label>
      <input type="color" class="form-control form-control-color" id="ColorInput" onChange={Bodycolor} title="Choose your color"></input>
    </nav>
  )
}
Navbar.defaultProps = {
  title: "TxtFlipper",
  about: "About",
  landingpage: "Home"
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  landingpage: PropTypes.string
}
