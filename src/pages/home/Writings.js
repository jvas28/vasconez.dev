import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Section from "../../components/Section"
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
          }
        }
      }
    }
  }
`
export default function Writings() {
  const data = useStaticQuery(query)
  return (
    <Section id="Writings" wrap>
      <div className="welcome">
        <div className="hello">
          <h1 className="title">Hello</h1>
          <h1 className="subtitle">Hello</h1>
        </div>
        <div className="writings">
          <ul className="list-container">
            {data.allMarkdownRemark.edges.map(
              ({
                node: {
                  id,
                  frontmatter: { title, tags, path, lang },
                },
              }) => (
                <li className="writing-wrapper" key={id}>
                  <AniLink swipe to={path} direction="left" className="writing">
                    <h1 className="title">{title}</h1>
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
      </div>
    </Section>
  )
}
