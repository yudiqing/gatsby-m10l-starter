// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    default: false,
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    dateFormatPosts: `MMMM Do YYYY`,
    siteLanguage: `en`,
    siteLanguageFull: "English",
    ogLanguage: `en_US`,
    defaultTitle: `Happy Software Developer`,
    defaultDescription: `Portfolio site for Onno Huijgen`,
    copyright: "All rights reserved",
  },
  nl: {
    default: true,
    path: `nl`,
    locale: `nl-NL`,
    dateFormat: `DD-MM-YYYY`,
    dateFormatPosts: `DD MMMM YYYY`,
    siteLanguage: `nl`,
    siteLanguageFull: "Nederlands",
    ogLanguage: `nl_NL`,
    defaultTitle: `Happy Software Developer`,
    defaultDescription: `Portfoliosite voor Onno Huijgen`,
    copyright: "Alle rechten voorbehouden",
  },
}
