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

    controller( $scope, $rootScope, $timeout) {

    	$scope.currentPage = 1;

    	$scope.$watch("currentPage",() => {
    		// Wait for the change on the currentPage
    		$timeout(() => {
    			if ( $scope.currentPage !== 1) {
	    			$scope.pagination.offset = $scope.currentPage * $scope.pagination.offset;
	    			$rootScope.$emit("PAGE_CHANGED", $scope.currentPage);
	    		}
    		}, 1 );
    	})

    	// Build the array of number pages, if there is available data
    	if ( $scope.data && $scope.data.results ) {

    		// Sets the offset with the number of items of the actual page	
    		$scope.pagination.offset = $scope.data.results.length;
    		$scope.totalPages = $scope.data.paging.total / $scope.pagination.itemsPerPage;

    		$scope.pagedItems = function() {
				var tmp_array = [];
				if ( $scope.currentPage <= $scope.totalPages ) {
					for (let i= $scope.currentPage; i < ($scope.currentPage + $scope.pagination.visiblePages); i++) {
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
}
