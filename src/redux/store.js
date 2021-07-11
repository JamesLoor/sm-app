import { createStore, combineReducers, /* compose ,*/ applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import persistData from 'redux-localstorage'

// Reducers
import { authReducer } from './authDucks'
import { userReducer } from './userDucks'
import { patientReducer } from './patientDucks'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  patient: patientReducer,
})

const composeEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
  persistData('auth'),
)

// const composeEnhancers = compose(
//   applyMiddleware(thunk),
//   persistData('auth'),
// )

export default function generateStore() {
  const store = createStore( rootReducer, composeEnhancers)
  return store
}