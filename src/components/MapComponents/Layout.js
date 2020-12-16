
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
            areaName: "lounge",
            btnArr: []
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    componentDidMount(){
    }
    handleToggleClick() {
        this.setState({
            showPano: true,
          });
      }
    render() {
        
        this.items = this.props.layout_img.map((item) =>
            <div className='container'>
            {item.btnNames.map((btnName)=><ButtonOverlay onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>)}
            <img src={item.image}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
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
