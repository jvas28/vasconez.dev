import React from "react"
import Img from "./image"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
const WhoAmI = () => {
  const { formatMessage, locale: lang } = useIntl()
  return (
    <>
      <div
        className="bg-transparent m-2 p-3
                 md:mr-3 flex flex-col md:flex-row 
                w-full 
                "
      >
        <div className="flex w-full md:w-1/2 md:p-12">
          <Img className="profile-photo w-full shadow" />
        </div>
        <div className="flex  md:w-1/2 flex-col md:p-48">
          <p className="w-full text-2xl text-center text-blue-500">
            Julio Vásconez
          </p>
          <p className="w-full text-l text-center text-blue-500 text-sm my-1">
            <span className="font-bold">
              {formatMessage({ id: "headline" })}
            </span>{" "}
            {formatMessage({ id: "at" })}{" "}
            <a
              href="https://web.airlst.com/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-purple-700  font-bold cursor-pointer"
            >
              AirLST GmbH
            </a>
          </p>
          <p className="w-full text-l text-center text-sm my-1 text-blue-300">
            <i className="fas fa-map-marker-alt"></i>{" "}
            {formatMessage({ id: "location" })}
          </p>
          <p className="py-1 px-2 text-xs text-center">
            <button
              className={
                "cursor-pointer p-1 rounded " +
                (lang === "es" ? "font-bold" : "text-gray-600")
              }
              onClick={() => changeLocale("es")}
            >
              ES
            </button>{" "}
            |{" "}
            <button
              className={
                "cursor-pointer p-1 rounded " +
                (lang === "en" ? "font-bold" : "text-gray-600")
              }
              onClick={() => changeLocale("en")}
            >
              EN
            </button>
          </p>
          <p className="py-1 px-1 md:px-4 text-lg italic font-medium font-serif text-gray-600 text-center h-20">
            "{formatMessage({ id: "description" })}"
          </p>

          <p className="px-2 pt-10 text-xs text-center">
            {formatMessage({ id: "contact" })}:
          </p>
          <div className="w-full text-center">
            <a
              href="https://github.com/jvas28"
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <i className="fab fa-github p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-400"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jvasconez/"
              rel="noopener noreferrer"
              target="_blank"
              className="cursor-pointer"
            >
              <i className="fab fa-linkedin p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-400"></i>
            </a>
            <a href="mailto:julio@vasconez.dev" className="cursor-pointer">
              <i className="fas fa-envelope p-2 hover:bg-blue-800 rounded-full hover:text-white text-xl text-blue-400"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoAmI
