Feature: Add products to cart

#Test Case (12) ----> Add Products in Cart

    Scenario: Add two products to the cart and verify their details
        Given the user is on the homepage
        Then the homepage is visible successfully
        When the user clicks the Products button
        Then the user should be navigated to the ALL PRODUCTS page
        When the user adds the first product to the cart
        And the user adds the second product to the cart
        And the user views the cart
        Then both products are added to the Cart
        And the user verifies the products prices, quantity, and total price
