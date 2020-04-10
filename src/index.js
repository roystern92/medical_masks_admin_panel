import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

//For the routes
import { BrowserRouter } from "react-router-dom";

//Redux Configuration

//Redux Configuration
import { compose } from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Reducers
import authReducer from "./store/reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.register();
