import React from "react"

function Nav(props) {
  return (
    <nav className="fixed top-0 w-full h-20 text-white text-right justify-end items-center flex pr-20">
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
