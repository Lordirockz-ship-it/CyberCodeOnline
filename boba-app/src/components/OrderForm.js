import React from 'react';

const OrderForm = ({ cart }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Placing order:', cart);
    alert('Order placed! (Check the console for details)');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Your Order</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
      <button type="submit" disabled={cart.length === 0}>
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;
