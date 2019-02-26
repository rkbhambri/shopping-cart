import React from 'react';
import ProductList from '../../Components/ProductList/ProductList';

const DisplayProducts = (props) => {
    return (
        <div className="display-products-wrapper col-md-9">
            <div className="product-count">{props.products.length} Product(s) found.</div>
            <ProductList product={props.products} addToCart={(productId) => props.addToCart(productId)} />
        </div>
    );
};

export default DisplayProducts;