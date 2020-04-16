import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LatestPosts from "../components/LatestPosts"
import { injectIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import "../styles/index.sass"
const BlogTemplate = props => {
  const { data } = props
  const { markdownRemark } = data // data.markdownRemark holds your post data
  if (!markdownRemark) {
    return null
  }
  const { frontmatter, html } = markdownRemark
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header data={data} />
      <main className="flex flex-col md:flex-row  flex-grow w-full  bg-gray-800 md:p-8">
        <article className="bg-gray-900 mx-auto flex flex-col w-full p-5 md:w-4/6">
          <h1 className="text-2xl font-extrabold text-white">
            {frontmatter.title}
          </h1>
          <div
            className="blog-post-content markdown p-2"
            style={{ maxWidth: 1200 }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <aside className="flex flex-col w-full md:w-2/6 flex-grow md:ml-3 mt-2 md:mt-0">
          <div className="w-full bg-gray-900 p-3">
            <div className="flex flex-col text-gray-600 p-2">
              <div className="flex flex-row w-full justify-start p-2">
                <i className="fas fa-calendar pr-2"></i>
                <h2 className="text-xs px-1">{frontmatter.date}</h2>
              </div>
              <div className="flex flex-col w-full justify-start p-2">
                <span>
                  <i className="fas fa-tags text-xs pr-2"></i>Tags
                </span>
                <div className="flex flex-wrap pt-2">
                  {frontmatter.tags.map(name => (
                    <span
                      key={name}
                      className="px-1 m-1 rounded-full bg-gray-400 text-blue-700 flex flex-wrap cursor-pointer"
                    >
                      #{name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-900 p-3 mt-2">
            <LatestPosts />
          </div>
        </aside>
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
export default injectIntl(BlogTemplate)
