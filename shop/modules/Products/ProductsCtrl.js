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
		});
	}
	search() {

		if ( this.filter_term.length > 2) {
			this.productsSvc.search( this.category_id, this.filter_term).then((products) => {
				this.products = products.data;
				this.loadImages();
			});	
		}
	}
	loadImages() {
		var ids = [];
		this.products.results.map(( p ) => {
			ids.push( p.id );
		});

		this.productsSvc.getProductPictures(ids.join(",")).then(( products ) => {
    		
    		// Add images to products on the page
    		this.products.results.map((p) => {
    			let product_with_image = products.data.filter((o) => {
    				return o.id === p.id;
    			});

    			p.image = product_with_image[0].pictures[0].url;
    		})
    	});
	}
	// Brings product's filtered by category from MercadoLibre Api
	getByCategory() {
		
		this.productsSvc.getByCategory( this.filter_category, this.pagination ).then( ( products ) => {
			
			// Add random rating and reviews values
			products.data.results.map(( p ) => {
				p.reviews = Math.floor(Math.random() * 50) + 1  
    			p.rating = new Array( Math.floor(Math.random() * 5) + 1 );	
			});
    		
    		this.products = products.data;

			this.data_loaded = true;
		
			this.loadImages();
		});
	}

}

ProductsCtrl.$inject = ['ProductsSvc', 'CategoriesSvc', '$rootScope', '$routeParams'];