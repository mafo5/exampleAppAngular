# ExampleAppAngular

[![CI Install](https://github.com/mafo5/exampleAppAngular/workflows/CI%20Install/badge.svg)](https://github.com/mafo5/exampleAppAngular/actions?query=workflow%3A"CI+Install")
[![CI Build](https://github.com/mafo5/exampleAppAngular/workflows/CI%20Build/badge.svg)](https://github.com/mafo5/exampleAppAngular/actions?query=workflow%3A"CI+Build")
[![CI Test](https://github.com/mafo5/exampleAppAngular/workflows/CI%20Test/badge.svg)](https://github.com/mafo5/exampleAppAngular/actions?query=workflow%3A"CI+Test")
[![CI Lint](https://github.com/mafo5/exampleAppAngular/workflows/CI%20Lint/badge.svg)](https://github.com/mafo5/exampleAppAngular/actions?query=workflow%3A"CI+Lint")
[![CI Deploy](https://github.com/mafo5/exampleAppAngular/workflows/CI%20Deploy%20to%20GitHub%20Pages/badge.svg?branch=master)](https://github.com/mafo5/exampleAppAngular/actions?query=workflow%3A"CI+Deploy")

## TLDR;
Example Vanilla Angular App with Tests for [Common Product Requirements](#requirements) to copy and use in any project.

## concept
In the last project I worked, I noticed that many project owners gain a certain amount of discomfort to use third-party libraries. They try to build their product with as less dependency as possible. Because I am very comfortable with testing all my work I stumbled across the problem to get the varieties of solutions on StackOverflow or API documentation to be tested. That's why I want to create an example app in the languages I come across with the common requirements made by the product owners.

## language
This project is made in Angular. React, Vue and WebComponents will come soon...

## principals
I try to test the basic of each component, template and function. I will not target 100% coverage.

In the structure of the project, I highly favour the combination of template, component, style and tests next to each other. In my experience changes of requirements or new ones will come in context and not global implementation. That's why I will structure the project majorly after the context of the requirements.

The app will be responsive.

## requirements

(❌ = WIP, ✅ = Done)

* ❌ User wants to see a list of items to get an overview
* ❌ User wants to see the details when clicked on an item to get all information of one item
* ❌ User wants to get the top of an item details when changed the details to start at the beginning
* ❌ User wants to see icons to fastly recognize certain content
* ❌ User wants to create an item to add more content
* ❌ User wants to update an item to correct false content
* ❌ User wants to delete an item to remove unused content
* ❌ User wants to see certain content as a modal overlay to not be distracted by other features
* ❌ User wants to drop a file to upload it
* ❌ User wants to drag and drop an item to change sorting
* ❌ User wants to see a list of items in a table to quickly compare different item properties of each item
* ❌ User wants to see the app content on small devices with maximal width of 600 Pixel to view content on the go
* ❌ User wants to see the app content on medium devices with maximal width of 1200 Pixel to view content relaxed on a couch
* ❌ User wants to see the app content on large devices with no maximal width to view content at work
* ❌ User wants to switch between a light and a dark theme to view content best depending on day time
* ❌ User wants to see a spinner when data needs time to know to wait for the changes
* ❌ User wants to filter a list with a search value to only see valuable items
* ❌ User wants to see content in google search results to faster find what they are searching
* ❌ User wants to get notified when something happens to be best informed
