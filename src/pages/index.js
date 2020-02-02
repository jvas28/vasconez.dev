import React, {useState} from "react"
import Layout from "../templates/layout"
import SEO from "../components/seo"
import Img from "../components/image"
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
const trans = {
  es: {
    headline: 'Ingeniero de Software Senior',
    at:'en',
    location: 'Múnich, Alemania',
    description: `No creo ser un Gurú del Software, pero me gusta compartir lo que aprendo.`,
    contact: 'Contactos',
  },
  en: {
    headline: 'Senior Software Engineer',
    at:'@',
    location: 'Munich, Germany',
    description: `I'm probably not a Software Jedi, but I like to share what I learn.`,
    contact: 'Drop me a line'
  }
}
const IndexPage = () => {
  const data = useStaticQuery(query)
  const [lang, setLang] = useState('en');
  const text = trans[lang];
  return (
    <Layout>
      <SEO title="Home" />
      <div className="bg-gray-200 flex min-h-screen items-center text-gray-700">
        <div
          className="card shadow-lg rounded-lg bg-white ml-auto mr-3 flex flex-col overflow-hidden"
          style={{ width: 400 }}
        >
          <div className="p-3">
            <div className="px-20 pb-3">
              <Img className="rounded-full border" />
            </div>
            <p className="w-full text-lg text-center mt-2">
              Julio Vásconez
            </p>
            <p className="w-full text-l text-center text-sm my-1">
              <span className="font-bold">{text.headline}</span>  {text.at} <a
                href="https://web.airlst.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-purple-700  font-bold cursor-pointer"
              >
                AirLST GmbH
              </a>
            </p>
            <p className="w-full text-l text-center text-sm my-1 text-gray-600">
              <i className="fas fa-map-marker-alt"></i> {text.location}
            </p>
            <p className="py-1 px-2 text-xs text-center">
              <button className={"cursor-pointer p-1 rounded " +(lang==='es' ? 'font-bold':'text-gray-600')} onClick={()=>setLang('es')}>ES</button> | <button className={"cursor-pointer p-1 rounded " +(lang==='en' ? 'font-bold':'text-gray-600')} onClick={()=>setLang('en')} >EN</button>
            </p>
            <p className="py-1 px-4 text-lg italic font-medium font-serif text-gray-600 text-center h-20">
              "{text.description}"
            </p>
          
            <p className="px-2 pt-10 text-xs text-center">
              {text.contact}:
            </p>
            <div className="w-full text-center">
              <a
                href="https://github.com/jvas28"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer"
              >
                <i className="fab fa-github p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-700"></i>
              </a>
              {/* <a href="https://github.com/" target="_blank" className="fab fa-twitter p-2 rounded-full hover:bg-blue-800 hover:text-white text-xl cursor-pointer"></a> */}
              <a
                href="https://www.linkedin.com/in/jvasconez/"
                rel="noopener noreferrer"
                target="_blank"
                className="cursor-pointer"
              >
                <i className="fab fa-linkedin p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-700"></i>
              </a>
              <a
                href="mailto:julio@vasconez.dev"
                className="cursor-pointer"
              >
                <i className="fas fa-envelope p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-700"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card shadow-lg rounded-lg bg-white mr-auto flex flex-col overflow-hidden"
          style={{ width: 500 }}
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
                      to={`/${path}`}
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
      </div>
    </Layout>
  )
}

export default IndexPage
