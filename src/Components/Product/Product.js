import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-title">{name}</h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon </p>
                <button 
                    className="cart-btn"
                    onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;