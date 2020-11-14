module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      '@babel/preset-react',
      'babel-preset-expo',
      '@babel/preset-env',
    ],
    plugins: ['babel-plugin-transform-class-properties'],
  };
};