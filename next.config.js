const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
    // distDir: 'build',
    withMDX: ({
        pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
        target: 'serverless'
    })
};