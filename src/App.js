import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout'
import { PrivateRoute } from './components/PrivateRoute';

// Views
import Login from './views/Login'
import Home from './views/Home'
import Patient from './views/Patient'
import PatientForm from './views/PatientForm'
import Schedule from './views/Schedule'

// Redux
import { Provider } from 'react-redux'
import generateStore from './redux/store'

// Static
import './App.css';

function App() {
  const store = generateStore()

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Layout>
              <PrivateRoute exact path="/" component={Home}/>

              <PrivateRoute exact path="/patient" component={Patient}/>
              <PrivateRoute exact path="/patient/new" component={PatientForm}/>

              <PrivateRoute exact path="/schedule" component={Schedule}/>
            </Layout>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
