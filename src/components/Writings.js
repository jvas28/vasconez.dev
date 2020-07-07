import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            tags
            lang
            excerpt
          }
        }
      }
    }
  }
`
export default function Writings() {
  const data = useStaticQuery(query)

  return (
    <div id="writings">
      <ul className="list-container">
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              id,
              frontmatter: { title, tags, path, lang, excerpt },
            },
          }) => (
            <li className="writing-wrapper" key={id}>
              <AniLink swipe to={path} direction="left" className="writing">
                <h1 className="title">{title}</h1>
                <p className="excerpt">{excerpt}</p>
                <div className="tags-container">
                  {tags.map(name => (
                    <span key={name} className="tag">
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              </AniLink>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
