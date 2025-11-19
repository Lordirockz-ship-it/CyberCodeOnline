import React from 'react';
import BobaItem from './BobaItem';

const BobaMenu = ({ addToCart }) => {
  const menu = [
    { name: 'Milk Tea', price: 5 },
    { name: 'Taro Tea', price: 6 },
    { name: 'Thai Tea', price: 5.5 },
  ];

  return (
    <div>
      <h2>Boba Menu</h2>
      {menu.map((item) => (
        <BobaItem
          key={item.name}
          name={item.name}
          price={item.price}
          addToCart={() => addToCart(item)}
        />
      ))}
    </div>
  );
};

export default BobaMenu;
