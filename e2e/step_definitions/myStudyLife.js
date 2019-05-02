'use strict';

const {
    defineSupportCode
} = require('cucumber');
const welcomePage = require('../page_objects/welcomePage');
const loginPage = require('../page_objects/loginPage');
const dashboardPage = require('../page_objects/dashboardPage');
const signUpPage = require('../page_objects/signUpPage');
const user = require('../data/user');

defineSupportCode(({
    Given,
    When,
    Then,
    setDefaultTimeout
}) => {
    setDefaultTimeout(GLOBAL_TIMEOUT);

    //Opens the MyStudyLife Welcome page.
    Given(/^the MyStudyLife Welcome page is opened$/, () => {
        return welcomePage.load();
    });

    //Clicks on the given button on the Welcome page.
    When(/^the "([^"].*)" button is clicked on the Welcome page$/, text => {
        return welcomePage.clickOnButton(text);
    });

    //Waits until the Sign Up page is loading.
    When(/^the Sign Up page has been loaded$/, () => {
        return signUpPage.waitForLoading();
    });

    //Types in the credentials.
    When(/^the user's (email|password) typed into the input field$/, inputType => {
        return loginPage.typeInCredentials(user[inputType], inputType);
    });

    //Clicks on the given button for the login.
    When(/^the "([^"].*)" button is clicked for the login$/, text => {
        return loginPage.clickOnSignIn(text);
    });

    //Check if the MyStudyLife logo is visible.
    Then(/^the MyStudyLife logo should be (visible|hidden)$/, visibility => {
        return expect(welcomePage.isLogoVisible()).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the given button is visible.
    Then(/^the "([^"].*)" button should be (visible|hidden)$/, (text, visibility) => {
        return expect(welcomePage.isButtonVisible(text)).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the MyStudyLife logo is visible on the Sign Up page.
    Then(/^the MyStudyLife logo should be (visible|hidden) on the Sign Up page$/, visibility => {
        return expect(signUpPage.isLogoVisible()).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the given title is visible on the Sign Up page.
    Then(/^the "([^"].*)" title should be (visible|hidden)$/, (text, visibility) => {
        return expect(signUpPage.isTitleVisible(text)).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the sign up form is visible.
    Then(/^the sign up form should be (visible|hidden)$/, visibility => {
        return expect(signUpPage.isFormVisible()).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the footer is visible.
    Then(/^the footer of the Sign Up page should be (visible|hidden)$/, visibility => {
        return expect(signUpPage.isFooterVisible()).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the Dashboard page is visible.
    Then(/^the Dashboard page should be (visible|hidden)$/, visibility => {
        return expect(dashboardPage.isVisible()).to.eventually.be.equal(visibility === 'visible');
    });

    //Check if the given buttons are visible.
    Then(/^the following buttons should be visible:$/, data => {
        let buttons = convertDataTable(data);
        return expect(welcomePage.areButtonsVisible(buttons)).to.be.true;
    });
});