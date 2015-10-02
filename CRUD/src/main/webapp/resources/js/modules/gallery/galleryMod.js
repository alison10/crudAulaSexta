(function(){
    
    'use strict'
    
    angular.module('gtsens-gallery', [])
        /*.controller('GtsensGalleryController', ['$scope', function($scope){
            //TODO
            $scope.alertar = function(){
                        alert('ok');
                    };
        }])*/
        .directive('gtsGallery', function(){
        
            var html =
                '<div class="panel panel-success">' +
                    '<div class="panel-heading" ng-click="alertar()">' +
                        '<h5>{{galleryTitle}}</h5>' +
                    '</div>' +
                    '<div class="panel-body">' +
                        '<p>Nononono nonono nonono</p>' +
                        '<p>Nononono nonono nonono</p>' +
                        '<p>Nononono nonono nonono</p>' +
                    '</div>' +
                '</div>';
        
            return {
                restrict: 'E'
                
                //,templateUrl: 'resources/js/modules/gallery/gallery.html'
                //,templateUrl: 'gallery.html'
                ,template: html
                
                ,scope: {
                    galleryTitle: '@'
                }                
                                
                /*,link: function(scope, element, attrs){                    
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                }*/
                
                ,controller: ['$scope', function($scope){
                    $scope.alertar = function(){
                        alert('ok');
                    };
                }]
                              
            }
        });
    
})();