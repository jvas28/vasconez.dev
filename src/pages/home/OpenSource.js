import React from "react"
import Section from "../../components/Section"
import OpenSourceProject from "../../components/OpenSourceProject"
import projects from "../../data/openSource"
export default function OpenSource() {
  return (
    <Section id="open-source" title="Open Source" spaced>
      <div className="projects">
        {projects.map(project => {
          return <OpenSourceProject {...project} />
        })}
      </div>
      <div className="find-out">
        <a
          className="github"
          rel="noopener noreferrer"
          href="https://github.com/jvas28"
          target="_blank"
        >
          <i className="fab fa-github"></i>some others
        </a>
      </div>
    </Section>
  )
}
