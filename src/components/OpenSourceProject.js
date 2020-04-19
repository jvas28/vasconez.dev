import React from "react"
import FilpCard, { Front, Back } from "./FilpCard"

export default function OpenSourceProject({
  title,
  image,
  description,
  stack,
  url,
  preview,
}) {
  return (
    <div className="project">
      <FilpCard>
        <Front>
          <div className="project-front">
            <img className="icon" alt={title} src={image} />
            <h1 className="title">{title}</h1>
          </div>
        </Front>
        <Back>
          <div className="project-back">
            <p className="description">{description}</p>
            <div className="stack">
              {stack.map(name => {
                return <span className={`technology`}>{name}</span>
              })}
            </div>
            <div className="actions">
              <a
                className="preview"
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              <a
                className="source"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </Back>
      </FilpCard>
    </div>
  )
}
