/**
 * Created by Sam on 2019/5/21.
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'module/main.js'),
    output: {
        filename: "./build.js"
    }
}