
import React, { Component } from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import { ButtonOverlay } from '../Button';
import Pano from './Pano'
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout_img: this.props.layout_img,
            level: this.props.level,
            showPano: false,
            mediaPhoto: "/images/lounge.jpg",
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState({
            showPano: true,
          });
      }
    render() {
        this.images = this.props.layout_img.map((image) =>
            <div className='container'>
            <ButtonOverlay onClick={this.handleToggleClick}> try me</ButtonOverlay>
            <img src={image}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.images}</ImageScroller>
        let loadPano = <div className='layout-container'><Pano pano_img={this.state.mediaPhoto}></Pano> </div>
        
        return (
            <div>
            {
                (this.state.showPano) ? loadPano : loadLayout
            }
            </div>
        )
    }
}
