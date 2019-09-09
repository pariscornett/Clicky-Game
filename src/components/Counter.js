import React, { Component } from 'react'
import Image from "./Image/Image";
import images from "../images.json"

export default class Counter extends Component {
    //set click score to 0
    state = {
        count: 0
    };

    //increases 
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div className="col-md-12">
                <div className="counter">
                    Click Counter : {this.state.count}
                </div>
                {
                images.map(image => 
                <Image 
                    image={image.image}
                    handleIncrement={this.handleIncrement}
                />
                )}
            </div>
        )
    }
}
