import React from 'react';
import pizzaPic from './Pizza.jpg'
import { useHistory } from 'react-router-dom';



console.log(pizzaPic);




export default function Home () {

  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza')
  }

  return (
    <div>
      <h1>THIS IS THE HOME</h1>
      <img src={pizzaPic}></img>
      <button id='order-pizza' onClick={routeToPizza}>Pizza?</button>
    </div>
  )
}