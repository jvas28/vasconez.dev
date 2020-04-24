import React from "react"
import OctagonImage from "../../components/OctagonImage"
import Section from "../../components/Section"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
const About = () => {
  const { formatMessage, locale: lang } = useIntl()
  return (
    <Section id="about" wrap>
      <div className="whoAmI">
        <div className="background"></div>
        <div className="informationWrapper">
          <OctagonImage />
          <p className="name">Julio Vásconez</p>
          <p className="headline">
            <span className="font-bold">
              {formatMessage({ id: "headline" })}
            </span>
            <br />
            {formatMessage({ id: "at" })}{" "}
            <a
              href="https://web.airlst.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="workplace"
            >
              AirLST GmbH
            </a>
          </p>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {formatMessage({ id: "location" })}
          </p>
          {/*<p className="languages">*/}
          {/*  <button*/}
          {/*    className={`language-item ${lang === "es" ? "active" : ""}`}*/}
          {/*    onClick={() => changeLocale("es")}*/}
          {/*  >*/}
          {/*    ES*/}
          {/*  </button>{" "}*/}
          {/*  |{" "}*/}
          {/*  <button*/}
          {/*    className={`language-item ${lang === "en" ? "active" : ""}`}*/}
          {/*    onClick={() => changeLocale("en")}*/}
          {/*  >*/}
          {/*    EN*/}
          {/*  </button>*/}
          {/*</p>*/}
          <p className="description">
            "{formatMessage({ id: "description" })}"
          </p>

          <p className="contact">{formatMessage({ id: "contact" })}:</p>
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
        </div>
      </div>
    </Section>
  )
}

export default About
