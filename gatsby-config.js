module.exports = {
  siteMetadata: {
    title: "Data For Good",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/content/",
      },
      __key: "content",
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    'gatsby-plugin-postcss',
  ],
};
