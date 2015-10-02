(function() {


	angular.module('productListController',[ ]).controller('productListController', productListController);

    function productListController($rootScope,$scope,productServices,$location){
        
        var vm = {};
        this.vm = vm;
        vm.filter = filter;
        vm.remove = remove;
        vm.edit = edit;
        vm.goForm =goForm;

		productServices.load().then(successLoad,failLoad);

		
		function goForm(item){
			$location.path('/form').search({item:item});
			$rootScope.item = item;
		}

		function edit(item){
			goForm(item);
			
		}	


function remove(item){
	productServices.remove(item).then(successRemove,failOnRemoveLoad);
}

	function filter(){
		if(vm.serachValue  == '' || vm.serachValue  == null)
		productServices.load().then(successLoad,failLoad);
			else
		productServices.loadBy(vm.serachValue ).then(successLoad,failLoad);
	}



function successRemove(response){
filter();
}

function failOnRemoveLoad(cause){
	alert('Ops Falha')
}

function successLoad(response){
	vm.products = response;
}

function failLoad(cause){
	alert(cause);
}



    }
   
})();