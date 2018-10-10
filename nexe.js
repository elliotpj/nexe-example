var nexe = require('nexe');

nexe.compile({
    input: './index.js', // where the input file is
    output: './nexe-example.exe', // where to output the compiled binary
    targets:['windows-x64-8.9.0'],
    resource: [ './public/**/*' ], // array of files to embed.
    verbose:true,
    build:false,
    flags: false, // use this for applications that need command line flags.
    framework: "node" // node, nodejs, or iojs
}, function(err) {
    if (err) {
        return console.log(err);
    } else {
        return console.log('Nexe Compiled Successfully')
    }
});
