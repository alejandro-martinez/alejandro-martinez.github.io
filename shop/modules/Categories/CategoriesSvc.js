export class CategoriesSvc {
	constructor( $http ) {
		this.http = $http;
	}
	getAll() {
		return this.http.get("https://api.mercadolibre.com/sites/MLA/categories")
	}
}