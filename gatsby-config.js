/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://tedxcusat.in/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-192928582-1",
      },
    }
  ]
}
