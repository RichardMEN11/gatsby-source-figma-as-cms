/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `./.env`,
})

module.exports = {
  /* Your site config here */

  plugins: [
    {
      resolve: require.resolve(`./src/plugins/gatsby-source-figma-cms`),
      options: {
        figmaFileUrl: process.env.FIGMA_URL,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
