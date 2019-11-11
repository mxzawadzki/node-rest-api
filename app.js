const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

require('dotenv/config');

// Middlewares
// execute functions when hitting routes
// app.use('/posts', () => {
//   console.log('Middleware on posts');
// });

// Use body parser built into express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and use middleware
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

// Routes
app.get('/', (req, res) => {
  res.send('Home');
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
  console.log('Connected to database')
})

// Listen to the server
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));