import React from 'react';
import styled from "styled-components";
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;


  .fade {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(100, 100, 100, 0.5);
  }

  .modal {
    background-color: #fff;
    width: 50%;
    min-height: 100px;
    min-width: 300px;
    border-radius: 4px;
    border: 1px solid #818181;
    z-index: 1;
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
  }

  & header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > *{
      margin: 8px;
    }
    
    button {
      width: 32px;
      height: 32px;
      
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  & title {
    display: block;
  }
`

interface IModal {
    closeModalHandler: () => void
    children?: any
    title: string
}


//change type
export const Modal = ({closeModalHandler, children, title}: IModal) => {
    return (
        <ModalStyled {...{closeModalHandler, children, title}}>
            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                onClick={closeModalHandler}
                 onKeyDown={() => null}
                 className='fade'>
            </div>
            <div className='modal'>
                <header>
                    <title>{title}</title>
                    <button onClick={closeModalHandler}>
                        <CloseIcon/>
                    </button>
                </header>
                {children}
            </div>
        </ModalStyled>
    );
};

