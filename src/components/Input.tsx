import React, {forwardRef, useState} from 'react';
import styled from "styled-components";

const InputStyled = styled.input`
  width: 250px;
  margin-top: 12px;
  
  &.isError {
    border: 1px solid crimson;
  }
`

export interface IInput {
    innerClassName?: string
    placeholder?: string
    name: string
    type: string
}

export const Input = ({innerClassName, placeholder, name, type}: IInput) => {
    const [innerValue, setInnerValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value)
    }

    return (
        <InputStyled
            type={type}
            name={name}
            placeholder={placeholder}
            value={innerValue}
            onChange={handleChange}
            className={innerClassName}/>
    );
};

