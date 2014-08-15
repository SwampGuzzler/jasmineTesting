var jasmine = require('jasmine-runner-node');

// start server
jasmine.start({

  files: {              // (in order of spec runner inclusion)


    js: 'jasmine/spec/',

  }
});

// stop server
jasmine.stop()

// start server, run phantom, stop server
// (also takes all of the above, except updateInterval)
// jasmine.run({
//   showColors: <bool>,      // colorize phantomjs output (default: true)
//   testOutput: <stream>,    // stream for test report output (default: stdout)
//   phantomOutput: <stream>, // stream for phantom output (default: stderr)
// });