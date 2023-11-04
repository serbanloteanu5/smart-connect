/**
 * File: sophisticated_code.js
 * Description: This complex JavaScript code showcases the implementation of a fictional e-commerce website.
 * It includes multiple classes, functions, and interactions for managing products, carts, and user authentication.
 * Please note that this code is purely fictional and not intended for actual deployment.
 */

// Class representing a Product
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Get the product's details
  getDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

// Class representing a Cart
class Cart {
  constructor() {
    this.items = [];
  }

  // Add a product to the cart
  addItem(product) {
    this.items.push(product);
  }

  // Remove a product from the cart
  removeItem(productId) {
    this.items = this.items.filter((product) => product.id !== productId);
  }

  // Calculate the total price of all items in the cart
  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  // Get the number of items in the cart
  getItemCount() {
    return this.items.length;
  }
}

// Class representing a User
class User {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }

  // Get the user's details
  getDetails() {
    return `ID: ${this.id}, Username: ${this.username}, Email: ${this.email}`;
  }
}

// Auth service for user authentication
class AuthService {
  constructor() {
    this.users = [];
  }

  // Register a new user
  registerUser(username, email) {
    const id = this.generateUniqueId();
    const newUser = new User(id, username, email);
    this.users.push(newUser);
    return newUser;
  }

  // Generate a unique ID for a new user
  generateUniqueId() {
    return Math.floor(Math.random() * 1000);
  }

  // Login a user
  loginUser(username, email) {
    for (const user of this.users) {
      if (user.username === username && user.email === email) {
        return user;
      }
    }
    return null;
  }
}

// Example usage of the e-commerce classes and functions

// Create a few products
const product1 = new Product(1, "Shirt", 25);
const product2 = new Product(2, "Jeans", 50);
const product3 = new Product(3, "Shoes", 75);

// Create a cart
const cart = new Cart();

// Add products to the cart
cart.addItem(product1);
cart.addItem(product2);

// Print cart details
console.log(`Items in Cart: ${cart.getItemCount()}`);
console.log(`Total Price: $${cart.calculateTotalPrice()}`);

// Remove a product from the cart
cart.removeItem(1);

// Print updated cart details
console.log(`Items in Cart: ${cart.getItemCount()}`);
console.log(`Total Price: $${cart.calculateTotalPrice()}`);

// Create an instance of the AuthService
const authService = new AuthService();

// Register a new user
const newUser = authService.registerUser("johndoe", "john@example.com");
console.log(`Registered User: ${newUser.getDetails()}`);

// Login the user
const loggedInUser = authService.loginUser("johndoe", "john@example.com");
console.log(`Logged In User: ${loggedInUser ? loggedInUser.getDetails() : "Invalid credentials"}`);
