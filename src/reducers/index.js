import { POST_ADD } from '../actions'

const initialPostState = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false
  },
  '6ni6ok3ym7mf1p33lnez' : {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false
  }

}

function post( state = initialPostState, action) {
  const { id, timestamp, title, body, owner, category } = action

  switch (action.type) {
  case POST_ADD:
    return {
      ...state,
      [id]: {id, timestamp, title, body, owner, category}
    }
  default:
    return state
  }
}

export default post