export class ProductsSvc {
	/*@ngInject*/
	constructor($q) {
		this._$q = $q;
	}

	getName() {
		return this._$q.when("Bobby Tables");
	}
}