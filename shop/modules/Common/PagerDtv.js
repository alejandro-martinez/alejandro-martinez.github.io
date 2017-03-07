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

    controller( $scope, $rootScope) {

    	$scope.currentPage = 1;

    	$scope.$watch("currentPage", function( oldPage, newPage) {
    		if ( newPage !== 1) {
    			$rootScope.$emit("PAGE_CHANGED", $scope.currentPage);
    		}
    	})

    	// Build the array of number pages, if there is available data
    	if ( $scope.data ) {
    		
    		$scope.totalPages = $scope.data.paging.total / $scope.pagination.itemsPerPage;

    		$scope.pagedItems = function() {
				var tmp_array = [];
				if ( $scope.currentPage <= $scope.totalPages ) {
					for (let i= $scope.currentPage; i < $scope.currentPage + $scope.pagination.itemsPerPage; i++) {
						tmp_array.push( i );
					}
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
