var chai = require('chai');
var spies = require('chai-spies');
chai.should();
chai.use(spies);
var expect = chai.expect;

describe ('initial test', function(){
	it('add 2 + 2', function(){
		expect(2+2).to.equal(4)
	})
})

describe('Asynchronous test', function(){
	it('setTimeout waits for the right amount of time', function(done){
		var timestart = new Date();
		setTimeout(function(){
			var timestop = new Date();
			//console.log(timestop - timestart);
			// expect(duration).to.be.closeTo(1000, 50);
			expect(timestop - timestart).to.be.above(1000);
			done();
		}, 1000);
	})
})
describe('spy test', function(){

	it('spy on function called once', function(){
		var obj = {
    	foobar: function () {
        	console.log('foo');
        	return 'bar';
    	}
	}

	var spyableReturn = chai.spy(obj.foobar);
	spyableReturn();

	expect(spyableReturn).to.have.been.called();
	expect(spyableReturn).to.have.been.called.exactly(1);
	})
})
