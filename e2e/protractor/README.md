For the purpose of this assigment I choose to use protractor for e2e tests.

All the protractor tests for the user stories from the assigment are located to this path: e2e/protractor/tests/
I have created a conf.js file which contains the configuration for protractor to run the tests which includes:
- the selenium address
- path to the spec files
- a list with the browsers that the protractor tests should run
- default timeout interval and other options

Prerequisite before running the tests: install protractor and selenium webdriver
1. open a cmd or bash command line
1. npm install -g protractor
2. update the webdriver package by typing: webdriver-manager update
3. to start selenium server: webdriver-manager start

To run the tests:
1. protractor e2e/conf.js

Please note that one of the test 'should name and status be mandatory' from US03-spec.js will fail. 
The reason is that it is suppose to test the mandatory fields when creating a new pet record but the functionality it seems to be not implemented or this is a bug.
Also I have created a helper.js which contains some helper methods for my tests. 
