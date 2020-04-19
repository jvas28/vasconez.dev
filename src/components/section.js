import React from "react"

export default function Section({
  children,
  id,
  title = null,
  cover = false,
  spaced = false,
}) {
  return (
    <section
      id={id}
      className={`${cover ? "cover" : ""} ${spaced ? "spaced" : ""}`}
    >
      {title && <h1 className="heading">{title}</h1>}
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  )
}
