const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
    codeHighlight: true
  })
   
  module.exports = withNextra({
    distDir:'dist',
    webpack: (config, options)=>{
      config.plugins.push(new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname,'./node_modules/leaflet/dist/'), 
            to: path.join(__dirname, './public/')
          }
        ]
      }))
      return config;
    }
  })
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })