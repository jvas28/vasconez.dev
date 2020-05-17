import React, { useRef, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Typed from "typed.js"
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
  const heading = useRef(null)
  const subtitle = useRef(null)
  let [typingHeading, setTypingHeading] = useState(null)
  useEffect(() => {
    if (typingHeading === null) {
      if (heading.current !== null) {
        const options = {
          strings: [
            "",
            "Hi, I'm Julio",
            "a fullstack developer",
            "I love to learn",
            "and share my knowledge",
            "Enjoy my writings!",
          ],
          typeSpeed: 100,
        }
        setTypingHeading(new Typed(heading.current, options))
      }
    }
  })

  return (
    <Section id="writings" spaced>
      <div className="welcome">
        <div className="hello">
          <div className="title">
            <h1 ref={heading}>$</h1>
          </div>
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
