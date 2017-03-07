export class ProductsSvc {
	constructor( $http, Config ) {
		this.http = $http;
		this.config = Config;
	}
	getByCategory( category_id, queryParams ) {
		return this.http.get( this.config.apiURL 
			+  "search?category=" +  category_id 
			+  "&limit=" + queryParams.itemsPerPage
			+  "&offset=" + queryParams.offset );
	}
	getProductPictures( product_ids ) {
		return this.http.get( this.config.apiBaseURL + "items?ids=" + product_ids);	
	}
}