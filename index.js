const express = require('express')
const path = require('path')
const app = express();

require('app-module-path').addPath(__dirname);

app.use('/', express.static(path.join(__dirname, 'public')))


var test = require('test/utility.js');
console.log(test);
test.test();

app.listen(8888)
console.log('Listen on Port :8888');