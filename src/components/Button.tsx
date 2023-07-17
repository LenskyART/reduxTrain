import React from 'react';
import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #4f1fb2;
  margin: 12px;
  width: 100px;
  height: 24px;
  opacity: .8;

  &:hover {
    opacity: 1;
  }
`
interface IButton {
    buttonClassName?: string
    children?: any
}

export const Button = ({buttonClassName, children}: IButton) => {
    return (
        <ButtonStyled type="submit" {...{buttonClassName, children}}/>
    );
};

