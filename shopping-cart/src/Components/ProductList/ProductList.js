import React from 'react';
import './ProductList.css';

const ProductList = (props) => {
    let productList = null;
    productList = props.product.map((data, index) => {
        return (
            <div className="product-list mt-5 pl-8" style={{ width: '280px' }} key={data.id}>
                {
                    data.isFreeShipping ? <div className="text-right mt-2">Free Shipping</div> :
                        <div className="text-right mt-2">No Free Shipping</div>
                }
                <img
                    className="img-rounded"
                    src={require(`../../static/products/${data.sku}_1.jpg`)}
                    style={{ height: '350px', width: '210px' }}
                    alt="Rkbhambri" />
                <div className="title pt-2 text-center">{data.title}</div>
                <hr className="w-25 text-center" />
                <div className="price text-center">{data.currencyFormat} {data.price}</div>
                <div className="add-to-cart-btn text-center pt-4">
                    <button className="btn btn-md btn-primary" onClick={() => props.addToCart(data.id)}>ADD TO CART</button>
                </div>
            </div>
        );
    });
    return (
        <div className="display-products-list row">
            {productList}
        </div>
    );
};

export default ProductList;