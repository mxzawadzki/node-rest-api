const mongoose = require('mongoose');

// Describe how post looks with schema
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export name and schema it should use
module.exports = mongoose.model('Posts', PostSchema);