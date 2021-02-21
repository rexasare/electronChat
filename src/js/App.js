import React from "react";
import { Provider } from "react-redux";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomeView from "./views/Home";
import SettingsView from "./views/Settings";
import LoginView from "./views/Login";
import RegisterView from "./views/Register";
import Navbar from "./components/Navbar";
import ChatView from "./views/Chat";

import configureStore from "./store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="content-wrapper">
          <Switch>
            <Route path="/" exact component={HomeView} />
            <Route path="/chat/:id" component={ChatView} />
            <Route path="/settings" component={SettingsView} />
            <Route path="/login" component={LoginView} />
            <Route path="/register" component={RegisterView} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
