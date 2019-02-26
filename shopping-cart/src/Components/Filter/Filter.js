import React from 'react';
import './Filter.css';

const Filter = (props) => {
    return (
        <div className="filter-wrapper col-md-3">
            <div>Sizes :</div><br />
            <div className="col-md-8 row pl-3">
                <div className="checkbox">
                    <label><input type="checkbox" value="XS" onChange={(event) => props.filterProducts(event)} />XS</label>
                </div>
                <div className="checkbox">
                    <label className="ml-4"><input type="checkbox" value="S" onChange={(event) => props.filterProducts(event)} />S</label>
                </div>
                <div className="checkbox">
                    <label className="ml-4"><input type="checkbox" value="M" onChange={(event) => props.filterProducts(event)} />M</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" className="ml-2" value="L" onChange={(event) => props.filterProducts(event)} />L</label>
                </div>
                <div className="checkbox">
                    <label className="ml-4"><input type="checkbox" value="XL" onChange={(event) => props.filterProducts(event)} />XL</label>
                </div>
                <div className="checkbox">
                    <label className="ml-4"><input type="checkbox" value="XXL" onChange={(event) => props.filterProducts(event)} />XXL</label>
                </div>
                {/* <label>
                    <input type="checkbox" value="S" />
                    <span className="size">S</span>
                </label>
                <label>
                    <input type="checkbox" value="M" />
                    <span className="size">M</span>
                </label>
                <label>
                    <input type="checkbox" value="L" />
                    <span className="size">L</span>
                </label>
                <label>
                    <input type="checkbox" value="XL" />
                    <span className="size">XL</span>
                </label>
                <label>
                    <input type="checkbox" value="XXL" />
                    <span className="size">XXL</span>
                </label> */}
            </div>
        </div>
    );
};

export default Filter;