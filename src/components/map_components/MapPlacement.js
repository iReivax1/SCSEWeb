import React, {Component} from 'react'
import '../../App.css'
import {ButtonContainer} from '../Button';
import './MapPlacement.css';
import L1Layout from "./L1Layout";
import L2Layout from "./L2Layout";
import B1Layout from './B1Layout';
import B2Layout from './B2Layout';


export default class MapPlacement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: <L1Layout/>
        };
        //this.changePanoLayout = React.createRef();
        this.handleClick_l1 = this.handleClick_l1.bind(this);
        this.handleClick_l2 = this.handleClick_l2.bind(this);
    }

    handleClick_l1 = () => {
        this.setState({
            layout: <L1Layout/>
        })
    }
    handleClick_l2 = () => {
        this.setState({
            layout: <L2Layout/>
        })

    }
    handleClick_b1 = () => {
        this.setState({
            layout: <B1Layout/>
        })
    }
    handleClick_b2 = () => {
        this.setState({
            layout: <B2Layout/>
        })
    }
    handleClick_b3 = () => {
        this.setState({
                layoutImage: ['/images/img-home.jpg'],
                level: 'b3'
            }
        )
    }
    handleClick_b4 = () => {
        this.setState({
                layoutImage: ['/images/img-home.jpg'],
                level: 'b4'
            }
        )
    }


    render() {
        return (
            <React.Fragment>
                <div className='layout-container'>
                    {console.log(this.state)}
                    {this.state.layout}
                </div>
                <ButtonContainer onClick={() => this.handleClick_l2()}>
                    Level 2
                </ButtonContainer>
                <ButtonContainer onClick={() => this.handleClick_l1()}>
                    Level 1
                </ButtonContainer>
                <ButtonContainer onClick={() => this.handleClick_b1()}>
                    Level B1
                </ButtonContainer>
                <ButtonContainer onClick={() => this.handleClick_b2()}>
                    Level B2
                </ButtonContainer>
                <ButtonContainer onClick={() => this.handleClick_b3()}>
                    Level B3
                </ButtonContainer>
                <ButtonContainer onClick={() => this.handleClick_b4()}>
                    Level B4
                </ButtonContainer>
            </React.Fragment>
        )
    }
}
