import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import persistData from 'redux-localstorage'
import thunk from 'redux-thunk'

import { authReducer } from './authDucks'
import { patientReducer } from './patientDucks'
import { userReducer } from './userDucks'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  patient: patientReducer
})

const composeEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
  persistData('auth')
)

export default function generateStore() {
  const store = createStore(rootReducer, composeEnhancers)
  return store
}
