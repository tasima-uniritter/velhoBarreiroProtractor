'use strict';
var ContactUsPage = require('../pages/ContactUsPage.js')

describe('ContactUs Cenarios', function () {
    var page;

    beforeEach(function () {
        page = new ContactUsPage();
        page.get();
    })

    it('Deve mostrar mensagem de validação se não informar o email', function () {
        page.submitMessage();
        expect(page.failMessage()).toEqual("Invalid email address.");
    });
});