import React from "react";



export default function PizzaForm(props) {

  const clickSubmit = event => {
    event.preventDefault();
    props.submit();
  }

  const change = event => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    const valueToUse = type === 'checkbox' ? checked : value;
    props.toChange(name, valueToUse);
  }



  return (
    <div>
      <header>
        <h2>Build Your Own Pizza</h2>
      </header>
      <form id="pizza-form" onSubmit={clickSubmit}>

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
            <select id="size-dropdown" value={props.values.size} onChange={change} name='size'>
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
            <input 
            type="checkbox"
            checked={props.values.topping1}
            onChange={change}
            name='topping1'
            />
          </label>
          <label>
            Pepperoni
            <input 
            type="checkbox" 
            checked={props.values.topping2}
            onChange={change}
            name='topping2'
            />
          </label>
          <label>
            Canadian Bacon
            <input
             type="checkbox"
             checked={props.values.topping3}
             onChange={change}
             name='topping3'
             />
          </label>
          <label>
            Grilled Chicken
            <input 
            type="checkbox" 
            checked={props.values.topping4}
            onChange={change}
            name='topping4'
            />
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
            value={props.values.special}
            onChange={change}
            name='special'
          />
        </div>
        <div>
          <h3>Please enter your full name</h3>
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Full name..." 
          id="name-input"
          value={props.values.name}
          onChange={change}
          name='name'
          />
        </div>
        <div>
          <button id="order-button">Add to Order!</button>
        </div>
      </form>
    </div>
  );
}
