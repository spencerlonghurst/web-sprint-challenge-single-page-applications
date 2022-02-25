import React from "react";
import PizzaForm from "./PizzaForm";
import { Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/pizza-order-form">Pizza?</Link>
        </div>
      </nav>
      <div>
        <Link to="/pizza-order-form">
          <button id="order-pizza">Pizza?</button>
        </Link>
      </div>

      <Switch>
        <Route path="/pizza-order-form">
          <PizzaForm  />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </>
  );
}
