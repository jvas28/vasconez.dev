import React from "react"
import Layout from "../templates/Layout"
import { injectIntl } from "gatsby-plugin-intl"
import Writings from "../components/Writings"
const IndexPage = () => {
  return (
    <Layout>
      <Writings />
    </Layout>
  )
}

export default injectIntl(IndexPage)
