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

    	// Calculate the amount of pages that the pager will have, if there is available data
    	if ( $scope.data ) {
    		$scope.pagedItems = function() {
    			console.log(tmp_array)
				var tmp_array = [];
				for (let i= $scope.currentPage; i < $scope.currentPage + $scope.pagination.itemsPerPage; i++) {
					tmp_array.push( i );
				}
				return tmp_array;
			}
    	}
    	
    	$scope.prevPage = function() {
    		if ( $scope.currentPage >= 10)
    			$scope.currentPage-= 10;
    	}

    	$scope.nextPage = function() {
    		$scope.currentPage+= 10;	
    	}

    	$scope.setPage = function( _page ) {
    		$scope.currentPage = _page;
    	}        
    }

    link( scope, element, attrs ) {
    	
    }
}
