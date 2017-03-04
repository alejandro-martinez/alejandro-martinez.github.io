export class HomeCtrl {
	constructor( ProductsSvc, CategoriesSvc ) {
		this.productsSvc = ProductsSvc;
	}

}

HomeCtrl.$inject = ['ProductsSvc', 'CategoriesSvc'];