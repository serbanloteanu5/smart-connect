/* complex_code.js */

// This code demonstrates a complex implementation of a website's user authentication system
// It includes features such as user registration, login, password hashing, session management, and user roles

// Import external modules
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');

// Create an express application
const app = express();

// Initialize session middleware
app.use(session({
  secret: 'supersecretkey',
  resave: false,
  saveUninitialized: false
}));

// Database placeholder
const usersDB = {};

// Register route
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  // Check if username already exists
  if (usersDB[username]) {
    res.status(409).json({ error: 'Username already exists' });
    return;
  }
  
  // Generate password hash
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: 'Failed to register user' });
      return;
    }
    
    // Store the user in the database
    usersDB[username] = {
      username,
      passwordHash: hash,
      role: 'user'
    };
    
    res.json({ message: 'User registered successfully' });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = usersDB[username];
  
  // Check if user exists
  if (!user) {
    res.status(401).json({ error: 'Invalid username or password' });
    return;
  }
  
  bcrypt.compare(password, user.passwordHash, (err, isValid) => {
    if (err || !isValid) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    
    // Store user session
    req.session.user = user;
    
    res.json({ message: 'User logged in successfully' });
  });
});

// Protected route
app.get('/admin', (req, res) => {
  const user = req.session.user;
  
  // Check if user is logged in
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  
  // Check if user has admin role
  if (user.role !== 'admin') {
    res.status(403).json({ error: 'Forbidden' });
    return;
  }
  
  res.json({ message: 'Welcome, admin!' });
});

// The rest of your routes and code goes here...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});