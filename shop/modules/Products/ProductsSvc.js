export class ProductsSvc {
	constructor( $http ) {
		this.http = $http;
	}

}

ProductsSvc.$inject = ['$http'];