'use strict'; 
//var Map = require('/Map');
describe("Leaflet", function() {
	// Problem: We can't initialize the map here, where all the it/expect statements can access it like
	// a global variable. Additionally, we can't define the map more than once to run each spec in the 
	// test suite. Solution: create the map in an external file's module.export & require it here in this file!
	// NOOOPE: USE THE JASMINE beforeEach() GLOBAL FUNCTION OF COURSE!!! 
	// Update: This still doesn't work because the beforeEach really just re-defines the map object again and 
	// again, you know, Before Each spec. Groundbreaking stuff.
	// Maybe we could use the afterEach() global to perform a teardown of the map object?


	// var map;
	// beforeEach(function() {
	// 	map = L.map('map').fitWorld();
	// });

	it("returns a valid object with Leaflet's methods", function() {
		//var map = L.map('map').fitWorld();
		//expect(map.getMinZoom()).toBe(0);

		expect(L).toBeDefined();
	});
	it("should have more Leaflet methods", function() {
		expect(map.getMinZoom()).toBe(0);
	});
});