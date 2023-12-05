const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "styled-components",
  "mdb-react-ui-kit",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withPlugins([withTM], nextConfig);
