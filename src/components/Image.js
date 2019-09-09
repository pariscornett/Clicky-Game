import React from "react";

function Image(props) {
    return (
        <div className="clicky-image">
            <img alt={props.name} src={props.image} />
        </div>
    );
}

export default Image;