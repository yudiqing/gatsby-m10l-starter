const path = require("path")
const moment = require("moment")
const locales = require("./src/config/locales")
const {
  localizedSlug,
  findKey,
  removeTrailingSlash,
} = require(`./gatsby-node-helpers`)

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // First delete the incoming page that was automatically created by Gatsby
  // So everything in src/pages/ with some exceptions
  if (
    page.internalComponentName !== "ComponentIndex" &&
    page.internalComponentName !== "ComponentDev404Page" &&
    page.internalComponentName !== "Component404Html"
  )
    deletePage(page)

  // Grab the keys of locales and map over them
  Object.keys(locales).map(language => {
    const newPath = page.path.split(".")[0]
    const pageLanguage = page.path.split(".")[1]

    // Only create the page if the language matches
    if (!(pageLanguage && removeTrailingSlash(pageLanguage) === language))
      return

    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[language].default
      ? newPath
      : `${locales[language].path}${newPath}`

    return createPage({
      // Pass on everything from the original page
      ...page,
      // Since page.path returns with a trailing slash (e.g. "/pt/")
      // We want to remove that (e.g. "pt/")
      path: removeTrailingSlash(localizedPath),
      // Pass in the locale as context to every page
      // This context also gets passed to the src/components/layout file
      // This should ensure that the locale is available on every page
      context: {
        ...page.context,
        locale: language,
        dateFormat: locales[language].dateFormat,
      },
    })
  })
}

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // Use path.basename
    // https://nodejs.org/api/path.html#path_path_basename_path_ext
    // It will return the file name without '.md' string (e.g. "file-name" or "file-name.lang")
    const name = path.basename(node.fileAbsolutePath, ".md")

    // Determine template based on folder
    const template = "./src/templates/blog.js"

    // Find the key that has "default: true" set (in this case it returns "en")
    const defaultKey = findKey(locales, o => o.default === true)

    // Check if file.name.lang has the default lang type.
    // (in this case the default language is for files set with "en")
    const isDefault = name.split(".")[1] === defaultKey

    // Files are defined with "name-with-dashes.lang.md"
    // So grab the lang from that string
    // If it's the default language, pass the locale for that
    const lang = isDefault ? defaultKey : name.split(".")[1]

    // Get the entire file name and remove the lang of it
    const slugFileName = name.split(".")[0]

    // Than remove the date if the name has the date info, e.g. 20200730-another-blog.en.md
    const slug = moment(slugFileName.slice(8), "YYYYMMDD", true).isValid()
      ? slugFileName.slice(9)
      : slugFileName

    createNodeField({ node, name: "slug", value: slug })
    createNodeField({ node, name: "locale", value: lang })
    createNodeField({ node, name: "template", value: template })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const qryResponse = await graphql(`
    query {
      files: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              locale
              slug
              template
            }
          }
        }
      }
    }
  `)

  const markdownPages = qryResponse.data.files.edges

  markdownPages.forEach(({ node: file }) => {
    // Getting Slug
    const slug = file.fields.slug
    const locale = file.fields.locale
    const dateFormat = locales[locale].dateFormatPosts
    const markdownTemplate = path.resolve(file.fields.template)
    // Use the values defined in "locales" to construct the path
    const localizedPath = locales[locale].default
      ? `/blogs/${slug}`
      : `${locales[locale].path}/blogs/${slug}`

    createPage({
      path: removeTrailingSlash(localizedPath),
      component: markdownTemplate,
      context: {
        slug,
        locale,
        dateFormat,
      },
    })
  })
}
