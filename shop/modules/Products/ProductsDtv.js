export class ProductsDtv {
    constructor() {
        this.restrict = 'E'
        this.replace = true
        this.templateUrl = '/modules/Products/product_detail.html'
        this.scope = {}
    }

    controller($scope, ProductsSvc) {
        $scope.productsSvc = ProductsSvc;
    }

    link(scope, element, attrs) {
    	
    	scope.productsSvc.getProductPictures( scope.$parent.product.id ).then(( product ) => {
    		scope.$parent.product.image = product.data.pictures[0].secure_url;
    		scope.product = scope.$parent.product;
    	})
    }
}