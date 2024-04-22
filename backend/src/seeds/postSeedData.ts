export const postSeedData = [
  {
    user: '60b0f7c8b3e1f3b3f8b3b1b1',
    postText: {
      title: 'Exmaple post title',
      description: 'Example post description'
    },
    tags: [{
      mainTags: ['tag1', 'tag2'],
      subTag: ['subtag1', 'subtag2']
    }],
    images: [{
      url: 'https://example.com/image1',
      caption: 'Image 1'
    }],
    videos: [{
      url: 'https://example.com/video1',
      caption: 'Video 1'
    }],
    comments: [{
      user: '60b0f7c8b3e1f3b3f8b3b1b1',
      comment: 'This is a comment',
      replies: [{
        user: '60b0f7c8b3e1f3b3f8b3b1b1',
        comment: 'This is a reply'
      }]
    }],
    votes: [{
      user: '60b0f7c8b3e1f3b3f8b3b1b1',
      type: 'upvote'
    }]
  }
];