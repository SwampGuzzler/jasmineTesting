'use strict'; 
var stock, investment;
describe("Investment", function() {
	beforeEach(function() {
		stock = new Stock();
		investment = new Investment({
			stock: stock,
			shares: 100,
			sharePrice: 20
		});
	});
	it("should be of a stock", function() {
		expect(investment.stock).toBe(stock);
	});
	it("should have the invested shares quantity", function() {
		expect(investment.shares).toEqual(100);
	});
	it("should have a cost", function() {
		expect(investment.cost).toEqual(2000);
	});
});
describe("Investment", function() {
  describe("when its stock share price valorizes", function() {
    beforeEach(function() {
      stock.sharePrice = 40;
    });

    it("should have a positive return of investment", function() {
      expect(investment.roi()).toEqual(1);
    });

    it("should be a good investment", function() {
      expect(investment.isGood()).toBeTruthy();
    });

	it("should be a good investment, with a custom Test", function() {
	  //expect(investment).toBeAGoodInvestment();
	  expect(investment.toBeAGoodInvestment()).toBeTruthy();
	});
  });
});