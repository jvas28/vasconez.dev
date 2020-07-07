import React from "react"
import OctagonImage from "./OctagonImage"
import { useIntl } from "gatsby-plugin-intl"
const About = () => {
  const { formatMessage } = useIntl()
  return (
    <div className="whoAmI">
      <div className="informationWrapper">
        <OctagonImage />
        <div className="social">
          <a
            href="https://github.com/jvas28"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <i className="network fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jvasconez/"
            rel="noopener noreferrer"
            target="_blank"
            className="cursor-pointer"
          >
            <i className="network fab fa-linkedin"></i>
          </a>
          <a href="mailto:julio@vasconez.dev" className="cursor-pointer">
            <i className="network fas fa-envelope"></i>
          </a>
        </div>
        <p className="name">Julio Vásconez</p>
        <p className="headline">
          <span className="">{formatMessage({ id: "headline" })}</span>
        </p>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>{" "}
          {formatMessage({ id: "location" })}
        </p>
        <p className="description">"{formatMessage({ id: "description" })}"</p>
      </div>
    </div>
  )
}

export default About
