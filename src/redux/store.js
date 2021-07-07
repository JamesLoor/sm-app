import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistData from 'redux-localstorage'

// Reducers
import userReducer from './userDucks'

const rootReducer = combineReducers({
  user: userReducer
})

const composeEnhancers = compose(
  applyMiddleware(thunk),
  persistData('user')
)

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers)
  return store
}