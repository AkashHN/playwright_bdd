Feature: The swagLabs Website

  Scenario Outline: As a user, I can log into the secure area  and complete a purchase

    Given I am on the login page
    When I login with <username> and <password>
    When I add all items to the cart
    When I proceed to checkout
    When I fill the checkout information with '<firstName>', '<lastName>', and '<zipCode>'
    When I complete the checkout process
    Then I should see the order confirmation page

    # Examples:
    #   | username      | password     |                                                                              
    #   | standard_user | secret_sauce |                                                
    #  | foobar        | barfoo               
Examples:
      | username      | password     | firstName | lastName | zipCode |
      | standard_user | secret_sauce | John      | Doe      | 12345   |