import mongoose from "mongoose";

const replySchema = new mongoose.Schema({
  replyAuthor: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  replyText: { type: String },
}, {
  timestamps: true
});

const commentSchema = new mongoose.Schema({
  commentAuthor: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  },
  commentText: { type: String },
  replies: [replySchema],
}, {
  timestamps: true
});

const postModel = new mongoose.Schema({
  postAuthor: {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    }
  },
  postText: { 
    title: { type: String},
    body: { type: String }
  },
  tags: {
    mainTags: [String],
    subTag: [String]
  },
  images: [{
    url: { type: String, required: false },
    caption: { type: String, required: false }

  }],
  videos: [{
    url: { type: String, required: false },
    caption: { type: String, required: false }

  }],
  comments: [commentSchema],
  votes: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type: { type: String, enum: ['upvote', 'downvote']}
  }]
}, {
  timestamps: true
});

export default mongoose.model('Post', postModel);
