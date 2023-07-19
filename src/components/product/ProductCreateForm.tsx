import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Input} from "../Input";
import {Button} from "../Button";
import {useAppDispatch} from "../../hooks/useDispatch";
import {productReducer} from "../../store/product/product.slice";

const FormStyled = styled.form`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

interface IProductCreateForm {
    closeModalHandler: () => void
}

type CustomElements = HTMLFormControlsCollection & {
    title: HTMLInputElement;
    description: HTMLInputElement;
};

interface CustomForm extends HTMLFormElement {
    readonly elements: CustomElements;
}

export const ProductCreateForm = ({closeModalHandler}: IProductCreateForm) => {
    const [isError, setIsError] = useState('')
    const idCounter = useRef(0)
    const dispatch = useAppDispatch()
    const {setProductToStart} = productReducer.actions

    const submitHandler = (event: React.FormEvent<CustomForm>) => {
        const title = event.currentTarget.elements.title.value

        if (!title) {
            setIsError('isError')
            event.preventDefault()
            return
        }
        const description = event.currentTarget.elements.description.value

        const newProduct = {
            id: 1234567890 + idCounter.current,
            title: title,
            description: description
        }
        idCounter.current++
        dispatch(setProductToStart(newProduct))
        closeModalHandler()
        event.preventDefault()
    }

    return (
        <FormStyled onSubmit={submitHandler}>
            <Input innerClassName={isError} type='text' name='title' placeholder='Title'/>
            <Input type='text' name='description' placeholder='Description'/>
            <Button>Создать</Button>
        </FormStyled>
    );

};
