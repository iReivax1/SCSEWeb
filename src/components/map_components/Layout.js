import React, {Component} from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import {ButtonOverlay} from '../Button';
import HWLab1Pano from './l1/HWLab1Pano'
import SWLab1Pano from './l1/SWLab1Pano';
import LoungePano from './l1/LoungePano';
import SWLab2Pano from './l1/SWLab2Pano';
import HWLab2Pano from './l1/HWLab2Pano';
import HPLPano from './l1/HPLPano';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: this.props.levelData,
            level: this.props.level,
            showPano: false,
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);

        this.childPano = <LoungePano/>
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    stopPano() {
        this.setState({showPano: false});
    }

    handleToggleClick(event) {
        const childPanoMap = {
            "HWLab1": <HWLab1Pano/>,
            "SWLab1": <SWLab1Pano/>,
            "Lounge": <LoungePano/>,
            "SWLab2": <SWLab2Pano/>,
            "HWLab2": <HWLab2Pano/>,
            "HPL": <HPLPano/>
        }
        this.setState({
            showPano: true,
        });
        this.childPano = childPanoMap[event.target.id]
    }

    render() {
        this.items = this.props.levelData.map((item, i) =>
            <div className='container' key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {(btnName === "Lounge" || btnName === "HPL") ?
                            <ButtonOverlay className='first' id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                            : (btnName === "HWLab1") ?
                                <ButtonOverlay className='third' id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                                : <ButtonOverlay className='second' id={btnName}
                                                 onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={''}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
        // let loadPano = <div className='layout-container'><Pano pano_img={this.state.pano_img} /></div>
        let loadPano = <div className='layout-container'>{this.childPano}</div>

        return (
            <div>
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        )
    }
}
