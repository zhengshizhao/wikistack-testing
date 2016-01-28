var models = require('../models/');
// var routes = require('../routes/');
var Page = models.Page;
// var User = models.User;

describe('Page model', function() {

    describe('Validations', function() {
    	// create new instance - invalid 
    	beforeEach(function(){
	        var page1 = new Page({
	        	// has no title
	        	content: 'Test content'
	        });
	        var page2 = new Page({
	        	title: 'Has a title'
	        	// no content
	        });
	    });

        it('errors without title', function(done) {

        	page1.validate(function(err) {
        		console.error(err);
                err.should.exist;
                done();
        	})

        });
        xit('errors without content', function() {});

    });
    describe('Test new instance - valid data', function () {

    	// create new instance - valid 
    	beforeEach(function(){
	        var page2 = new Page({
	        	title: 'Test title 2',
	        	content: 'Test content'
	        })
	    })

        xit('test if URLTitle is created', function () {});


    });
});



/*



describe('Page model', function() {

    describe('Validations', function() {
        xit('errors without title', function() {});
        xit('errors without content', function() {});
    });

    describe('Statics', function() {
        describe('findByTag', function() {
            xit('gets pages with the search tag', function() {});
            xit('does not get pages without the search tag', function() {});
        });
    });

    describe('Methods', function() {
        describe('findSimilar', function() {
            xit('never gets itself', function() {});
            xit('gets other pages with any common tags', function() {});
            xit('does not get other pages without any common tags', function() {});
        });
    });

    describe('Virtuals', function() {
        describe('route', function() {
            xit('returns the url_name prepended by "/wiki/"', function() {});
        });
    });

    describe('Hooks', function() {
        xit('it sets urlTitle based on title before validating', function() {});
    });

});

*/