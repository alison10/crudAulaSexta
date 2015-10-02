(function() {


	angular.module('personFormController',[])
       .controller('personFormController', personFormController);
       // .controller('ServerSetController', ServerSetController)
       // .factory('SensorVM', SensorVM)
       // .controller('SensorController', SensorController);

    function personFormController($rootScope,$scope,personServices,$location){


var vm = {};
this.vm = vm;
vm.entity =$rootScope.item || {};
vm.submit = submit;
vm.goList = goList;

    		function submit(){
    			personServices.save(vm.entity).then(success,fail);
    						
    		}

    		function goList(){
    			$location.path('/').search({});
    		}
    		
    		function success(response){
    			$location.path('/').search({});
    		}
    		function fail(reason){
    					alert('Fail on save');
    		}

    }
   

})();