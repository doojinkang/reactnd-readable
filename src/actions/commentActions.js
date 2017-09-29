import { COMMENT_ADD, COMMENT_VOTE, COMMENT_DELETE, COMMENT_CONFIG
       } from './types.js'

export function commentAdd({id, comment}) {
  return {
    type: COMMENT_ADD,
    id,
    comment
  }
}

export function commentVote ({ id, newVoteScore }) {
  return {
    type: COMMENT_VOTE,
    id,
    newVoteScore
  }
}

export function commentDelete ({id}) {
  return {
    type: COMMENT_DELETE,
    id,
  }
}

export function commentConfig ({sortBy, order}) {
  return {
    type: COMMENT_CONFIG,
    sortBy,
    order,
  }
}