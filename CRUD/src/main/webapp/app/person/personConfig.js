(function() {


	angular.module('personConfig', [ 'ngRoute'
		,'personFormController'
		,'personListController'
		,'personServices'] )
	.config(personConfig)


	function personConfig($routeProvider) {

		$routeProvider.when('/', {

			templateUrl : 'app/person/list.html',
			controller : 'personListController',
			controllerAs : 'cnt'
		}).when('/form', {

			templateUrl : 'app/person/form.html',
			controller : 'personFormController',
			controllerAs : 'cnt'
		});

	}

})();