import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Layout from './components/Common/Layout'
import PrivateRoute from './components/Router/PrivateRoute'
import generateStore from './redux/store'
import { Login, Home, Patient, PatientNew, Schedule } from './pages'

const App = () => {
  const store = generateStore()

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Layout>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/pacientes" component={Patient} />
            <PrivateRoute exact path="/nuevo/paciente" component={PatientNew} />
            {/* <PrivateRoute
              exact
              path="/patient/:id"
              component={PatientDetail}
            /> */}
            <PrivateRoute exact path="/agenda" component={Schedule} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
