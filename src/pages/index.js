import React from "react"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
import WhoAmI from "../components/who-am-i"
import LatestPosts from "../components/latest-posts"
import Section from "../components/section"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
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
      <Section id="home">
        <LatestPosts />
      </Section>
      <Section id="about">
        <WhoAmI />
      </Section>
    </Layout>
  )
}

export default injectIntl(IndexPage)
