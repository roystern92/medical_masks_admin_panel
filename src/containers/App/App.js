import "./App.css";
import Layout from "../Layout/Layout";
import React, { Component } from "react";
import Routes from "../../shared/Routes/Routes";

class App extends Component {
  componentDidMount() {
    console.log("[App] componentDidMount");
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Routes />
        </Layout>
      </div>
    );
  }
}

export default App;
