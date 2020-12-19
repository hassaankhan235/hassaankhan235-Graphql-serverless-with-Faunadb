const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/khan/Documents/Self Programming/hassaankhan235-Graphql-serverless-with-Faunadb/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/khan/Documents/Self Programming/hassaankhan235-Graphql-serverless-with-Faunadb/src/pages/index.js")))
}

