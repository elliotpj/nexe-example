var nexe = require('nexe');

nexe.compile({
    input: './index.js', // where the input file is
    output: './nexe-example.exe', // where to output the compiled binary
    targets:['windows-x64-8.9.0'],
    nodeVersion: '8.9.0', // node version
    nodeTempDir: 'src', // where to store node source.
    nodeConfigureArgs: ['opt', 'val'], // for all your configure arg needs.
    nodeMakeArgs: ["-j", "4"], // when you want to control the make process.
    resource: [ './public/**/*' ], // array of files to embed.
    verbose:true,
    build:false,
    flags: false, // use this for applications that need command line flags.
    jsFlags: "--use_strict", // v8 flags
    framework: "node" // node, nodejs, or iojs
}, function(err) {
    if (err) {
        return console.log(err);
    } else {
        return console.log('Nexe Compiled Successfully')
    }
});
