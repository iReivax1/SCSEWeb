
import React, { Component } from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import { ButtonOverlay } from '../Button';
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
            <ButtonOverlay onClick={() => console.log("test click")}> try me</ButtonOverlay>
            <img src={image}/>
            </div>
        );

        return (
                <ImageScroller>
                
                {this.images}
                
                </ImageScroller>
        )
    }
}
