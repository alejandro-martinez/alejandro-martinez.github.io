export class ProductsSvc {
	constructor( $http ) {
		this.http = $http;
	}
	getByCategory( category_id ) {
		return this.http.get("https://api.mercadolibre.com/sites/MLA/hot_items/search?limit=15&category="+category_id);
	}

}

ProductsSvc.$inject = ['$http'];