import React from 'react'
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
          }
        }
      }
    }
  }
`
export default function LatestPosts() {
    const data = useStaticQuery(query)
    return (
        <div
          className="card shadow-lg rounded-lg bg-white  flex flex-col  overflow-hidden"
          style={{ maxWidth: 500 }}
        >
          <div className="p-3">
            <p className="text-lg text-gray-500 font-bold">
              <i className="fas fa-rss mx-2"></i>Lastest Posts
            </p>
            <ul className="p-3">
              {data.allMarkdownRemark.edges.map(
                ({
                  node: {
                    id,
                    frontmatter: { title, tags, path },
                  },
                }) => (
                  <li className="" key={id}>
                    <AniLink 
                      swipe
                      to={`${path}`}
                      direction="left"
                      className="p-4 flex flex-row justify-between cursor-pointer hover:bg-gray-200 rounded"
                    >
                      <p>{title}</p>
                      <div>
                        {tags.map(name => (
                          <span
                            key={name}
                            className="p-1 text-sm bg-purple-700 ml-1 text-white rounded"
                          >
                            {name}
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
    )
}
