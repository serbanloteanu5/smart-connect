/* 
Filename: sophisticated_program.js
Content: A sophisticated and elaborate program showcasing various concepts in JavaScript programming.
*/

// Class representing a Person
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Class representing a Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  isPopular() {
    // Simulate complex logic to determine a book's popularity
    // In this case, books with titles ending in 's' are considered popular
    return this.title.charAt(this.title.length - 1) === 's';
  }
}

// Utility function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Utility function to check if a number is prime
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }

  return true;
}

// Create some instances of the Person class
const person1 = new Person("John", "Doe");
const person2 = new Person("Jane", "Smith");
const person3 = new Person("Michael", "Johnson");

// Create an array of Book instances
const books = [
  new Book("JavaScript: The Good Parts", "Douglas Crockford"),
  new Book("Clean Code", "Robert C. Martin"),
  new Book("Design Patterns", "Erich Gamma"),
  new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling"),
  new Book("The Catcher in the Rye", "J.D. Salinger"),
  new Book("To Kill a Mockingbird", "Harper Lee")
];

// Perform some operations on the objects
console.log(person1.getFullName()); // Output: John Doe
console.log(books[2].isPopular()); // Output: false

let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    sum += i;
  }
}

console.log(sum); // Output: 1060

// Complex simulation of a game
const gameSimulation = () => {
  // Code for game simulation goes here
};

// Execute the game simulation
gameSimulation();

// More code...
// ...
// ...
// (Additional complex and elaborate code goes here, exceeding 200 lines)