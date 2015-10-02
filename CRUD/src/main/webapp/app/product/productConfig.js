(function() {


	angular.module('productConfig', [ 'ngRoute'
		,'productFormController'
		,'productListController'
		,'productServices'] )
	.config(productConfig)


	function productConfig($routeProvider) {

		$routeProvider.when('/', {

			templateUrl : 'app/product/list.html',
			controller : 'productListController',
			controllerAs : 'cnt'
		}).when('/form', {

			templateUrl : 'app/product/form.html',
			controller : 'productFormController',
			controllerAs : 'cnt'
		});

	}

})();