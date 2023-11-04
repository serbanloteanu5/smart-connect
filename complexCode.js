/*
   File: complexCode.js
   Description: A complex JavaScript code demonstrating various functionalities.
   Author: AI Developer
*/

// Helper function to calculate factorial
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Class representing a Shape
class Shape {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getArea() {
        throw new Error("Method 'getArea()' must be implemented.");
    }

    getCircumference() {
        throw new Error("Method 'getCircumference()' must be implemented.");
    }
}

// Subclass representing a Rectangle
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getCircumference() {
        return 2 * (this.width + this.height);
    }
}

// Function to find the maximum value in an array
function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// Function to calculate the Fibonacci sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Event listener for button click
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!");
});

// Async function to fetch data from an API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Calculate the factorial of a number
const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

// Create an instance of Rectangle and calculate its area and circumference
const rectangle = new Rectangle("Rectangle", 4, 6);
console.log(`Area of ${rectangle.getName()} is ${rectangle.getArea()}`);
console.log(`Circumference of ${rectangle.getName()} is ${rectangle.getCircumference()}`);

// Find the maximum value in an array
const array = [3, 9, 2, 5, 1];
console.log(`Maximum value in the array ${array} is ${findMax(array)}`);

// Calculate the Fibonacci sequence
const n = 10;
console.log(`Fibonacci sequence of length ${n}: ${fibonacci(n)}`);

// Check if a string is a palindrome
const palindromeStr = "A man, a plan, a canal, Panama!";
console.log(`"${palindromeStr}" is a palindrome: ${isPalindrome(palindromeStr)}`);

// Execute the fetchData function with a sample API URL
const apiUrl = "https://api.example.com/data";
fetchData(apiUrl).then(data => console.log("Fetched data:", data)).catch(error => console.error(error));