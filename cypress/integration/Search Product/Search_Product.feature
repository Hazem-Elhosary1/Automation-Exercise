Feature: Search Product

# Test Case 9 ---> Add Search Product 
    Scenario: Search for a product by name
        Given the user is on the homepage
        Then the homepage is visible successfully
        When the user clicks on the "Products" button
        Then the user is navigated to the ALL PRODUCTS page successfully
        When the user enters "dress" in the search input and clicks search button
        Then the "SEARCHED PRODUCTS" title is visible
        And all the products related to search are visible
