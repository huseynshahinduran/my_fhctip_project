@hotellist
  Feature: Hotel List feature
    Scenario: testing the hotel list on the web page
      Given user is on the fhc trip page
      And  user checks if the Hotel List button appears on the home page
      And user clicks on Hotel List button
      And user gets the existing URL and checks it
      Then user checks on the page title