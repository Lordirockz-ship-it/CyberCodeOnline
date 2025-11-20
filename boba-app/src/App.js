import React, { useState } from 'react';
import BobaMenu from './components/BobaMenu';
import OrderForm from './components/OrderForm';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <h1>Boba Shop</h1>
      <BobaMenu addToCart={addToCart} />
      <OrderForm cart={cart} />
    </div>
  );
}

export default App;
