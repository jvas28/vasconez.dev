import React from "react"
import Layout from "../templates/Layout"
import SEO from "../components/SEO"
import { injectIntl } from "gatsby-plugin-intl"
import WhoAmI from "../components/WhoAmI"
import LatestPosts from "../components/LatestPosts"
import Section from "../components/Section"
import Nav from "../components/Nav"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <Section id="home">
        <LatestPosts />
      </Section>
      <WhoAmI />
    </Layout>
  )
}

export default injectIntl(IndexPage)
