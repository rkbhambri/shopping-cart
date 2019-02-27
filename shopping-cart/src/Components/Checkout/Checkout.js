import React from 'react';
import bagIcon from '../../static/bag.jpg';

const Checkout = (props) => {
    let items = null;
    if (props.checkoutCart.length > 0) {
        items = (
            props.checkoutCart.map((item, index) => {
                return (
                    <div className="item p-2 row border-bottom" key={index}>
                        <div className="items-data col-md-9 row">
                            <div className="img img-rounded">
                                <img
                                    className="img-rounded"
                                    src={require(`../../static/products/${item.sku}_1.jpg`)}
                                    style={{ height: '100px', width: '100px' }}
                                    alt="Rkbhambri" />
                            </div>
                            <div className="item-description">
                                <div className="title">
                                    <p>{item.title}</p>
                                </div>
                                <div className="row ml-1">
                                    <div className="size">{item.availableSizes[0]} | </div>
                                    <div className="style">{item.style}</div>
                                </div>
                                <div className="quantity" style={{ paddingLeft: '3px' }}>
                                    <b>Quantity</b> : {item.quantity}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 text-right">
                            {item.currencyFormat}{item.price}
                        </div>
                        <div className="remove-item">
                            <button type="button" className="close" onClick={() => props.removeItemFromCart(item.id)}>&times;</button>
                        </div>
                    </div>
                );
            })
        )
    }

    let checkoutTotal = 0;

    if (props.checkoutCart.length) {
        props.checkoutCart.map(data => {
            checkoutTotal = checkoutTotal + data.price;
            return 1;
        })
    }

    return (
        <div className="checkout text-right border">
            <button type="button"
                className="btn btn-default"
                data-toggle="modal" data-target="#myModal">
                <img className="mr-1" src={bagIcon} alt="Rk bhambri" style={{ height: '50px', width: '50px' }} />
            </button>
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Your cart</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body text-left">
                            {props.checkoutCart.length === 0 ? <h5>Your cart is empty</h5> : items}
                        </div>
                        <div className="modal-close p-2">
                            <div className="row">
                                {props.checkoutCart.length > 0 && <div className="total col-md-3 pl-3">Total : {checkoutTotal}</div>}
                                <div
                                    className={props.checkoutCart.length > 0 ? "col-md-9 text-right" : "col-md-12 text-right"}>
                                    <button type="button" className="btn btn-sm btn-primary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;