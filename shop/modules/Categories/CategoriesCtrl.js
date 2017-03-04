export class CategoriesCtrl {
	constructor( CategoriesSvc, $routeParams ) {
		this.categoriesSvc = CategoriesSvc;
		
		// Brings product's categories from MercadoLibre Api

		this.categoriesSvc.getAll().then( ( categories ) => {
			this.categories = categories.data;
		});
	}

}

CategoriesCtrl.$inject = ['CategoriesSvc', '$routeParams'];