Feature: Verify Product Quantity in Cart

    Scenario: User adds a product with quantity 4 to the cart and verifies the quantity
        Given the user is on the homepage
        When the user clicks on 'View Product' for any product on the homepage
        Then the product detail page should be visible
        When the user increases the quantity to 4
        And the user clicks 'Add to cart'
        And the user clicks 'View Cart'
        Then the product should be displayed in the cart with quantity 4
