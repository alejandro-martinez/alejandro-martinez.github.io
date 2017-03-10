export class CategoriesCtrl {
	constructor( CategoriesSvc, $rootScope, $routeParams ) {
		this.categoriesSvc = CategoriesSvc;
		
		// Brings product's categories from MercadoLibre Api
		this.categoriesSvc.getAll().then( ( categories ) => {
			console.log("Categoriessssssssss")
			this.categories = categories.data;
			$rootScope.$emit("CATEGORIES_LOADED", categories.data);
		});
	}
}

CategoriesCtrl.$inject = ['CategoriesSvc','$rootScope','$routeParams'];