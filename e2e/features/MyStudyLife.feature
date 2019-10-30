@current
Feature: Inspect the My Study Life web page
  As a user
  I want to able to login to the page
  So I can see the Dashboard page

  Scenario: 1. The user should be able to open the page
    Given the MyStudyLife Welcome page is opened

    Then the MyStudyLife logo should be hidden
    And the "Sign in with email" button should be visible
    And the "Sign up" button should be visible
    And the following buttons should be visible:
      | Facebook  |
      | Google    |
      | Office365 |

  Scenario: 1. The user should be able to open the page
    Given the MyStudyLife Welcome page is opened

    Then the MyStudyLife logo should be hidden
    And the "Sign in with email" button should be visible
    And the "Sign up" button should be visible
    And the following buttons should be visible:
      | Facebook  |
      | Google    |
      | Office365 |

  Scenario: 1. The user should be able to open the page
    Given the MyStudyLife Welcome page is opened

    Then the MyStudyLife logo should be hidden
    And the "Sign in with email" button should be visible
    And the "Sign up" button should be visible
    And the following buttons should be visible:
      | Facebook  |
      | Google    |
      | Office365 |

  Scenario: 2. The Sign Up page should be visible if the Sign Up button is clicked
    Given the MyStudyLife Welcome page is opened

    When the "Sign up" button is clicked on the Welcome page
    And the Sign Up page has been loaded
    Then the MyStudyLife logo should be visible on the Sign Up page
    And the "Create your account" title should be visible
    And the sign up form should be visible
    And the footer of the Sign Up page should be visible

  Scenario: 3. The user should be able to login to the page
    Given the MyStudyLife Welcome page is opened

    When the "Sign in with email" button is clicked on the Welcome page
    And the user's email typed into the input field
    And the user's password typed into the input field
    And the "Sign in" button is clicked for the login
    Then the Dashboard page should be visible