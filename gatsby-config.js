const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Pear`,
    description: `A boilerplate by SLD`,
    author: `@sld`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/pear.png`
      }
    }
  ]
};
