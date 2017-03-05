export class ProductsCtrl {
	constructor( ProductsSvc, CategoriesSvc, $rootScope, $routeParams ) {
		this.productsSvc = ProductsSvc;

		if ( angular.isDefined( $routeParams.category_id )) {
			this.getByCategory( $routeParams.category_id );	
		}
		
		$rootScope.$on("CATEGORIES_LOADED", ( ev, categories ) => {
			this.getByCategory( categories[0].id );	
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