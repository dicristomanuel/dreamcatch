import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { flashReducers as flash } from './flash.reducers'
import { homeReducers as home } from './home.reducers'

export default combineReducers({
  flash,
  home,
  routing: routerReducer,
})
