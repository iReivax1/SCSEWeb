import React, {Component} from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import {ButtonOverlay} from '../Button';
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

    componentDidMount() {
    }

    handleToggleClick(event) {
        if (event.target.id === "Lounge") {
            this.setState({
                showPano: true,
                pano_img: '/images/l1/lounge.jpg'
            });
        } else if (event.target.id === "SWL1") {
            this.setState({
                showPano: true,
                pano_img: '/images/l1/swlab1/swlab1_1.jpg'
            });
        } else if (event.target.id === "HWL1") {
            this.setState({
                showPano: true,
                pano_img: '/images/l1/hwlab2/hwlab2_2.jpg'
            });
        }
    }

    render() {


        this.items = this.props.levelData.map((item) =>
            <div className='container'>
                {item.btnNames.map(
                    (btnName) => <span>
                        
                        {(btnName === "Lounge" || btnName === "HPL") ?
                            <ButtonOverlay className='first' id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay> : (btnName === "HWL1") ?
                                <ButtonOverlay className='third' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay> :
                                <ButtonOverlay className='second' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={''}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
        let loadPano = <div className='layout-container'><Pano pano_img={this.state.pano_img}/></div>


        return (
            <div>
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        )
    }
}
