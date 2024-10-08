Feature: Verify All Products and Product Detail Page

    Scenario: Verify all products and product detail page
        Given the user is on the homepage
        When the user clicks on the "Products" button
        Then the user should be navigated to the ALL PRODUCTS page successfully
        And the products list is visible
        When the user clicks on "View Product" of the first product
        Then the user is landed on the product detail page
        And the product details are visible
