 module.exports = function(grunt) {
 	pkg: grunt.file.readJSON('package.json'),
    grunt.initConfig({
	  jasmine_node: {
	    options: {
	      forceExit: true,
	      match: '.',
	      matchall: false,
	      extensions: 'js',
	      specNameMatcher: 'spec',
	      jUnit: {
	        report: true,
	        savePath : "./build/reports/jasmine/",
	        useDotNotation: true,
	        consolidate: true
	      }
	    },
	    all: ['jasmine/spec/*.js']
	  }
	});

	grunt.loadNpmTasks('grunt-jasmine-node');

	grunt.registerTask('default', ['jasmine_node']);
};