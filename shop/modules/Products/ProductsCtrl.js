export class ProductsCtrl {
	constructor( ProductsSvc, CategoriesSvc, $rootScope, $routeParams ) {
		this.productsSvc = ProductsSvc;
		this.data_loaded = false;
		this.pagination = {
			currentPage: 1,
			offset: 12,
			limit: 12
		}

		if ( angular.isDefined( $routeParams.category_id )) {
			this.getByCategory( $routeParams.category_id );	
		}
		
		$rootScope.$on("CATEGORIES_LOADED", ( ev, categories ) => {
			this.getByCategory( categories[0].id );	
		});
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory( category_id ) {
		this.productsSvc.getByCategory( category_id, this.pagination ).then( ( products ) => {
			this.products = products.data;
			console.log("data loaded",products)
			this.data_loaded = true;
		});
	}

}

ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];