import React, {Component} from 'react'
import ImageScroller from 'react-image-scroller';
import './Layout.css'
import {ButtonOverlay} from '../Button';
import LoungePano from './l1/LoungePano';

export default class L2Layout extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            levelData: this.props.levelData,
            level: this.props.level,
            showPano: false,
        };*/
        this.state = {
            levelData: [{
                btnNames: ["Lounge"],
                image: "/images/l2/map/a.jpg",
            },
                {
                    btnNames: [],
                    image: "/images/l2/map/b.jpg",
                },
                {
                    btnNames: [],
                    image: "/images/l2/map/c.jpg",
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            level: 2,
            showPano: false
        };
        //this.props = this.state;
        this.handleToggleClick = this.handleToggleClick.bind(this);

        this.childPano = <LoungePano/>
    }

    componentDidMount() {
        this.setState({
            levelData: [{
                btnNames: ["Lounge"],
                image: "/images/l2/map/a.jpg",
            },
                {
                    btnNames: [],
                    image: "/images/l2/map/b.jpg",
                },
                {
                    btnNames: [],
                    image: "/images/l2/map/c.jpg",
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            level: 2,
            showPano: false
        })
    }

    componentWillUnmount() {

    }

    stopPano() {
        this.setState({showPano: false});
    }

    handleToggleClick(event) {
        const childPanoMap = {
            "Lounge": <LoungePano/>
        }
        this.setState({
            showPano: true,
        });
        this.childPano = childPanoMap[event.target.id]
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className='container' key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {<ButtonOverlay className='first' id={btnName} onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={''}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>
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
