import React from 'react';
import styled from "styled-components";
import { ReactComponent as CloseIcon } from '../assets/icons/cross.svg';

const CreateButtonStyled = styled.button`
  position: fixed;
  border-radius: 50%;
  border: 1px solid black;
  background-color: #c227c7;
  width: 50px;
  height: 50px;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transform: rotate(45deg);
  }
`

interface ICreateButton {
    openModalHandler: () => void
}

export const CreateButton = ({openModalHandler}: ICreateButton) => {
    return (
            <CreateButtonStyled onClick={openModalHandler}>
                <CloseIcon/>
            </CreateButtonStyled>
    );
};