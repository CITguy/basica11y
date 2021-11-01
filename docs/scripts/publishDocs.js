const ghpages = require('gh-pages');

(async () => {
  console.log('DOCS: Publishing to GitHub Pages'); 
  let now = new Date()

  // See https://github.com/tschaub/gh-pages#options
  let cfg = {
    add: false, // replace all gh-pages content, do not append
    dotfiles: false,
    message: `publish(docs): ${now.toUTCString()}`,
    silent: false,
  }

  try {
    await ghpages.publish('dist', cfg)
    console.log('Successfully published!')
  } catch (err) {
    console.log(`ERROR publishing: ${err.message}`)
  }
})()
