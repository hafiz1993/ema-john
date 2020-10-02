import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const first10 = fakeData.slice(0, 11);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(existingKey => {
        const product = fakeData.find(pd => pd.key === existingKey);
        product.quantity = saveCart[existingKey];
        return product;
        
        })
        setCart(previousCart);
    }, [])

    const handleAddProduct = (product) => {
        const toBeaddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeaddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeaddedKey);
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }

        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }


    return (
        <div className="twin-container">
            <div className="product-container">

                {
                    products.map(pd => <Product
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>)

                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review">
                <button className="cart-btn" ><FontAwesomeIcon icon={faShoppingCart} /> Review Order</button>
            </Link>
                </Cart>
            </div>
               
        </div>
    );
};

export default Shop;