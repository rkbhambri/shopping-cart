import React, { Component } from 'react';
import Heading from '../../Components/Heading/Heading';
import Products from '../Products/Products';
import Checkout from '../../Components/Checkout/Checkout';

class ShoppingCart extends Component {

    state = {
        checkoutCart: []
    };

    checkoutCart = (itemData) => {
        const index = this.state.checkoutCart.findIndex(item => item.id === itemData.id);
        if (index > -1) {
            let checkoutCart = [...this.state.checkoutCart];
            checkoutCart[index].quantity = checkoutCart[index].quantity + 1;
            this.setState({
                ...this.state,
                checkoutCart
            });
        } else {
            itemData = {
                ...itemData,
                quantity: 1
            }
            this.setState({
                ...this.state,
                checkoutCart: this.state.checkoutCart.concat(itemData)
            });
        }
    };
    removeItemFromCart = (itemId) => {
        let checkoutCart = [...this.state.checkoutCart];
        const itemIndex = checkoutCart.findIndex(item => item.id === itemId)
        if (itemIndex > -1) {
            checkoutCart.splice(itemIndex, 1)
        }
        this.setState({
            ...this.state,
            checkoutCart
        });
    }
    render() {
        return (
            <div className="shopping-cart-wrapper">
                <Checkout
                    checkoutCart={this.state.checkoutCart}
                    removeItemFromCart={(itemId) => this.removeItemFromCart(itemId)}
                />
                <Heading heading="Shopping Cart" /><br />
                <Products
                    checkoutCart={(itemData) => this.checkoutCart(itemData)}
                />
            </div>
        );
    }
}

export default ShoppingCart;
