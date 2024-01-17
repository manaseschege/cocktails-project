import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import { Home, About, Error, SingleCocktail } from "./pages";

import Navbar from "./components/Navbar";

// import components

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
