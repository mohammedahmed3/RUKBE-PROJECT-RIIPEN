import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Materials from './components/materials/Materials';
import Distributors from './components/distributors/Distributors';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/distributors" component={Distributors} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;