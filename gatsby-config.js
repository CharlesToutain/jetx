module.exports = {
  siteMetadata: {
    title: `Deviens riche avec le jeu CBET JETX`,
    description: `JETX est le JEU du MOMENT qui te permet de gagner de l'argent ! Avec JETX deviens riche rapidement en t'amusant. Utilise ma statégie pour gagner de l'argent sur JETX`,
    author: `@diogorodrigues`,
    siteUrl: `https://www.jetxcbet.com`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // It needs to be the first one to work with gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/img`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/translations`,
        name: `translations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/menu`,
        name: `menu`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/config/language-mapping`,
        name: `language-mapping`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `uploads`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1040,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`, // It needs to be the last one
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500"],
              //subsets: ['latin']
              //text: 'Hello'
              //fontDisplay: 'swap',
              //strategy: 'selfHosted' // 'base64' || 'cdn'
            },
          ],
        },
        // formatAgents: {
        //   eot: `Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)`,
        //   ttf: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.59.8 (KHTML, like Gecko) Version/5.1.9 Safari/534.59.8`,
        //   woff: `Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko`,
        //   woff2: `Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393`,
        // },
        formats: ['woff2', 'woff'],
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby multiple language`,
        short_name: `Gatsby multiple language`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
