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
            lang
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
          className="card shadow-lg
          rounded-lg bg-white
          flex flex-col
          overflow-hidden
          w-full md:w-3/5
          mx-2"
          style={{ maxWidth: 600 }}
        >
          <div className="p-3">
            <p className="text-lg text-gray-500 font-bold">
              <i className="fas fa-rss mx-2"></i>Lastest Posts
            </p>
            <ul className="">
              {data.allMarkdownRemark.edges.map(
                ({
                  node: {
                    id,
                    frontmatter: { title, tags, path, lang },
                  },
                }) => (
                  <li className="" key={id}>
                    <AniLink 
                      swipe
                      to={path}
                      direction="left"
                      className="p-4 flex flex-row text-sm justify-between cursor-pointer hover:bg-gray-200 rounded"
                    >
                      <p>{title}</p>
                      <div>
                        {tags.map(name => (
                          <span
                            key={name}
                            className="p-1 text-xs bg-purple-700 ml-1 text-white rounded"
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
