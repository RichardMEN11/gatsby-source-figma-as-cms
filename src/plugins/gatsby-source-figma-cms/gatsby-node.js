const axios = require("axios")

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Text`
exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId, getNodesByType },
  pluginOptions
) => {
  const { createNode } = actions
  const textData = await fetchText(
    pluginOptions.figmaFileUrl,
    pluginOptions.accessToken
  )

  const textNodes = textData[0].children.filter(child => child.type === "TEXT")
  console.log(`Found ${textNodes.length} texts`)

  textNodes.forEach(text => {
    createNode({
      ...text,
      id: createNodeId(`TEXT-${text.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(text),
        contentDigest: createContentDigest(text),
      },
    })
  })
  return
}

const fetchText = async (url, token) => {
  const fileId = url.split("/")[4]
  const data = await axios({
    method: `GET`,
    url: `https://api.figma.com/v1/files/${fileId}`,
    headers: {
      "X-Figma-Token": `${token}`,
    },
  })

  return data.data.document.children
}
