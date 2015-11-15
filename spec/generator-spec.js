var chai = require("chai");

var should = chai.should();
var expect = chai.expect;

var generator = require('../js/generator.js');


describe('Generator', function (){
	it('should be a function', function(){
		expect(generator).to.exist,
		expect(generator).to.be.a('function');
	});
	
	it('must accept a number', function (){
		expect(generator()).to.deep.equal([], 'should have a parameter');
		expect(generator('dog')).to.deep.equal([], 'should have a parameter');
		expect(generator(1)).to.have.length(1, 'parameter should be a number');
	});
	
	describe('the result', function (){
	
	it('should return an array', function (){
		expect(generator()).to.be.an('array');
	});
	
	it('should be in a random order and unqiue', function (){
		var arrayA = generator (10);
		var arrayB = generator (10);
		var arrayC = generator (10);

		expect(arrayA).to.not.equal(arrayB);
		expect(arrayB).to.not.equal(arrayC);
		expect(arrayC).to.not.equal(arrayA);
	});
	
	it('the numbers should not exceed the length value', function (){
		var result = generator(4);
		for(var i = 0; i < result.length; i++){
			expect(result[i]).to.be.below(result.length);
		}		
	});
	
	it('the length equal the number passesd in',function (){
		 expect(generator(10)).to.have.length(10);
	});
	
	});

});


