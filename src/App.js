import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout'

// Views
import Home from './views/Home'
import Login from './views/Login'
import NotFound404 from './views/NotFound404';

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
            <Route path="/login" component={Login}/>
            <Layout>
              <Route path="/" component={Home}/>
            </Layout>
            <Route path="*" component={NotFound404}/>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
