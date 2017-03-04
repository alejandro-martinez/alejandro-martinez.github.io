export class HomeCtrl {
	constructor( ProductsSvc, CategoriesSvc ) {
		this.productsSvc = ProductsSvc;
		this.categoriesSvc = CategoriesSvc;

		// Brings product's categories from MercadoLibre Api

		this.categoriesSvc.getAll().then( ( categories ) => {
			this.categories = categories.data;
		});
	}

}
HomeCtrl.$inject = ['ProductsSvc', 'CategoriesSvc'];