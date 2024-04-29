import { ChildProcess } from "child_process";

export const postSeedData = [
  {
    _id: '662953ff6918918c0ab72d73',
    postAuthor: {
      userId: '662640880f468f628d71ea48',
      username: 'Sally',
    },
    postText: { 
      title: 'I love burgers 1!',
      body: "Sally has an undeniable fondness for a meticulously crafted burger, where each layer of succulent beef, melty cheese, crisp lettuce, and juicy tomatoes harmonize into a symphony of flavors that tantalize her taste buds."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      },
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d70',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 2!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d71',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 3!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d72',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 4!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d83',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 5!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d74',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 6!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d75',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 7!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d76',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 8!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d77',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 9!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d90',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 10!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d91',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 11!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d92',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers 12!',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  },
  {
    _id: '662953ff6918918c0ab72d93',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers! 13',
      body: "Hey folks, I love burgers! I just love them so much. I'm like the Burger King of Tenessee. I've tried all the burgers in the world and I can tell you that the best burger is the one you make at home. I'm not talking about the frozen patties you get at the store. I'm talking about the real deal."
    },
    tags: {
      mainTags: ['food'],
      subTag: ['burgers', 'meaty']
    },
    images: [{
      url: 'https://pbs.twimg.com/media/Dh0cuiYXUAA14b9?format=jpg&name=4096x4096',
      caption: 'big fat meaty burger'
    }, {
      url: 'https://offloadmedia.feverup.com/secretchicago.com/wp-content/uploads/2020/05/28075805/Screen-Shot-2020-05-22-at-8.20.42-AM-1024x616.png',
      caption: 'big fat meaty burger'
  }],
    videos: [{
      url: 'https://www.youtube.com/watch?v=1SVv4RuGWYk',
      caption: 'fat burger challenge'
  
    }],
    comments: [
      {
      commentAuthor: {
        userId: '662640880f468f628d71ea49',
        username: 'Bob',
        avatar: 'https://assets-prd.ignimgs.com/2024/01/25/bob-the-builder-button-1706221996136.jpg'
      },
      commentText: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        replyText: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      commentText: "Dude, seriously!?",
      replies: []
      }
    ],
    votes: [
      {
      user: '662640880f468f628d71ea49',
      type: 'upvote'
    },
      {
      user: '662641bc06a547c6c7f10dc9',
      type: 'downvote'
    }
    ]
  }
];