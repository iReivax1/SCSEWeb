import React, { Component } from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import { ButtonOverlay } from '../Button';
import Pano from './Pano'
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: this.props.levelData,
            level: this.props.level,
            showPano: false,
            pano_img: 'null'
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    componentDidMount(){
    }
    handleToggleClick(event) {
        if (event.target.id === "Lounge"){
            this.setState({
                showPano: true,
                pano_img: '/images/lounge.jpg'
              });
        }
        else if (event.target.id === "SWL1"){
            this.setState({
                showPano: true,
                pano_img: '/images/sw1_1.jpg'
              });
        }
        else if (event.target.id === "HWl1"){
            this.setState({
                showPano: true,
                pano_img: '/images/hw2_2.jpg'
              });
        }
      }
    render() {
        
        this.items = this.props.levelData.map((item) =>
            <div className='container'>
            {item.btnNames.map((btnName)=><ButtonOverlay id={btnName} onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>)}
            <img src={item.image}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
        let loadPano = <div className='layout-container'><Pano pano_img={this.state.pano_img}></Pano> </div>
        
        
        return (
            <div>
            {
                (this.state.showPano) ? loadPano : loadLayout
            }
            </div>
        )
    }
}
