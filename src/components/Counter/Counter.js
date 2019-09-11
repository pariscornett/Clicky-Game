import React, { Component } from 'react'
import Image from "../Image/Image";
import images from "../../images.json"
import "./style.css";


export default class Counter extends Component {
    //set click score to 0
    state = {
        count: 0,
        clickedImages: []
    };
    
    //determine if image has been clicked yet and score game
    handleClick = (e) => {
        e.preventDefault();
        let imageId = e.target.id
        console.log(imageId);
        this.state.clickedImages.push(imageId);
        console.log(this.state.clickedImages);
    };


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="counter">
                            Click Counter : {this.state.count}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        {
                        images.map(image => 
                        <Image 
                        key={image.id}
                        image={image.image}
                        id={image.id}
                        handleClick={this.handleClick}
                        />
                        )};
                    </div>
                </div>
            </div>
        )
    }
}