module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  module: {
    ...defaults.module,
    strictExportPresence: true,  // Enable errors on undefined imports (warnings hidden by default)
  },
});