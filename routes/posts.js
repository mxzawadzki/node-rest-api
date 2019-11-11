const express = require('express'),
      router = express.Router(),
      // Import post model
      Post = require('../models/Post');

router.get('/', (req, res) => {
  res.send('Posts');
});

router.get('/first', (req, res) => {
  res.send('First post');
});

router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // Save to database
  post.save()
      .then(data => {
        // Respond with json data received
        res.json(data);
      })
      .catch(err => {
        res.json({
          message: err
        });
      });
});

module.exports = router;