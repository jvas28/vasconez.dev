import React from "react"
import OpenSourceProject from "./OpenSourceProject"
import projects from "../data/openSource"
export default function OpenSource() {
  return (
    <div id="open-source">
      <div className="title-wrapper">
        <i className="fa fa-code mr-2"></i>
        <h1 className="title">Open Source</h1>
      </div>
      <div className="projects">
        {projects.map(project => {
          return <OpenSourceProject key={project.title} {...project} />
        })}
      </div>
    </div>
  )
}
