'use strict';

class WelcomePage {

    constructor() {
        this.logo = element(by.css('img[src*="logo"]'));

        this.button = text => element(by.cssContainingText('.btn', text));
    }

    /**
     * Opens the MyStudyLife Welcome page.
     *
     * @returns {WebElementPromise}
     */
    load() {
        browser.get('https://app.mystudylife.com');
        return this.waitForLogo();
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
     * Waits until the logo is visible.
     *
     * @returns {Promise}
     */
    waitForLogo() {
        return browser.wait(() => {
            return this.isLogoVisible();
        });
    }

    /**
     * Returns if the given button is visible.
     *
     * @param {string} text Text of the given button.
     * @returns {Promise.<boolean>}
     */
    isButtonVisible(text) {
        return this.button(text).isVisible();
    }

    /**
     * Returns if the given buttons are visible.
     *
     * @param {array} buttons The given buttons.
     */
    areButtonsVisible(buttons) {
        return buttons.every(button => {
            return this.isButtonVisible(button);
        });
    }

    /**
     * Clicks on the given button.
     *
     * @param {string} text Text of the given button.
     * @returns {Promise}
     */
    clickOnButton(text) {
        return this.button(text).click().then(() => browser.sleep(extraWait));
    }
}

module.exports = new WelcomePage();