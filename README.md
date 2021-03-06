# Javascript People

Fork and clone this repo to get started. 

## Assignment

Create a `Person` "class" (remember, technically [there are no classes in JavaScript](http://stackoverflow.com/questions/2752868/does-javascript-have-classes)). Use the Constructor Function Object Creation Pattern.

A `Person` must be initialized with a `firstName` and a `lastName`, plus any of the following optional properties:

* `age` (in years, default to 30)
* `weight` (in kilograms, default to 80)
* `height` (in centimeters, default to a random value between 150 and 200)
* `friends` (an array of other `Person` objects, default to empty)

I should also be able to call these functions on a `Person`:

* `fullName` should return the person's first name plus their last name
* `weightInStone` should return the person's weight in [stone](http://en.wikipedia.org/wiki/Stone_%28unit%29)
* `addFriend` should take a `Person` object and add it to the person's friends
* `removeFriend` should take a name string and remove the person with that name from the person's friends, if there is such a friend
* `greetPeople` should return a string that greets an optional array of `Person` objects (default to the person's friends) by their full names, with an optional greeting (default to `"Hi"`). If no people are provided and the person has no friends, the function should throw an error.

Be sure to make clean single-task Git commits with descriptive messages!
