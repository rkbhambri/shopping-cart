import React, { Component } from 'react';
import DisplayProducts from '../../Components/DisplayProducts/DisplayProducts';
import Filter from '../../Components/Filter/Filter';
import ProductsData from '../../products.json';

class Products extends Component {

	state = {
		products: [],
		filteredProducts: null,
		filterList: []
	};

	componentDidMount() {
		this.setState({
			...this.state,
			products: ProductsData.products
		});
	};

	filterProducts = (event) => {
		let filteredProducts;
		let filterList = [...this.state.filterList];

		if (event.target.checked) {
			filteredProducts = this.state.products.filter(item => {
				return item.availableSizes.includes(event.target.value);
			});
			this.setState({
				...this.state,
				filteredProducts,
				filterList: this.state.filterList.concat(event.target.value)
			});
		} else {
			const filterIndex = this.state.filterList.findIndex(item => item === event.target.value);
			filterList.splice(filterIndex, 1);
			if (filterList.length > 0) {
				filterList.map(data => {
					filteredProducts = this.state.products.filter(item => {
						return item.availableSizes.includes(data);
					});
					return -1;
				});
				this.setState({
					...this.state,
					filteredProducts,
					filterList
				});
			}
			if (filterList.length === 0) {
				this.setState({
					...this.state,
					filteredProducts: null,
					filterList
				});
			}
		}
	};

	addToCart = (productId) => {
		this.state.products.map(item => {
			if (item.id === productId) {
				this.props.checkoutCart(item);
			}
			return 1;
		});
	}

	render() {
		return (
			<div className="products-wrapper col-md-11 offset-1 row">
				<Filter filterProducts={(event) => this.filterProducts(event)} />
				<DisplayProducts
					products={this.state.filteredProducts === null ? this.state.products : this.state.filteredProducts}
					addToCart={(productId) => this.addToCart(productId)}
				/>
			</div>
		);
	};
};

export default Products;