export class CategoriesCtrl {
	constructor( CategoriesSvc, $rootScope, $routeParams ) {
		this.categoriesSvc = CategoriesSvc;
		
		// Brings product's categories from MercadoLibre Api
		this.categoriesSvc.getAll().then( ( categories ) => {
			this.categories = categories.data;
			$rootScope.$emit("CATEGORIES_LOADED");
		});
	}

}

CategoriesCtrl.$inject = ['CategoriesSvc','$rootScope','$routeParams'];