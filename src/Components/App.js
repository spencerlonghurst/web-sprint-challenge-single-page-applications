import React from "react";
import PizzaForm from "./PizzaForm";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';

export default function App() {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza">Pizza?</Link>
        </div>
      </nav>
      

      <Switch>
        <Route path="/pizza">
          <PizzaForm  />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
