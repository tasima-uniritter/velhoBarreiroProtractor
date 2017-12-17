'use strict';

var ContactUsPage = function() {
    var subjectSelect = $('#id_contact');
    var emailInput = $('#email');
    var orderInput = $('#id_order');
    var messageInput = $('#message');
    var submitButton = $('#submitMessage');

    this.get = function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php?controller=contact');
    }

    this.getSubjectSelect = function() {
        return subjectSelect;
    }

    this.getEmailInput = function() {
        return emailInput;
    }

    this.getOrderInput = function() {
        return orderInput;
    }

    this.getMessageInput = function() {
        return messageInput;
    }

    this.failMessage = function() {
        return $('#center_column > div > ol > li').getText();
    }

    this.submitMessage = function () {
        submitButton.click();
    }
}

module.exports = ContactUsPage;