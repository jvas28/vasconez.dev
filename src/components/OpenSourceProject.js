import React from "react"

export default function OpenSourceProject({
  title,
  image,
  description,
  stack,
  url,
  preview,
}) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project">
      {title}
    </a>
  )
}
