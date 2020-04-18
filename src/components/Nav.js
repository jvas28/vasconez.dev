import React from "react"

function Nav(props) {
  return (
    <nav className="navbar">
      <a href="#section" className="p-5">
        <span>Home</span>
      </a>
      <a href="#section" className="p-5">
        <span>Projects</span>
      </a>
      <a href="#section" className="p-5">
        <span>About</span>
      </a>
    </nav>
  )
}

Nav.propTypes = {}

export default Nav
