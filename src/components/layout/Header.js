import React from 'react'
import Toggle from './Toggle'
import NavBar from './NavBar'

function Header() {

    return (
      <div className="nav-parent">
        <header className="navbar-wrapper">
          <p className="my-name">James Cox</p>
          <Toggle />
        </header>
        <NavBar />
      </div>
    );
}

export default Header