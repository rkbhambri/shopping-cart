import React from 'react';

const Heading = (props) => {
    return (
        <h1 className="col-md-3" style={{ margin: '20px auto ' }}>{props.heading}</h1>
    );
};

export default Heading;