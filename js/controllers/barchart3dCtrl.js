'use strict';

app.controller('barchart3dCtrl', function(){

	var barchart3dCtrl = this;

	var min 	=   0;
	var max 	=  75;

	var row1 	= 	0;
	var zero 	= 	0;
	var row2;
	var row3;
	var offset1;

	function updateData(){
		offset1 =  rndInt(15,50);
		row2 =  rndInt(15,50);
		row3 = -row2;
		var offset2 =  offset1*2;
		var offset3 =  offset1*3;

		var cube0  = {key:  0, values: cube(rndInt(min,max), -offset3, row1)};
		var cube1  = {key:  1, values: cube(rndInt(min,max), -offset2, row1)};
		var cube2  = {key:  2, values: cube(rndInt(min,max), -offset1, row1)};
		var cube3  = {key:  3, values: cube(rndInt(min,max),     zero, row1)};
		var cube4  = {key:  4, values: cube(rndInt(min,max),  offset1, row1)};
		var cube5  = {key:  5, values: cube(rndInt(min,max),  offset2, row1)};
		var cube6  = {key:  6, values: cube(rndInt(min,max),  offset3, row1)};

		var cube7  = {key:  7, values: cube(rndInt(min,max), -offset3, row2)};
		var cube8  = {key:  8, values: cube(rndInt(min,max), -offset2, row2)};
		var cube9  = {key:  9, values: cube(rndInt(min,max), -offset1, row2)};
		var cube10 = {key: 10, values: cube(rndInt(min,max),     zero, row2)};
		var cube11 = {key: 11, values: cube(rndInt(min,max),  offset1, row2)};
		var cube12 = {key: 12, values: cube(rndInt(min,max),  offset2, row2)};
		var cube13 = {key: 13, values: cube(rndInt(min,max),  offset3, row2)};

		var cube14 = {key: 14, values: cube(rndInt(min,max), -offset3, row3)};
		var cube15 = {key: 15, values: cube(rndInt(min,max), -offset2, row3)};
		var cube16 = {key: 16, values: cube(rndInt(min,max), -offset1, row3)};
		var cube17 = {key: 17, values: cube(rndInt(min,max),     zero, row3)};
		var cube18 = {key: 18, values: cube(rndInt(min,max),  offset1, row3)};
		var cube19 = {key: 19, values: cube(rndInt(min,max),  offset2, row3)};
		var cube20 = {key: 20, values: cube(rndInt(min,max),  offset3, row3)};

		barchart3dCtrl.data = [
			cube0,
			cube1,
			cube2,
			cube3,
			cube4,
			cube5,
			cube6,
			cube7,
			cube8,
			cube9,
			cube10,
			cube11,
			cube12,
			cube13,
			cube14,
			cube15,
			cube16,
			cube17,
			cube18,
			cube19,
			cube20,
		];
	}

	function rndInt(min, max){
		return Math.floor(d3.randomUniform(min, max)());
	}

	updateData();

	barchart3dCtrl.updateData = function(){
		updateData();
	};

	function cube(h, x, z){
		var g  = 0;
		var m  =  5;
		var	n  = -5;
		var xn = n+x;
		var xm = m+x;
		var zn = n+z;
		var zm = m+z;

		var f = offset1/2-m;
		var r = row2/2;

		return [
			{
				name: 'front',
				tl: {x: xn, y: h, z: zn}, tr: {x: xm, y: h, z: zn},
			  	bl: {x: xn, y: g, z: zn}, br: {x: xm, y: g, z: zn}
			},
			{
				name: 'back',
				tl: {x: xn, y: h, z: zm}, tr: {x: xm, y: h, z: zm},
			  	bl: {x: xn, y: g, z: zm}, br: {x: xm, y: g, z: zm}
			},
			{
				name: 'left',
				tl: {x: xn, y: h, z: zn}, tr: {x: xn, y: h, z: zm},
			  	bl: {x: xn, y: g, z: zn}, br: {x: xn, y: g, z: zm}
			},
			{
				name: 'right',
				tl: {x: xm, y: h, z: zn}, tr: {x: xm, y: h, z: zm},
			  	bl: {x: xm, y: g, z: zn}, br: {x: xm, y: g, z: zm}
			},
			{
				name: 'top',
				tl: {x: xn, y: h, z: zn}, tr: {x: xm, y: h, z: zn},
			  	bl: {x: xn, y: h, z: zm}, br: {x: xm, y: h, z: zm}
			},
			{
				name: 'vgrid1',
				tl: {x: xn - f, y: g, z: z}, tr: {x: xm - m*2, y: g, z: z},
			  	bl: {x: xn - f, y: g, z: z}, br: {x: xm - m*2, y: g, z: z}
			},
			{
				name: 'vgrid2',
				tl: {x: xn - n*2, y: g, z: z}, tr: {x: xm + f, y: g, z: z},
			  	bl: {x: xn - n*2, y: g, z: z}, br: {x: xm + f, y: g, z: z}
			},
			{
				name: 'hgrid1',
				tl: {x: x, y: g, z: z  - r}, tr: {x: x, y: g, z: z  - m},
			  	bl: {x: x, y: g, z: z  - r}, br: {x: x, y: g, z: z  - m}
			},
			{
				name: 'hgrid2',
				tl: {x: x, y: g, z: z - n}, tr: {x: x, y: g, z: z  - n},
			  	bl: {x: x, y: g, z: z + r}, br: {x: x, y: g, z: zm + m}
			},
		];
	}
});
