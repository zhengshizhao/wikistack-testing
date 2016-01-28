var chai = require('chai');
var spies = require('chai-spies');
chai.should();
chai.use(spies);
var expect = chai.expect;

process.env.NODE_ENV = 'test';
var models = require('../models/');
// var routes = require('../routes/');
var Page = models.Page;
// var User = models.User;

describe('Page model', function() {
     var page1, page2, page3,page4,page5,page6
    describe('Validations', function() {
    	// create new instance - invalid 
    	beforeEach(function(){
	        page1 = new Page({
	        	// has no title
                //title: 'test',
	        	content: 'Test content'
	        });
	        page2 = new Page({
	        	title: 'Has a title'
	        	// no content
	        });
            page3 = new Page({
                title: 'Has a title and content',
                content: 'Content for passing case'
            });
	    });
        
        it('errors without title', function(done) {
            //console.log("this is page1:",page1);
        	page1.validate(function(err) {
        		// if(!err) {
          //           console.log("error does not exist");
          //           done();
          //       }
               // else {
                    //console.error(err);
                    err.should.exist;
                    done();
               // }
        	})
        });
        it('errors without content', function(done) {
            page2.validate( function(err) {
                    err.should.exist;
                    done();
            })

        });

        it('if there is title and content, does not error', function(done) {
            page3.validate(function(err) {
                expect(err).to.be.null
                //err.should.not.exist;
                done();
               // }
            })


        });


    });

  describe('Statics', function() {
        //console.log("this is page1",page1);

        describe('findByTag', function() {
            
            beforeEach(function(done){
                page4 = new Page({
                 
                    title: 'test1',
                    content: 'Test content1',
                    tags: ['tag1']
                });
                page5 = new Page({
                    title: 'test2',
                    content: 'Test content2',
                    tags: ['tag1','tag2']
                });
                page6 = new Page({
                    title: 'Has a title and content',
                    content: 'Content for passing case',
                    tags: ['tag3','hello']
                });
                Promise.all([page4.save(),page5.save(),page6.save()]).then(function(){
                   done();  
                })        
        });
        afterEach(function(done){
            Page.remove({}).then(function(){
                   done();  
                }) ;
        })
        
            it('gets pages with the search tag', function(done) {
                 Page.findByTag('hello')
                .then(function(pages){
                    expect(pages[0].title).to.equal('Has a title and content');
                     // expect(pages).to.have.lengthOf(1);
                    //expect(pages).to.equal([page6]);
                    done();
                }).then(null,done)
            });

            it('does not get pages without the search tag', function(done) {
                 Page.findByTag('hello')
                .then(function(pages){
                   // expect(pages).to.not.deep.include.members([page6]);
                    // expect(pages).to.should.be.empty;
                     expect(pages).to.have.lengthOf(0);
                      done();
                 }).then(null,done)
               

            });
        });
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