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
          flex flex-col
          overflow-hidden
          w-full
          text-blue-400"
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
                  className="p-4 flex flex-col text-sm justify-between cursor-pointer hover:bg-blue-900 hover:text-white border border-blue-600 my-1"
                >
                  <p className="mb-2">{title}</p>
                  <div className="flex flex-row justify-end">
                    {tags.map(name => (
                      <span
                        key={name}
                        className="text-xs text-purple-700 text-white border border-indigo-700 p-1 rounded mr-2"
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
