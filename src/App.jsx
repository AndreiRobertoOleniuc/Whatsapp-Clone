import React from "react";
import { FirebaseProvider } from "./Data/FirebaseProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Screens/Login";

export default function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </FirebaseProvider>
  );
}

