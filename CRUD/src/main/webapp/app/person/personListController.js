(function() {


	angular.module('personListController',[ ]).controller('personListController', personListController);

    function personListController($rootScope,$scope,personServices,$location){
        
        var vm = {};
        this.vm = vm;
        vm.filter = filter;
        vm.remove = remove;
        vm.edit = edit;
        vm.goForm =goForm;

		personServices.load().then(successLoad,failLoad);

		
		function goForm(item){
			$location.path('/form').search({item:item});
			$rootScope.item = item;
		}

		function edit(item){
			goForm(item);
			
		}	


function remove(item){
	personServices.remove(item).then(successRemove,failOnRemoveLoad);
}

	function filter(){
		if(vm.serachValue  == '' || vm.serachValue  == null)
		personServices.load().then(successLoad,failLoad);
			else
		personServices.loadBy(vm.serachValue ).then(successLoad,failLoad);
	}



function successRemove(response){
filter();
}

function failOnRemoveLoad(cause){
	alert('Ops Falha')
}

function successLoad(response){
	vm.persons = response;
}

function failLoad(cause){
	alert(cause);
}



    }
   
})();