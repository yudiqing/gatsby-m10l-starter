<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  A Gatsby Multilingual Starter
</h1>

If you need more than one language for your website and you've decided to use Gatsby, then this must be your lucky day. This starter allows you to configure the languages you need. The bad news is of course, that you need to provide pages for every language, unless you want to pester your site visitors with a 'page-not-found-page' ;-)

## Quick start

1.  **Create the Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using this starter
    gatsby new my-mulitlingual-starter https://github.com/onnoh/gatsby-m10l-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-mulitlingual-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-mulitlingual-starter` directory in your code editor of choice and edit the configuration files. Save your changes and the browser will update in real time!

## What's inside?

### Configuration

`./src/config/locales` Here you'll find the languages file. Add and update entries to your liking.
`./src/config/menus` This file contains the menu items shown in the header of the site. Add and update entries to your liking.
`./src/config/styles` A Sass file resetting the global styles. You'll problably want to let this one be.

### Components

`./src/components` This folder contains styled components taking care of the layout of the website. If you're happy with the default, then you're all set. Otherwise address your skills and create something way more fancy.

### Pages

`./src/pages` You guessed it: the main structure. I took the liberty of providing the skeletons for the Home, Contact, About and Blogs pages. All ready for your content. The `index.js` redirects to _/home_ and will fit the bill. The `404.js` however will likely need some inspiration from you. The filename has the **pattern menu-path.language.js**.

### Blogposts

`./src/blogposts` The Markdown files that will get rendered to HTML based on a template located in `./src/templates`.

Of course you can have multiple markdown folders and matching conditional templates. You'll need to add logic for that in the bootstrapfase where the nodes/pages are created.

### Bootstrap

`gatsby-browser.js` creates a wrapper for every page, making the LocaleProvider component available to store the selected site language.
`gatsby-config.js` together with the `package.json` the heart of your Gatsby site. The supplied _siteMetadata_ does not apply to you, so please change accordingly.
`gatsby-node.js` creates the pages and renders the markdowns.
`gatsby-node-helpers.js` contains some convenience functions.

## Learning Gatsby

I took part in The Great Gatsby Bootcamp by Andrew Mead on YouTube (https://youtu.be/8t0vNu2fCCM). Very enjoyable. In fact: I borrowed the styling from him. Thanks Andrew!

Another inspiration came from https://github.com/diogorodrigues/iceberg-gatsby-multilang by Diogo Rodrigues. I swapped Portugese for Dutch and refactored some logic and structure. Sorry Diogo! :-)

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
