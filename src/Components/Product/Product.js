import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-title"><Link to ={"/product/"+key}>{name}</Link></h4>
                <br />
                <p><small>By: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock - order soon </p>
                { props.showAddToCart === true && <button 
                    className="cart-btn"
                    onClick={()=>props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}/> Add to Cart
                </button>}
            </div>

        </div>
    );
};

export default Product;