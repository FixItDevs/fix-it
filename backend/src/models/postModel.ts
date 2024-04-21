import mongoose from "mongoose";

const postModel = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postText: { 
    title: { type: String},
    description: { type: String }
  },
  tags: [{
    mainTags: [String],
    subTag: [String]
  }],
  images: [{
    url: { type: String, required: false },
    caption: { type: String, required: false }

  }],
  videos: [{
    url: { type: String, required: false },
    caption: { type: String, required: false }

  }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    comment: { type: String },
    replies: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      comment: { type: String }
    }]
  }],
  votes: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type: { type: String, enum: ['upvote', 'downvote']}
  }]
}, {
  timestamps: true
});

const Post = mongoose.model('Post', postModel);

module.exports = Post;
