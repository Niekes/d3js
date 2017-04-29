'use strict';

app.controller('gaugepieCtrl', function($scope, $interval){

	var $gaugepieCtrl = this;

	function rndInt(min, max){
		return Math.floor(d3.randomUniform(min, max)());
	}

	var dataSet = [
		[
			{name: 'A', value: rndInt(15,100)},
			{name: 'B', value: rndInt(15,100)},
			{name: 'C', value: rndInt(15,100)},
			{name: 'D', value: rndInt(15,100)},
			{name: 'E', value: rndInt(15,100)},
		],
		[
			{name: 'A', value: rndInt(15,100)},
			{name: 'B', value: rndInt(15,100)},
			{name: 'C', value: rndInt(15,100)},
			{name: 'D', value: rndInt(15,100)},
			{name: 'E', value: rndInt(15,100)},
		],
		[
			{name: 'A', value: rndInt(15,100)},
			{name: 'C', value: rndInt(15,100)},
			{name: 'D', value: rndInt(15,100)},
			{name: 'E', value: rndInt(15,100)},
		],
		[
			{name: 'A', value: rndInt(15,100)},
			{name: 'B', value: rndInt(15,100)},
			{name: 'D', value: rndInt(15,100)},
			{name: 'E', value: rndInt(15,100)},
			{name: 'F', value: rndInt(15,100)},
			{name: 'G', value: rndInt(15,100)},
			{name: 'H', value: rndInt(15,100)},
			{name: 'I', value: rndInt(15,100)},
		],
		[
			{name: 'A', value: rndInt(15,100)},
			{name: 'B', value: rndInt(15,100)},
			{name: 'D', value: rndInt(15,100)},
			{name: 'H', value: rndInt(15,100)},
		],
	];

	var k = 0;
	function updateData(){
		$gaugepieCtrl.data  = dataSet[(k % dataSet.length)];
		k++;
	}

	updateData();

	var i = $interval(updateData, 5000);

	$scope.$on('$destroy', function(){
		if(i){
			$interval.cancel(i);
		}
	});

});