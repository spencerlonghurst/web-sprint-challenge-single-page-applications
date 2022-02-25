import React from "react";

export default function PizzaForm(props) {
  return (
    <div>
      <header>
        <h2>Build Your Own Pizza</h2>
      </header>
      <form id="pizza-form">
        <div>
          {props.errors.name}
        </div>
        <h3>Build Your Own Pizza</h3>
        <div>
          <h3>Choice of Size</h3>
          <p>Required</p>
        </div>
        <div>
          <label>
            <select id="size-dropdown">
              <option>-- Select your Pizza Size --</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </label>
        </div>
        <div>
          <h3>Add Toppings</h3>
          <p>Choose up to 4</p>
        </div>
        <div>
          <label>
            Cheese
            <input type="checkbox" />
          </label>
          <label>
            Pepperoni
            <input type="checkbox" />
          </label>
          <label>
            Canadian Bacon
            <input type="checkbox" />
          </label>
          <label>
            Grilled Chicken
            <input type="checkbox" />
          </label>
        </div>
        <div>
          <h3>Special Instructions</h3>
        </div>
        <div>
          <input //ADD A WIDTH OF MAYBE 50%
            type="text"
            placeholder="Anything you'd like to add?"
            id="special-text"
          />
        </div>
        <div>
          <h3>Please enter your full name</h3>
        </div>
        <div>
          <input type="text" placeholder="Full name..." id="name-input" />
        </div>
        <div>
          <button id="order-button">Add to Order!</button>
        </div>
      </form>
    </div>
  );
}
