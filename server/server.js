const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// User Model
const User = mongoose.model('User', userSchema);

// Registration Endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password before saving it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
});

// Login Endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  const user = await User.findOne({ username });

  // Check if the user exists and the password is correct
  if (user && (await bcrypt.compare(password, user.password))) {
    // Generate JWT token
    const token = jwt.sign({ username: user.username }, 'yourSecretKey', {
      expiresIn: '1h', // Token expires in 1 hour, adjust as needed
    });

    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
