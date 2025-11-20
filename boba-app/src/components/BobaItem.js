import React from 'react';

const BobaItem = ({ name, price, addToCart }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default BobaItem;
