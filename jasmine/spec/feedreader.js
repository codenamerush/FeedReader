/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have defined urls', function() {
            for (i = 0 ; i < allFeeds.length ; i++) {
                //checks that urls are defined in each feed
                expect(allFeeds[i].url).toBeDefined();
                //checks that urls are not empty
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('have defined names', function() {
            for (i = 0 ; i < allFeeds.length ; i++) {
                //checks that names are defined in each feed
                expect(allFeeds[i].name).toBeDefined();
                //checks that names are not empty
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    describe('The menu', function() {

        it("is hidden by default", function() {
            //checks the presence of a class in body
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it("can be toggled", function() {
            //stores the menu icon 
            var trigger = $('.menu-icon-link');
            //triggers click event for the menu button
            trigger.click();
            //it should get rid of the class when clicked first
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //trigger click event again
            trigger.click();
            //it should now have the class again to hide the menu
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        //to manage the asynchronous function
        beforeEach(function(done) {
            //load the first feed
            loadFeed(0, function() {
                done();
            });
        });

        it('are present after loadFeed function is completed', function(done) {
            //checks that there is at least one entry
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        //variables to store both feeds
        var feed1;
        var feed2;
 
        beforeEach(function(done) {
            loadFeed(0,function() {
                //store first feed then load second feed
                feed1 = $('.feed').html();
                loadFeed(1,function() {
                    //get the next feed
                    feed2 = $('.feed').html();
                    done();
                });
            });
        });
  
        it('should have different items', function(done){
            //check that both feeds aren't the same
            expect(feed1).not.toBe(feed2);
            done();
        });

    });
}());
