export class ProductsDtv {
    constructor() {
        this.restrict = 'E'
        this.replace = true
        this.templateUrl = 'modules/Products/product_detail.html'
        this.scope = {}
    }
    link(scope, element, attrs) {
    	scope.product = scope.$parent.product;
    }
}