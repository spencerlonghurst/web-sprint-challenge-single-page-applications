import React from 'react';
// import pizzaPic from './Assets/Pizza.jpg'
import { useHistory } from 'react-router-dom';
import './Home.css';








export default function Home () {

  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza')
  }

  return (
    <div>
      <h1>Welcome to BloomTech Eats!</h1>
      <button id='order-pizza' onClick={routeToPizza}>Pizza?</button>
    </div>
  )
}