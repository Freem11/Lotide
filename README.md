# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @freem11/lotide`

**Require it:**

`const _ = require('@freem11/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns the 1st value in an array 
* `tail(...)`: Returns the number of items left in an array after the 1st value is removed 
* `middle(...)`: Returns the middle value in an array that is odd numbered (ex 5 item) middle two values of a even numbered array (ex 6 items)