const express = require('express'),
      router = express.Router(),
      // Import post model
      Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch(err) {
    res.json({
      message: err
    });
  }
});

// router.get('/first', (req, res) => {
//   res.send('First post');
// });

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  // Save to database
  try {
    const savedPost = await post.save();
    // Respond with json data received
    res.json(savedPost);
  } catch(err) {
    res.json({
      message: err
    });
  }

  // post.save()
  //     .then(data => {
  //       // Respond with json data received
  //       res.json(data);
  //     })
  //     .catch(err => {
  //       res.json({
  //         message: err
  //       });
  //     });
});

module.exports = router;