import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistData from 'redux-localstorage'

// Reducers
import { authReducer } from './authDucks'
import { userReducer } from './userDucks'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer
})

const composeEnhancers = compose(
  applyMiddleware(thunk),
  persistData('auth'),
  persistData('user')
)

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers)
  return store
}