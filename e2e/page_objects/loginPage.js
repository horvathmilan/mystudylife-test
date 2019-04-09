'use strict';

class LoginPage {
    constructor() {
        this.signInButton = text => element(by.cssContainingText('button', text));
        this.inputField = text => element(by.css('input[name="' + text + '"]'));
    }

    /**
     * Types in the given credential into the given input field.
     *
     * @param {string} text The given input value.
     * @param {string} inputType The given input type.
     * @returns {Promise.<void>}
     */
    typeInCredentials(text, inputType) {
        return this.inputField(inputType).sendKeys(text);
    }

    /**
     * Clicks on the Sign in button.
     *
     * @param {string} text The given text.
     * @returns {Promise}
     */
    clickOnSignIn(text) {
        return this.signInButton(text).click().then(() => browser.sleep(extraWait));
    }
}

module.exports = new LoginPage();