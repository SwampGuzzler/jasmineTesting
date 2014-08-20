 module.exports = function(grunt) {

 	grunt.initConfig({
	 	pkg: grunt.file.readJSON('package.json'),
	 //    grunt.initConfig({
		//   jasmine_node: {
		//     options: {
		//       forceExit: true,
		//       match: '.',
		//       matchall: false,
		//       extensions: 'js',
		//       specNameMatcher: 'spec',
		//       jUnit: {
		//         report: true,
		//         savePath : "./build/reports/jasmine/",
		//         useDotNotation: true,
		//         consolidate: true
		//       }
		//     },
		//     all: ['jasmine/spec/*.js']
		//   }
		// });
	 	jshint: {
	      all: ['Gruntfile.js', 'jasmine/spec/*.js', 'jasmine/src/*.js']
	    }
	});

	grunt.loadNpmTasks('grunt-jasmine-node');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jasmine_node']);
	grunt.registerTask('test', ['jshint']);

};