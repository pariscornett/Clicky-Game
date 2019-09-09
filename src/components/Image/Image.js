import React from "react";
import "./style.css";

function Image(props) {

    return (
        <div className="clickyImage">
            <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
        </div>
    );
}

export default Image;