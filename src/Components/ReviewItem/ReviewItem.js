import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, key, price, img } = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid red',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };
    return (
        
        <div style={reviewItemStyle} className="review-item">
            
            <h4 className="product-title">{name}</h4>
            <p>quantity: {quantity}</p>
            <p><small>Price: {price}</small></p>
            <br />
            <button className="cart-btn"
                onClick={() => props.removeProduct(key)}

            >Remove</button>

        </div>
    );
};

export default ReviewItem;