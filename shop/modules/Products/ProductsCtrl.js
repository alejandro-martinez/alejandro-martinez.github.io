export class ProductsCtrl {
	constructor( ProductsSvc, CategoriesSvc, $rootScope, $routeParams ) {
		this.productsSvc = ProductsSvc;
		
		$rootScope.$on("CATEGORIES_LOADED", () => {
			CategoriesSvc.getAll().then(( categories ) => {
				this.getByCategory( categories.data[0].id );	
			});
			
		});
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory( category_id ) {
		this.productsSvc.getByCategory( category_id ).then( ( products ) => {
			this.products = products.data.results;
		});
	}

}

ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];