module.exports = function(config) {
  // copy CNAME for gh-pages custom domain
  config.addPassthroughCopy('CNAME')

  // return final configuration
  return {
    dir: {
      output: "dist"
    }
  }
};
