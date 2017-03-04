export class ProductsSvc {
	constructor( $http, Config ) {
		this.http = $http;
		this.config = Config;
	}
	getByCategory( category_id ) {
		var limit = 10;
		return this.http.get( this.config.apiURL + "hot_items/search?limit="+limit+"&category="+category_id);
	}
	getProductPictures( product_id) {
		return this.http.get( this.config.apiBaseURL + "items/" + product_id);	
	}
}