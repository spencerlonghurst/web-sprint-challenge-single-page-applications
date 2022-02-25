import React from 'react';

import { useHistory } from 'react-router-dom';

export default function Home () {

  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza')
  }

  return (
    <div>
      <h1>THIS IS THE HOME</h1>
      {/* <img src='../../Assets/Pizza.jpg'></img> */}
      <button id='order-pizza' onClick={routeToPizza}>Pizza?</button>
    </div>
  )
}