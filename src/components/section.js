import React from "react"

export default function Section({ children, id, title = null }) {
  return (
    <section className="min-h-screen mt-20 overflow-hidden bg-gray-900" id={id}>
      {title && (
        <div className="w-full text-center">
          <h1 className="text-white font-bold text-2xl">Hello</h1>
        </div>
      )}
      <div className="flex flex-col md:flex-row items-center justify-center p-2 flex-auto">
        {children}
      </div>
    </section>
  )
}
