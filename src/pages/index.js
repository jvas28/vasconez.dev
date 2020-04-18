import React from "react"
import Layout from "../templates/Layout"
import SEO from "../components/SEO"
import { injectIntl } from "gatsby-plugin-intl"
import Nav from "../components/Nav"
import About from "./home/About"
import Writings from "./home/Writings"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <Writings />
      <About />
    </Layout>
  )
}

export default injectIntl(IndexPage)
