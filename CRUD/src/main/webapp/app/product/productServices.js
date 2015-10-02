(function() {
    
	angular.module('productServices', []).service("productServices", productServices);   

    function productServices($http, $q, $location){
        return ({
			load : _load,
			loadBy : _loadBy,
			remove : _remove,
			save : _save
		});


  function _save (entity) {

var request = $http({
				method : "POST",
				url : '/CRUD/rest/product',
				data : entity,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }



  function _load () {

var request = $http({
				method : "GET",
				url : '/CRUD/rest/product',
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }



  function _remove (entity) {

var request = $http({
				method : "DELETE",
				url : '/CRUD/rest/product',
				data : entity,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }

  function _loadBy (name) {

var request = $http({
				method : "GET",
				url : '/CRUD/rest/product/filter/'+name,
				headers : {
					'Content-Type' : 'application/json'
				}
			});
			
			return (request.then(handleSuccess, handleError));
			
  }
	

		function handleError(response) {
			return ($q.reject(response));
		}

		function handleSuccess(response) {
		return (response.data);
		}
    };
    
})();
