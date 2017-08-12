// @flow

import { INCREMENT, DECREMENT, ADD_NEW_COUNTER } from './constants'

export type Action = {
  type: string,
  payload?: {
    id: number
  }
}

export type ActionAsync = (dispatch: Function, getState: Function) => void

//each action should have the following signiture.
//  {
//     type: <type of action>,        type is required
//     payload: <the actual payload>  payload is optional. if you don't
//                                    have anything to send to reducer,
//                                    you don't need the payload. for example
//                                    newCounter action
//  }

//this action tell the reducer which counter with specified id needs to be
//incremented.
export const increment = (id: number): Action => {
  return {
    type: INCREMENT,
    payload: {
      id
    }
  }
}

//this action tell the reducer which counter with specified id needs to be
//decremented.
export const decrement = (id: number): Action => {
  return {
    type: DECREMENT,
    payload: {
      id
    }
  }
}

//tells the reducer, we need a new counter on the scene with a new ID
export const newCounter = (): Action => {
  return {
    type: ADD_NEW_COUNTER
  }
}
