import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { injectIntl } from "gatsby-plugin-intl"
import { graphql } from "gatsby"
import "../styles/index.scss"
const BlogTemplate = (props) => {
  const { data } = props;
  const { markdownRemark } = data // data.markdownRemark holds your post data
  console.log(props);
  
  if(!markdownRemark) {
    return null;
  }
  const { frontmatter, html } = markdownRemark
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header data={data} />
      <main className="flex flex-grow w-full bg-gray-200 md:p-8">
        <div className="bg-white bg-white mx-auto flex flex-col w-full p-5">
          <h1 className="text-2xl font-extrabold">{frontmatter.title}</h1>
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
            className="blog-post-content markdown p-2"
            style={{ maxWidth: 1200 }}
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
    markdownRemark(frontmatter: { path: { eq: $path }}) {
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
export default injectIntl(BlogTemplate);