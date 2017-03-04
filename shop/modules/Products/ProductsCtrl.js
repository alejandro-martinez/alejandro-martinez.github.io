export class ProductsCtrl {
	constructor( ProductsSvc, $routeParams ) {
		this.productsSvc = ProductsSvc;
		
		// Brings product's filtered by category from MercadoLibre Api
		this.productsSvc.getByCategory( $routeParams.category_id ).then( ( products ) => {
			this.products = products.data.results;
		});
	}

}

ProductsCtrl.$inject = ['ProductsSvc', '$routeParams'];