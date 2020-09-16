import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      {!user ? (
            <Login />

      ):(

      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Body />
          </Route>
          
        </Switch>
      </Router>
      )}
    </div>
  );
}

export default App;
