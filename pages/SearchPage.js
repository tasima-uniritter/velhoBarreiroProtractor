'use strict';

var SearchPage = function() {
    var searchInput = $('#search_query_top');
    var searchButton = $('#searchbox > button');

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');
    }

    this.getCurrentUrl = function(url) {
         return browser.getCurrentUrl()
    };

    this.submitSearch = function () {
        searchButton.click();
    }

    this.typeSearch = function(query){
        searchInput.sendKeys(query);
    }

    this.resultsText = function() {
        return $('#center_column > h1 > span.heading-counter').getText();
    }

    this.failMessage = function() {
        return $('#center_column > p').getText();
    }

   this.search = function(query){
        this.typeSearch(query);
        this.submitSearch();
    }
}

module.exports = SearchPage;