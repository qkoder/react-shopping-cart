import React from "react";

const Product = ({ product }) => {
    return (
        <div>
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;