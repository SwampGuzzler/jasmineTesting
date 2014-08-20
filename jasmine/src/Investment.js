function Investment (paramObject) {
	var paramObject = paramObject || {};
	this.stock = paramObject.stock;
	this.shares = paramObject.shares;
	this.sharePrice = paramObject.sharePrice;
	this.cost = this.shares * this.sharePrice;
}

Investment.prototype.roi = function() {
  return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
};

Investment.prototype.isGood = function() {
	//return false;
  return this.roi() > 0;
};

Investment.prototype.toBeAGoodInvestment = function() {
  return this.isGood();
};