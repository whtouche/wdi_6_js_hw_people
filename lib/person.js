var Person = function(firstName, lastName, age, weight, height, friends){
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age || 30,
  this.weight = weight || 80,
  this.height = height || Math.floor(Math.random() * 200) + 150,
  this.friends = friends || [];
};

Person.prototype = {
  fullName: function(){
    return this.firstName + " " + this.lastName;
   },
  weightInStone: function(){
    return this.weight / 6.35;
   },
  addFriend: function(newFriend){
    friends.push(newFriend);
   },
  removeFriend: function(oldFriend){
    var i = this.friends.indexOf(oldFriend);
    if(i != -1) {
    array.splice(i, 1);
    }
   },
  greetPeople: function(greets){
    return "Hi " + greets;
   }
};
var ben = new Person('Ben', 'White');
var joe = new Person('Joe', 'Smith', 36, 75, 190, ['ben', 'marie']);
// I should also be able to call these functions on a `Person`:
// * `fullName` should return the person's first name plus their last name
// * `weightInStone` should return the person's weight in [stone](http://en.wikipedia.org/wiki/Stone_%28unit%29) - 6.35 kg - 1 st
// * `addFriend` should take a `Person` object and add it to the person's friends
// * `removeFriend` should take a name string and remove the person with that name from the person's friends, if there is such a friend
// * `greetPeople` should return a string that greets an optional array of `Person` objects (default to the person's friends) by their full names, with an optional greeting (default to `"Hi"`). If no people are provided and the person has no friends, the function should throw an error.
// Create a `Person` "class"
//Use the Constructor Function Object Creation Pattern.
// A `Person` must be initialized with a `firstName` and a `lastName`, plus any of the following optional properties:
// * `age` (in years, default to 30)
// * `weight` (in kilograms, default to 80)
// * `height` (in centimeters, default to a random value between 150 and 200)
// * `friends` (an array of other `Person` objects, default to empty)
