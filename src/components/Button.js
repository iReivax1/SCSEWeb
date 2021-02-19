import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import "./Button.css";

//const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
                           children,
                           type,
                           onClick,
                           //buttonStyle,
                           buttonSize
                       }) => {
    //const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to="/maps" className="btn-mobile">
            <button className={`btn ${checkButtonSize} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};


export const ButtonContainer = styled.button`
  text-transform : capitalize;
  font-size      : 1.4rem;
  background     : transparent;
  color          : black;
  border         : 0.1rem solid #3FC6CC;
  border-radius  : 0.5rem;
  padding        : 0.2rem 0.5rem;
  cursor         : pointer;
  margin         : 0.2rem 0.5rem;
  transition     : all 0.5s ease-in-out;

  &:hover {
    background : rgba(39, 121, 125, 0.7);
    color      : var(--mainWhite);
  }

  &:focus {
    outline : none;
  }
`;
export const ButtonContainerHighlight = styled.button`
  text-transform : capitalize;
  font-size      : 1.4rem;
  background     : black;
  color          : white;
  border         : 0.1rem solid #3FC6CC;
  border-radius  : 0.5rem;
  padding        : 0.2rem 0.5rem;
  cursor         : pointer;
  margin         : 0.2rem 0.5rem;
  transition     : all 0.5s ease-in-out;

  &:hover {
    background : rgba(39, 121, 125, 0.7);
    color      : var(--mainWhite);
  }

  &:focus {
    outline : none;
  }
`;
export const ButtonOverlay = styled.button`

  transform        : translate(-50%, 30%);
  -ms-transform    : translate(-50%, -50%);
  background-color : rgba(63, 192, 204, 0.7);
  color            : white;
  font-size        : 12px;
  padding          : 8px 8px;
  cursor           : pointer;
  border           : 0.1rem solid #3FC6CC;
  border-radius    : 0.5rem;

  &:hover {
    background : rgba(39, 121, 125, 0.7);
    color      : var(--mainWhite);
  }

  &:focus {
    outline : none;
`;

export const ButtonOverlaySCSE = styled.button`

  transform        : translate(-50%, 30%);
  -ms-transform    : translate(-50%, -50%);
  background-color : rgba(63, 192, 204, 0.7);
  color            : white;
  font-size        : 1.5rem;
  padding          : 8px 8px;
  cursor           : pointer;
  border           : 0.1rem solid #3FC6CC;
  border-radius    : 0.5rem;

  &:hover {
    background : rgba(39, 121, 125, 0.7);
    color      : var(--mainWhite);
  }

  &:focus {
    outline : none;
`;