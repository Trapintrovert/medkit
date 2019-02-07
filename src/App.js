import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default hot(module)(App);
