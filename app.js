const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

require('dotenv/config');

// Middlewares
// execute functions when hitting routes
app.use('/posts', () => {
  console.log('Middleware on posts');
});

// Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/posts', (req, res) => {
  res.send('Posts');
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true}, () => {
  console.log('Connected to database')
})

// Listen to the server
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));