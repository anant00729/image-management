# IS24 Full Stack Developer Technical Test

Welcome to the technical test for the IS24R Full Stack Developer position, within the Government Digital Experience Division of Citizen Services, with the Province of British Columbia. 

This test is designed to assess your technical skills, and to provide you with an opportunity to showcase your creativity and resourcefulness.

You will be marked on the functionality of the overall solution, showcasing your skills as a Full Stack Developer, as well as your coding style, commenting, and ability to work within a containerized docker environment.


## Marking Criteria

- Functionality: The solution works as expected and meets the acceptance criteria.
- Coding style and standards: The code is easy to read, uses proper indentation and is well commented (including updating the included README.md file).


## Plagiarism  - !PLEASE NOTE! 

It is acceptable to refer to resources online and get assistance there. Yes! We all use the web from time to time to make it work, and we are okay with this. However, the work you submit must be your own. A library or framework here, and code inclusion there with a reference to where it came from, is totally acceptable. But the work you submit must be your own.


## Submission - !IMPORTANT!

Please include all relevant information in the provided README.md file, including things such as:
- frameworks used
- software versions (such as NPM, React, etc.)
- instructions for use
- any additional information as required

Please complete your submission as indicated in the instructions in the email.


## System Requirements

Minimum local machine requirements for this technical test are:
- A personal computer (Linux, Windows, MAC)
- 64-bit processor and 4 GB RAM
- Administrative access
- Internet access


## The Assignment

> As a store owner, I want to be able to create a product listing so that I can easily manage all of my products.

You will create a basic full-stack application in a single docker-compose.yaml with the following services:
- db (can be MariaDB, MySQL or PostgreSQL)
- api (written in python)
- frontend (using the React framework)

For a sample docker-compose.yaml, please visit [the official compose site on docker.com](https://docs.docker.com/compose/).

You are free to use any additional frameworks or libraries as desired, as long as they are documented in the provided README.md file.


### The Product Model

Each product should have the following fields:
- Product name (text)
- Product ID (number)
- Product description (text area)
- Product colour (text)
- Product size (small, medium or large)


### Backend/API

The backend/api should store the model for the Products, should provide a RESTful API for the frontend, and should handle the logic between the API and the model.

The API should receive and output data in the JSON format, and should be able to handle the functionality as outlined and required by the Frontend below.

You are encouraged to use any frameworks that simplify development for this assignment, and document which ones you used in the README.md file.

Assume that all requests coming to the API are authorized, so adding any security mechanisms on the API calls themselves is out of scope for this assignment.


### Frontend

The frontend will have 5 separate functionality pieces that will need to be added. Ideally you will use something like Material-UI to ease component creation, but you will not be marked on how visually appealing your solution is, just the functionality as outlined below. 


#### View products

This page should show all products that have been entered in a table format (each product is a row).

Minimum details that should show for each product in this view are (feel free to add more fields in this view if desired):
- Product ID
- Product Name

Each product should also have a way to "click" the product and proceed to the view product page. This can be done by linking the product name to the view page, or by having separate buttons for actions such as Delete and Update.


#### Add product

The Add Product page should provide a form to input data for the product using the fields as described above:
- Product name (text)
- Product ID (number)
- Product description (text area)
- Product colour (text)
- Product size (small, medium or large)

There should also be a "Save" button. When the user saves the new product, the following should occur:
- the new product gets sent over the API to the backend, where it gets saved to the DB
- the user is alerted that save was successful
- the user is redirected after the successful save, either to the product listing page, or to the view page for the product that they just added


#### View product

The View Product page should read from the API and show the data for every field for a single product. There should be buttons or links to "Update" and "Delete" the current product.


#### Update product

The Update Product interface should be very similar to the Add Product one, where the form fields are pre-populated with the product data. 

When the user updates the product, the following should occur:
- the updated product gets sent over the API to the backend, where the *existing* product gets updated in the DB
- the user is alerted that the update was successful
- the user is redirected after the successful update, either to the product listing page, or to the view page for the product that they just updated (should be consistent behaviour with Add Product)


#### Delete Product

When the user deletes the product, the following should occur:
- the delete request gets sent over the API to the backend, where it gets removed from the DB
- the user is alerted that delete was successful
- the user is redirected after the successful delete to the product listing page