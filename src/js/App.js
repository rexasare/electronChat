import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StoreProvider from "./store/StoreProvider";

import HomeView from "./views/Home";
import SettingsView from "./views/Settings";
import WelcomeView from "./views/Welcome";
import ChatView from "./views/Chat";

import { listenToAuthChanges } from "./actions/auth";
import LoadingView from "./components/shared/LoadingView";

function AuthRoute({ children, ...rest }) {
  const user = useSelector(({ auth }) => auth.user);
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          React.cloneElement(onlyChild, { ...rest, ...props })
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

const ContentWrapper = ({ children }) => (
  <div className="content-wrapper">{children}</div>
);

const ChatApp = () => {
  const dispatch = useDispatch();
  const isChecking = useSelector(({ auth }) => auth.isChecking);
  useEffect(() => {
    dispatch(listenToAuthChanges());
  }, []);

  if (isChecking) {
    return <LoadingView />;
  }

  return (
    <Router>
      <ContentWrapper>
        <Switch>
          <Route path="/" exact component={WelcomeView} />
          <AuthRoute path="/chat/:id">
            <ChatView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
        </Switch>
      </ContentWrapper>
    </Router>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <ChatApp />
    </StoreProvider>
  );
};

export default App;
