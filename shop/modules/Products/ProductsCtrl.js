export class ProductsCtrl {
	constructor( ProductsSvc, CategoriesSvc, $rootScope, $routeParams ) {
		this.productsSvc = ProductsSvc;
		this.data_loaded = false;
		this.filter_category = 0;

		// Params for the pager directive
		this.pagination = {
			currentPage: 1,
			offset: 0,
			itemsPerPage: 12,
			visiblePages: 6
		}

		// When the users selects a category
		if ( angular.isDefined( $routeParams.category_id )) {
			this.getByCategory( $routeParams.category_id );	
		}

		// Load products of the first category
		$rootScope.$on("CATEGORIES_LOADED", ( ev, categories ) => {	
			this.getByCategory( categories[0].id );	
		});

		// On paging event
		$rootScope.$on("PAGE_CHANGED", ( ev, data ) => {
			if ( this.pagination.offset > 0 ) this.getByCategory();			
		});
	}
	// Searchs a product on the current category
	search() {

		if ( this.filter_term.length > 2) {
			this.productsSvc.search( this.filter_term )
							.then( ( data ) => this.refreshProducts( data ) );
		}
	}
	// Sort products 
	sortBy( sort_id ) {
		this.productsSvc.sortBy( sort_id )
						.then( ( data ) => this.refreshProducts( data ) );
	}
	// Iterates over the products and request ther images progressively
	loadImages() {

		var ids = [];

		this.products.results.map(( p ) => {
			ids.push( p.id );
		});

		this.productsSvc.getProductPictures(ids.join(",")).then(( products ) => {
    		
    		this.products.results.map((p) => {
    			let product_with_image = products.data.filter((o) => {
    				return o.id === p.id;
    			});
    			if (product_with_image && product_with_image[0].pictures.length) {
    				p.image = product_with_image[0].pictures[0].secure_url;
    			}
    		})
    	});
	}
	refreshProducts( products ) {
		
		// Add random rating and reviews values
		products.data.results.map(( p ) => {
			p.reviews = Math.floor(Math.random() * 50) + 1  
			p.rating = new Array( Math.floor(Math.random() * 5) + 1 );	
		});
		
		this.products = products.data;

		// Tells the pager directive to show itself
		this.data_loaded = true;
	
		this.loadImages();
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory( category ) {
		this.productsSvc.setCategory( category )
						.getByCategory( this.pagination )
						.then( ( data ) => this.refreshProducts( data ) );
	}

}

ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];