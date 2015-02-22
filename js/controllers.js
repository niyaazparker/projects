var samewaveapp = angular.module('samewaveapp', []);

samewaveapp.controller ('samewavecontroller', ['$scope', '$http', function($scope, $http) 
				{
			$http.get('js/samewave_tech_test.json').success(function(data){
				$scope.samewaveinfo = data;
				});
				
				}]
			
			);


