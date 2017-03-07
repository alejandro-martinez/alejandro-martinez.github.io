export class ProductsCtrl {
	constructor( ProductsSvc, CategoriesSvc, $rootScope, $routeParams ) {
		this.productsSvc = ProductsSvc;
		this.data_loaded = false;
		this.filter_category = 0;

		this.pagination = {
			currentPage: 1,
			offset: 0,
			itemsPerPage: 12
		}

		if ( angular.isDefined( $routeParams.category_id )) {
			console.log("1er if")
			this.filter_category = $routeParams.category_id;
			this.getByCategory();	
		}
		
		$rootScope.$on("CATEGORIES_LOADED", ( ev, categories ) => {
			this.filter_category = categories[0].id;
			this.getByCategory( categories[0].id );	
		});

		$rootScope.$on("PAGE_CHANGED", ( ev, data ) => {
			if (this.pagination.offset > 0) {
				this.getByCategory();
			}
		})
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory() {
		this.productsSvc.getByCategory( this.filter_category, this.pagination ).then( ( products ) => {
			this.products = products.data;
			this.data_loaded = true;
		});
	}

}

ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];