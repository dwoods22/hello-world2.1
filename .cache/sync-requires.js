const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dylanwood/hello-world/.cache/dev-404-page.js"))),
  "component---src-pages-about-css-modules-js": hot(preferDefault(require("/Users/dylanwood/hello-world/src/pages/about-css-modules.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/dylanwood/hello-world/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/dylanwood/hello-world/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dylanwood/hello-world/src/pages/index.js")))
}

