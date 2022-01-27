Feature: Google Login

    The main purpose of the Google Login feature on 'google.com' is 
    to provide users with an easy way to log in to their Google Account 
    and easily access the Google Application that available to them.

    Scenario: User Login
        Given User opens https://www.google.com
        When User clicks the Sign in button
            And User enters 'vegetable.drama' into the email field
            And User clicks the Next button
            And User enters 'vegetable.drama.pwd123' into the password field
            And User clicks the Next button
        Then User can see https://www.google.com page as logged in
