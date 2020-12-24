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
        switch (event.target.id) {
            case "Lounge":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/lounge.jpg'
                });
                break;
            case "SWLab1":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/swlab1/swlab1_1.jpg'
                });
                break;
            case "HWLab1":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/hwlab1/hwlab1_2.jpg'
                });
                break;
            case "HWLab2":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/hwlab2/hwlab2_2.jpg'
                });
                break;
            case "HPL":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/hpl/hpl_2.jpg'
                });
                break;
            case "SWLab2":
                this.setState({
                    showPano: true,
                    pano_img: '/images/l1/swlab2/swlab2_2.jpg'
                });
                break;
        }
    }

    render() {


        this.items = this.props.levelData.map((item) =>
            <div className='container'>
                {item.btnNames.map(
                    (btnName) => <span>
                        
                        {(btnName === "Lounge" || btnName === "HPL") ?
                            <ButtonOverlay className='first' id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay> : (btnName === "HWLab1") ?
                                <ButtonOverlay className='third' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay> :
                                <ButtonOverlay className='second' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={''}/>
            </div>
        );
<<<<<<< HEAD
        let loadLayout = <ImageScroller className="scrollcontainer">{this.items}</ImageScroller>
        let loadPano = <div className='layout-container'><Pano pano_img={this.state.pano_img}></Pano> </div>
=======
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
        let loadPano = <div className='layout-container'><Pano pano_img={this.state.pano_img}/></div>
>>>>>>> 8dd70d5f4508626470e39c308aae4b482c73d08e


        return (
            <div>
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        )
    }
}
