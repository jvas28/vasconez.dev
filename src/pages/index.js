import React from "react"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"
import WhoAmI from '../components/who-am-i';
import LatestPosts from "../components/latest-posts"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="bg-gray-200
      flex flex-col md:flex-row
      min-h-screen items-center
      p-2
      justify-center text-gray-700">
      <WhoAmI />
      <LatestPosts />
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)
