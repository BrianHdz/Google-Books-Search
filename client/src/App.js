import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/search";
import Saved from "./pages/saved";
import "./App.css";

function App() {
  return (
    <div className="App">



      <Router>
        <div>

          <Switch>

            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>

            <Route exact path={"/saved"}>
              <Saved />
            </Route>

          </Switch>
        </div>
      </Router>


    </div>
  );
}


export default App;
