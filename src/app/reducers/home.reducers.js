import { PENDING, REJECTED, FULFILLED } from 'redux-promise-middleware'
import { typeToReducer, get } from 'app/utils'
import { API_FETCH } from 'app/actions/types'

const getHome = get('payload.home')

const initialState = {
  isPending: false,
  error: false,
  data: [],
}

export const homeReducers = typeToReducer({

  [ API_FETCH ]: {
    [ PENDING ]: () => ({
      ...initialState,
      isPending: true,
    }),
    [ REJECTED ]: (state, action) => ({
      ...initialState,
      error: action.payload,
    }),
    [ FULFILLED ]: (state, action) => ({
      ...initialState,
      data: getHome(action),
    }),
  },

}, initialState)
