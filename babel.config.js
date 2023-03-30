module.exports = {
    presets: [
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV === "development",
        },
      ],
    ],
  };
  
module.exports = function (api) {
    api.cache.forever();
    return {
      plugins: ['macros'],
    }
  }
  