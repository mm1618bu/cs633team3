// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb+srv://administrator:developer@fooder.eduq39h.mongodb.net', { useNewUrlParser: true });

const exampleSchema = new mongoose.Schema({
    title: String,
    description: String,
    _id: String,
    rating: String,
    deliveryTime: String,
    cuisine: String
  });
  
  const Example = mongoose.model('Example', exampleSchema);
  
  app.use(express.json()); // Enable JSON parsing for request bodies
  
  // Define API routes for CRUD operations
  
  // Create an example
  app.post('/api/examples', async (req, res) => {
    const { title, description } = req.body;
    const example = new Example({ title, description });
    await example.save();
    res.json(example);
  });
  
  // Read all examples
  app.get('/api/examples', async (req, res) => {
    const examples = await Example.find();
    res.json(examples);
  });
  
  // Read a single example by ID
  app.get('/api/examples/:id', async (req, res) => {
    const example = await Example.findById(req.params.id);
    res.json(example);
  });
  
  // Update an example by ID
  app.put('/api/examples/:id', async (req, res) => {
    const { title, description } = req.body;
    const updatedExample = await Example.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(updatedExample);
  });
  
  // Delete an example by ID
  app.delete('/api/examples/:id', async (req, res) => {
    await Example.findByIdAndRemove(req.params.id);
    res.send('Example deleted');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });