describe("Map", function() {
	it("should have Leaflet's methods", function() {
		
		var map = L.map('map').fitWorld();


		expect(map.getMinZoom()).toBe(0);
		//expect(map.panTo()).toBeUndefined();
		//expect(map.panTo()).toBeDefined(); // I Want to expect this panTo method to Be Defined!
	});

});