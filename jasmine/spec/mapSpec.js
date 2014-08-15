//var Map = require('/Map');
describe("Leaflet", function() {
	// Problem: We can't initialize the map here, where all the it/expect statements can access it like
	// a global variable. Additionally, we can't define the map more than once to run each spec in the 
	// test suite. Solution: create the map in an external file's module.export & require it here in this file!
	it("returns a valid object with Leaflet's methods", function() {
		//var map = L.map('map').fitWorld();

		//expect(Map.map.getMinZoom()).toBe(0);
		//expect(map.getMinZoom()).toBe(0);

		expect(L).toBeDefined();
	});
	/*it("should have more Leaflet's methods", function() {
		expect(map.getMinZoom()).toBe(0);
	});*/


});