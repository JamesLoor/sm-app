import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Layout from './components/Layout'

// Views
import Home from './views/Home'
import Login from './views/Login'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Layout>
            <Route path="/" component={Home}/>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
