import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import PrivateRoute from './components/PrivateRoute'
import generateStore from './redux/store'
import {
  Home,
  Login,
  Patient,
  PatientDetail,
  PatientNew,
  Schedule
} from './pages'

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Layout>
              <PrivateRoute exactad path="/" component={Home} />
              <PrivateRoute exact path="/patient" component={Patient} />
              <PrivateRoute exact path="/new/patient" component={PatientNew} />
              <PrivateRoute
                exact
                path="/patient/:id"
                component={PatientDetail}
              />
              <PrivateRoute exact path="/schedule" component={Schedule} />
            </Layout>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

export default App
