export class PagerDtv {
	constructor() {
        this.restrict = 'E'
        this.replace = true
        this.templateUrl = 'modules/Common/pager.html'
        this.scope = {
        	data: '=',
        	pagination: '='
        }
    }

    controller( $scope ) {
    	
        $scope.currentPage = 1;
    	$scope.totalPages = 1;
    	$scope.pagedItems = [];

    	$scope.prevPage = function() {
    		$scope.currentPage+= 1;
    	}

    	$scope.nextPage = function() {
    		if ( $scope.currentPage > 1)
    			$scope.currentPage+= 1;	
    	}

    	$scope.setPage = function( _page ) {
    		$scope.currentPage = _page;
    	}        
    }

    link(scope, element, attrs) {
    	
    }
}
