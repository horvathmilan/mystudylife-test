'use strict';

class DashboardPage {
    constructor() {
        this.dashInner = element(by.css('.dash-inner'));
    }

    /**
     * Returns if the Dashboard page is visible.
     *
     * @returns {Promise.<boolean>}
     */
    isVisible() {
        return this.dashInner.isVisible();
    }
}

module.exports = new DashboardPage();