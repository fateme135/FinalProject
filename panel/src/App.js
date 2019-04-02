import React, { Component } from 'react';
import { HomePage, AboutPage, LoginPage, NotFoundPage, ProfilePage, SignUpPage, dashboardAdminPage } from './pages';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRouter from './Router/PrivateRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/panel">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <PrivateRouter path="/dashboard" component={ProfilePage} />
            <PrivateRouter path="/dashboardAdmin" component={dashboardAdminPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

