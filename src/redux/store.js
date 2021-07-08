import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistData from 'redux-localstorage'

// Reducers
import { userReducer, getNameReducer } from './userDucks'

const rootReducer = combineReducers({
  user: userReducer,
  name: getNameReducer
})

const composeEnhancers = compose(
  applyMiddleware(thunk),
  persistData('user'),
  persistData("name")
)

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers)
  return store
}