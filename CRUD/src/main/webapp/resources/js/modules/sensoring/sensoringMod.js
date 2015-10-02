(function(){
    
    'use strict'
    
    angular.module('gtsens-sensoring', [])
        .directive('gtsSensoring', function(){
            
            var html =
                '<div class="panel panel-success">' +
                    '<div class="panel-heading" ng-click="alertar()">' +
                        '<h5>Sensoriamento</h5>' +
                    '</div>' +
                    '<div class="panel-body">' +
                    '</div>' +
                '</div>';
        
            return {
                
                restrict: 'E'
                ,template: html
                ,scope: {
                    //anyAttr: '@'
                }
                
                /*,link: function(scope, element, attrs){                    
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                }*/
                
                ,controller: ['$scope', function($scope){
                    //TODO
                }]
                
            };
        
        });
    
})();