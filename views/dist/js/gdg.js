var app = angular.module('gdg', []);

app.controller('HeaderController', ['$scope', function ($scope) {
	$scope.people = [
		{name: 'sahil', reg: '12bce0416'},
		{name: 'sarthak', reg: '12bce04'},
		{name: 'shamvil', reg: '12bce016'},
	]
	$scope.addMember = function(){
		var person = {};
		person.name = $scope.name;
		person.reg = $scope.reg;
		$scope.people.push(person);
	}
	$scope.delete = function(index){
		$scope.people.splice(index, 1);
	}
}])
app.controller('AboutController', ['$scope', function ($scope) {
	$scope.name ='abou';
}])
app.controller('TeamController', ['$scope', function ($scope) {
	$scope.name ='team';
}])