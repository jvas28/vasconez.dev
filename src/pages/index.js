import React from "react"
import Layout from "../templates/Layout"
import SEO from "../components/SEO"
import { injectIntl } from "gatsby-plugin-intl"
import Nav from "../components/Nav"
import About from "./home/About"
import Writings from "./home/Writings"
import OpenSource from "./home/OpenSource"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <Writings />
      <OpenSource />
      <About />
    </Layout>
  )
}

export default injectIntl(IndexPage)
