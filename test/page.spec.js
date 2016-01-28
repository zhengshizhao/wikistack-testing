require('../models/');
require('../routes/');

describe('Testing Page schema and model', function () {

	// create new instance of Page with test data

    describe('Test new instance - invalid data', function () {

    	// create new instance - invalid 
    	beforeEach(function(){
	        var page1 = new Page({
	        	// has no title
	        	content: 'Test content'
	        })
	        var page2 = new Page({
	        	title: 'Has a title'
	        	// no content
	        })
	    })

        xit('test if user entered title', function () {});
        xit('test if user entered content', function () {});

    });
    describe('Test new instance - valid data', function () {

    	// create new instance - valid 
    	beforeEach(function(){
	        var page2 = new Page({
	        	title: 'Test title 2'
	        	content: 'Test content'
	        })
	    })

        xit('test if URLTitle is created', function () {});


    });
});
describe('A different category', function () {});