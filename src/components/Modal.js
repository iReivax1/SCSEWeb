import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer, ProductContext } from '../Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        let value = this.context;
        const { closeModal } = value;
        let exitBtn;
        
        exitBtn =
        // chang to history.push
                <Link to='/maps'>
                <ButtonContainer onClick={() => closeModal()}>
                       Exit
                </ButtonContainer>
                </Link>
        return (
            <ProductConsumer>
                {(value) => {
                    // const { isModalOpen } = value;
                    let isModalOpen = true;
                    const { area, desc, img } = value.modalProduct;
                    if (!isModalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-6 text-center">
                                            <h3>{title} added to cart</h3>
                                            <img src={img} className="img-fluid" alt="Product" />
                                            <h5 className="text-muted">Desc :{desc} in {area}</h5>
                                            {exitBtn}
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
Modal.contextType = ProductContext;
const ModalContainer = styled.div`
 position:fixed;
 top:0;
 left:0;
 right:0;
 bottom:0;
 background: rgba(0,0,0,0.3);
 display : flex;
 align-items:center;
 justify-content: center;
 #modal{
     background: var(--mainWhite);
 }
`;
