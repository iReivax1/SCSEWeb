import React, {Component} from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import {ButtonOverlay} from '../Button';
import HWLab1Pano from './HWLab1Pano'
import SWLab1Pano from './SWLab1Pano';
import LoungePano from './LoungePano';
import SWLab2Pano from './SWLab2Pano';
import HWLab2Pano from './HWLab2Pano';
import HPLPano from './HPLPano';

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
        switch (event.target.id) {
            case "Lounge":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["Lounge"]
                break;
            case "SWLab1":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["SWLab1"]
                break;
            case "HWLab1":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["HWLab1"]
                break;
            case "HWLab2":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["HWLab2"]
                break;
            case "HPL":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["HPL"]
                break;
            case "SWLab2":
                this.setState({
                    showPano: true,
                });
                this.childPano = childPanoMap["SWLab2"]
                break;
            default:
                break;
        }
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
