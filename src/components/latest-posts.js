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
      className="
          bg-transparent
          border border-blue-600
          flex flex-col
          overflow-hidden
          w-full md:w-3/5
          text-blue-400
          mx-5 md:mx-2 "
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
                  className="p-4 flex flex-row text-sm justify-between cursor-pointer hover:bg-blue-900 hover:text-white items-center"
                >
                  <p>{title}</p>
                  <div>
                    {tags.map(name => (
                      <span
                        key={name}
                        className="text-xs text-purple-700 text-white items-center"
                      >
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
  )
}
