import React from 'react'
import {Link} from 'react-scroll'

function NavBar() {

    return (
      <nav className="menu-wrapper">
        <button id="menu-style" className="current">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            About
          </Link>
        </button>
        <button id="menu-style">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Projects
          </Link>
        </button>
        <button id="menu-style">
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Blog
          </Link>
        </button>
        <button id="menu-style">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
          >
            Contact
          </Link>
        </button>
      </nav>
    );
}

export default NavBar