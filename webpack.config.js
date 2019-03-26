require('dotenv').config()
const path = require('path')

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: './client/index.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'server/public')
    }
}
