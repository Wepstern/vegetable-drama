Feature: Google Searching

    The main purpose of Google Search is to search for text 
    in publicly accessible documents offered by web servers, 
    as opposed to other data, such as images or data contained 
    in databases.

    Scenario: Search for Notified Malmö
        Given User opens http://www.google.com
        When User enters 'Notified Malmö' into the search bar
        And User clicks the search button
        Then User can see 'https://www.notified.com' on the first page of the search results
