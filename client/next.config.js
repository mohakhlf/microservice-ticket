module.exports = {
  webpackDevMiddlware: config => {
    config.watchOptions.poll  = 300;
    return config
  }
};