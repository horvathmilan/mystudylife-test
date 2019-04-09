'use strict';

class SignUpPage {
    constructor() {
        this.logo = element(by.css('img[src*="logo"]'));
        this.form = element(by.css('.sign-up form'));
        this.footer = element(by.css('footer'));

        this.title = text => element(by.cssContainingText('.title', text));
    }

    /**
     * Returns if the logo is visible.
     *
     * @returns {Promise.<boolean>}
     */
    isLogoVisible() {
        return this.logo.isVisible();
    }

    /**
     * Returns if the given title is visible.
     *
     * @param {string} text The given text.
     * @returns {Promise.<boolean>}
     */
    isTitleVisible(text) {
        return this.title(text).isVisible();
    }

    /**
     * Returns if the sign up form is visible.
     *
     * @returns {Promise.<boolean>}
     */
    isFormVisible() {
        return this.form.isVisible();
    }

    /**
     * Returns if the footer is visible.
     *
     * @returns {Promise.<boolean>}
     */
    isFooterVisible() {
        return this.footer.isVisible();
    }

    /**
     * Waits until the logo is visible.
     *
     * @returns {Promise.<boolean>}
     */
    waitForLoading() {
        return browser.wait(() => {
            return this.isLogoVisible();
        });
    }
}

module.exports = new SignUpPage();