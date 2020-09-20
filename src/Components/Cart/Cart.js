import React from 'react';
import './Cart.css';




const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce ((total, prd) => total + prd.price , 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;

    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }




    return (
        <div>
            <h3>Order summery</h3>
            <p>Items ordered:{cart.length}</p>
            <p>product Price{formatNumber(total)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {formatNumber(tax)}</small></p>
            <p>Total Price :{grandTotal}</p>
            <br />
           { 
           props.children
           }
        </div>
    );
};

export default Cart;