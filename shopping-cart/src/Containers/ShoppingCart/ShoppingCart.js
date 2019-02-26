import React, { Component } from 'react';
import Heading from '../../Components/Heading/Heading';
import Products from '../Products/Products';
import Checkout from '../../Components/Checkout/Checkout';

class ShoppingCart extends Component {

    state = {
        checkoutCart: []
    };

    checkoutCart = (itemData) => {
        const index = this.state.checkoutCart.length > 0 && this.state.checkoutCart.findIndex(item => item.id !== itemData.id)
        if (index > -1) {
            this.setState({
                ...this.state,
                checkoutCart: this.state.checkoutCart.concat(itemData)
            });
        } else {

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
        console.log('this.state.checkoutCart===', this.state.checkoutCart)
        return (
            <div className="shopping-cart-wrapper">
                <Checkout
                    checkoutCart={this.state.checkoutCart}
                    removeItemFromCart={(itemId) => this.removeItemFromCart(itemId)}
                />
                <Heading heading="Shopping Cart" />
                <Products
                    checkoutCart={(itemData) => this.checkoutCart(itemData)}
                />
            </div>
        );
    }
}

export default ShoppingCart;
