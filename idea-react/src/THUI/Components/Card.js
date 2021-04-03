import React, { Component } from 'react';
import '../Styles/Card.css';

const Card = (props) => {


    return (
        <div className="Card" style={{background: "#e66465"}}>
            { props.children }
        </div>
    )
}

export default Card;