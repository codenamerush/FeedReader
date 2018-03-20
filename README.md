# FeedReader

### What the project is
This is a simple feed-reader application that loads 4 different feeds onto the browser.
The purpose of this project is to get acquainted with Jasmine which is a testing framework.

### Resources
All the code (apart from testing) was provided by Udacity.

### How it works
There are 4 different urls stored in allFeeds.
All these URLs are used to test out various test suites.

### The test suites created 
* A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* A test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* A new test suite named "The menu".
* A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* A test suite named "Initial Entries".
* A test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
* A test suite named "New Feed Selection".
* A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

### Run
Download this repo and run index.html
All the test suites are in feedreader.js
The data an logic is in app.js
