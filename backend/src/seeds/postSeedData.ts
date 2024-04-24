import { ChildProcess } from "child_process";

export const postSeedData = [
  {
    _id: '662953ff6918918c0ab72d70',
    postAuthor: {
      userId: '662641ab06a547c6c7f10dc7',
      username: 'Elvis',
      avatar: 'https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg'
    },
    postText: { 
      title: 'I love burgers!',
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
      comment: "You are the King!",
      replies: [{
        replyAuthor: {
          userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
        reply: "Yeah, you're like the king of cholesterol!"
      }
      ]
      },
      {
      commentAuthor: {
        userId: '662641bc06a547c6c7f10dc9',
          username: 'Batman',
          avatar: 'https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&quality=85&auto=format&fit=max&s=99459057199a54c97181e29b0947b5fb'
        },
      comment: "Dude, seriously!?",
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
  
];