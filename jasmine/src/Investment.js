function Investment (paramObject) {
	var paramObject = paramObject || {};
	this.stock = paramObject.stock;
	this.shares = paramObject.shares;
	this.sharePrice = paramObject.sharePrice;
	this.cost = this.shares * this.sharePrice;
};


