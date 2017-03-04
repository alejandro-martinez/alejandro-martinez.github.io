export class CategoriesSvc {
	constructor( $http, Config ) {
		this.http = $http;
		this.config = Config;
	}
	getAll() {
		return this.http.get( this.config.apiURL + "categories")
	}
}