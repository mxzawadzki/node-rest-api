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

// Get specific post
router.get('/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch(err) {
    res.json({
      message: err
    });
  }
});

// Submit post
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

// Update post
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({
      _id: req.params.postId
    },
    {
      $set: {
        title: req.body.title,
        description: req.body.description
      }
    });
    res.json(updatedPost);
  } catch(err) {
    res.json({
      message: err
    });
  }
});

// Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({
      _id: req.params.postId
    });
    res.json(removedPost);
  } catch(err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;