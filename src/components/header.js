// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "../components/image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Header = ({ siteTitle }) => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-3">
        <AniLink
          swipe
          to="/"
          direction="right"
          className="flex items-center flex-shrink-0 text-white mr-6"
        >
          <div className="w-10 h-10  mr-4 rounded-full">
            <Img className="bg-cover rounded-full" />
          </div>
          <span className="text-md text-black tracking-tight text-white">
            Julio Vásconez
          </span>
        </AniLink>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a
            href="https://github.com/jvas28"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-2 text-white cursor-pointer"
          >
            <i className="fab fa-github "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jvasconez/"
            rel="noopener noreferrer"
            target="_blank"
            className="mx-2 text-white cursor-pointer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:julio@vasconez.dev"
            className="mx-2 text-white cursor-pointer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
