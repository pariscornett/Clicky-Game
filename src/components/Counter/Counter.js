import React, { Component } from 'react'
import Image from "../Image/Image";
import images from "../../images.json"
import "./style.css";


export default class Counter extends Component {
    //set click score to 0
    state = {
        count: 0,
        clickedImages: [],
        highScore: 0,
    };
    
    //adds clicked images to an array and recognizes duplicate clicks
    handleClick = (e) => {
        e.preventDefault();
        let imageId = e.target.id
        console.log(imageId);
        if(this.state.clickedImages.includes(imageId)) {
            alert("You've already clicked this one!");
            this.setState({
                count: 0,
                clickedImages: []
            })
            if(this.state.highScore < this.state.count) {
                this.setState({
                    highScore: this.state.count
                })
            }
        }
        else {
            this.setState({
                count: this.state.count + 1
            });

        };
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
                        <div className="highScore">
                        High Score: {this.state.highScore}
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
