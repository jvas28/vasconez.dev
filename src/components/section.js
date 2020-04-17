import React from "react"

export default function Section({ children, id, title = null, wrap = false }) {
  return (
    <section
      className={`overflow-hidden bg-gray-900 w-full ${
        wrap ? "" : "min-h-screen"
      }`}
      id={id}
    >
      {title && (
        <div className="w-full text-center">
          <h1 className="text-white font-bold text-2xl">{title}</h1>
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center flex-auto">
        {children}
      </div>
    </section>
  )
}
