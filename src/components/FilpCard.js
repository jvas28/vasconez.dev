import React from "react"

export default function FilpCard({ children }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">{children}</div>
    </div>
  )
}

export const Front = ({ children }) => (
  <div className="flip-card-front">{children}</div>
)
export const Back = ({ children }) => (
  <div className="flip-card-back">{children}</div>
)
