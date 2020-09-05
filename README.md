## Gatsby Source Figma CMS

This project aims to develop a Gatsby plugin which allows to use a Figma File as CMS. This is useful for building prototypes and allows designers to change the text of an webpage.

## Status Quo

This is a gatsby project with version 0.0.1 of the plugin. The Plugin is located under `./src/plugins/gatsby-source-figma-cms`.
The plugin serves each text from the figma api, with some of the styles and creates nodes from each text.

How it works:

```
{
      resolve: require.resolve(`./src/plugins/gatsby-source-figma-cms`),
      options: {
        figmaFileUrl: process.env.FIGMA_URL,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
}
```

1. Add the plugin in the `gatsby-config` file
2. Add the figma file url
3. Add the accessToken: [How to get an access token?](https://www.figma.com/developers/api#authentication)

## Next Steps:

- Sort the text nodes for better developer usability
- Receive more data and transform it for better usability
- Test with bigger projects, differen files and more. There is a lot to come.
- Deploy test project and publish plugin to npm

GOAL: Using Figma as a CMS for a Gatsby Page
