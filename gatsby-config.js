/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `notes`,
    //     path: `${__dirname}/src/notes/`,
    //   },      
    // },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',   
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`images`,
        path: `${__dirname}/src/images`,
      },
    },   
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'Web dev portfolio',
    copyright: 'This website is copyright 2022 web warrior',
    contact: 'rahul@test.com'
  }
}
