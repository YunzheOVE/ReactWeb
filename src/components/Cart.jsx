import React from 'react';

const Cart = ({ cartItems, updateCart, clearCart }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleIncrement = (item) => {
        updateCart(item.name, item.quantity + 1);
    };

    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            updateCart(item.name, item.quantity - 1);
        } else {
            removeFromCart(item.name);
        }
    };

    const removeFromCart = (name) => {
        updateCart(name, 0);
    };

    return (
        <div className="cart-modal">
            <h3>Your Cart</h3>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.name} className="cart-item">
                            <div className="cart-item-details">
                                <span>{item.name}</span>
                                <div className="cart-qty-controls">
                                    <button onClick={() => handleDecrement(item)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrement(item)}>+</button>
                                </div>
                            </div>
                            <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            <button onClick={() => removeFromCart(item.name)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <strong>Total: ${totalAmount.toFixed(2)}</strong>
                    </div>
                    <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;