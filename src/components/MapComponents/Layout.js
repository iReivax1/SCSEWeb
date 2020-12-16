import React, { Component } from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout_img: this.props.layout_img,
            level: this.props.level
        };
    }
    render() {
        this.images = this.state.layout_img.map((image) =>
            <div className='container'>
            <button className="btn"> button</button>
            <img src={image}/>
            </div>
        );

        return (
            <div>
                <ImageScroller>
                
                {this.images}
                
                </ImageScroller>
            </div>
        )
    }
}
