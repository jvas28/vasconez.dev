/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/SEO"
import "../styles/index.sass"
import SideContent from "../pages/home/SideContent"
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SEO title="Home" />
      <SideContent />
      <main id="main-content">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
