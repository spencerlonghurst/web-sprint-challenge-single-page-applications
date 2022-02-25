import React, { useState, useEffect } from "react";
import PizzaForm from "./PizzaForm";
import { Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import axios from 'axios';
import * as yup from 'yup';
import formSchema from "./formScheme";

const initialFormValues = {
  size: '',
  name: '',
  special: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false
}

const initialFormErrors = {
  size: '',
  name: '',
  special: ''
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  
  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
    .then(response => {
      setOrder(response.data.data);
    }).catch(err => console.error(err))
  };

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      setOrder([response.data.data, order]);
      setFormValues(initialFormValues);
    }).catch(err => console.error(err))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }
  

  useEffect(() => {
    getOrders()
  }, []);

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
          <PizzaForm
            values={formValues}
            toChange={inputChange}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
