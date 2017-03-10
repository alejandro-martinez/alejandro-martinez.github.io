export class ProductsSvc {
	constructor( $http, Config ) {
		this.http = $http;
		this.config = Config;
		this.category = 0;
	}
	setCategory( category_id ) {
		
		if ( category_id )
			this.category = category_id;

		return this;
	}
	search( filter_term ) {
		return this.http.get( this.config.apiURL + "search?category=" + this.category
												 + "&q=" + filter_term);
	}
	sortBy( sort_id ) {
		return this.http.get( this.config.apiURL + "search?category=" + this.category
												 + "&sort=" + sort_id);
	}
	getByCategory( queryParams ) {
		return this.http.get( this.config.apiURL 
			+  "search?category=" + this.category
			+  "&limit=" + queryParams.itemsPerPage
			+  "&offset=" + queryParams.offset );
	}
	getProductPictures( product_ids ) {
		return this.http.get( this.config.apiBaseURL + "items?ids=" + product_ids);	
	}
}