import React from "react";
import "./style.css";

function Image(props) {

    return (
        <div className="clickyImage">
            <img alt={props.name} src={props.image} onClick={props.handleClick} id={props.id}/>
        </div>
    );
}

export default Image;