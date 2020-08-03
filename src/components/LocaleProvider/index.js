import React, { createContext, useState, useContext } from "react"
import locales from "../../config/locales"

const LocaleContext = createContext("")

const determineDefaultLocale = () => {
  for (const language in locales) {
    if (locales[language].default) {
      return locales[language]
    }
  }
}

const LocaleProvider = ({ children }) => {
  const defaultLocale = determineDefaultLocale()

  const [locale, setLocale] = useState(defaultLocale)

  function changeLocale(language) {
    setLocale(locales[language])
  }

  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    return determineDefaultLocale()
  }
  return context
}

export { LocaleProvider, useLocale }
