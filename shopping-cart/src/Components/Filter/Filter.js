import React from 'react';
import './Filter.css';

const Filter = (props) => {
    return (
        <div className="filter-wrapper col-md-3">
            <div className="filter-size">
                <div>Sizes :</div><br />
                <div className="col-md-8 row pl-3">
                    <div className="checkbox">
                        <label><input type="checkbox" value="XS" onChange={(event) => props.filterProducts(event)} /> XS</label>
                    </div>
                    <div className="checkbox">
                        <label className="ml-4"><input type="checkbox" value="S" onChange={(event) => props.filterProducts(event)} /> S</label>
                    </div>
                    <div className="checkbox">
                        <label className="ml-4"><input type="checkbox" value="M" onChange={(event) => props.filterProducts(event)} /> M</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" value="L" onChange={(event) => props.filterProducts(event)} /> L</label>
                    </div>
                    <div className="checkbox">
                        <label className="ml-4"><input type="checkbox" value="XL" onChange={(event) => props.filterProducts(event)} /> XL</label>
                    </div>
                    <div className="checkbox">
                        <label className="ml-4"><input type="checkbox" value="XXL" onChange={(event) => props.filterProducts(event)} /> XXL</label>
                    </div>
                </div>
            </div>
            <div className="filter-price col-md-8 mt-3">
                <label htmlFor="sortPrice">Sort by price</label>
                <select className="form-control" id="sortPrice" defaultValue="" onChange={(event) => props.sortByPrice(event)}>
                    <option value="" disabled>select</option>
                    <option value="l2h">Lowest to Highest</option>
                    <option value="h2l" >Highest to Lowest</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;