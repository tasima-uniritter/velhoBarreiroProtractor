'use strict';
var SearchPage = require('../pages/SearchPage.js')

describe('Search Cenarios', function () {
    var page;

    beforeEach(function () {
        page = new SearchPage();
        page.get();
    })

    it('Deve exibir os resultados da pesquisa', function () {
        page.search('Short')
        page.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toEqual("http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Short&submit_search=");
        });    
        expect(page.resultsText()).toEqual("4 results have been found.");
    });

    it('Não deve exibir resultados da pesquisa quando a pesquisa não retornar resultados', function () {
        page.search('consultainvalida')
        page.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toEqual("http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=consultainvalida&submit_search=");
        });    
        expect(page.resultsText()).toEqual("0 results have been found.");
    });

    it('Deve exibir mensagem quando a pesquisa for em branco', function () {
        page.search('')
        page.getCurrentUrl().then(function(actualUrl) {
            expect(actualUrl).toEqual("http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=&submit_search=");
        });    
        expect(page.resultsText()).toEqual("0 results have been found.");
        expect(page.failMessage()).toEqual("Please enter a search keyword");
    });
});
