(function() {

	angular.module('productFormController', []).controller(
			'productFormController', productFormController);

	function productFormController($rootScope, $scope, productServices,
			$location) {

		var vm = {};
		this.vm = vm;
		vm.entity = $rootScope.item || {};
		vm.submit = submit;
		vm.goList = goList;

		function submit() {
			productServices.save(vm.entity).then(success, fail);
		}

		function goList() {
			$location.path('/').search({});
		}

		function success(response) {
			$location.path('/').search({});
		}
		function fail(reason) {
			alert('Fail on save');
		}

	}

})();