import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { graphql } from "gatsby"
import "../styles/index.scss"
export default function BlogTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="flex flex-col min-h-screen">
      <Header data={data} />
      <main className="flex flex-grow p-0 bg-gray-200 md:px-20 lg:px-40 content-center items-center">
        <div className="bg-white mx-auto flex flex-col p-10">
          <h1 className="text-4xl font-extrabold">{frontmatter.title}</h1>
          <div className="text-sm flex flex-row items-center text-gray-600">
            <i className="fas fa-calendar pr-2"></i>
            <h2 className="text-xs px-1">{frontmatter.date}</h2>
            <i className="fas fa-tags text-xs px-2 ml-5"></i>
            {frontmatter.tags.map(name => (
              <span key={name} className="px-1 mr-2 rounded bg-gray-300">
                {name}
              </span>
            ))}
          </div>
          <div
            className="blog-post-content markdown p-5"
            style={{ minWidth: 1200 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
