import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Input} from "../Input";
import {Button} from "../Button";
import {useDispatch} from "react-redux";
import {setProductActions} from "../../store/product/product.slice";

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

export const ProductCreateForm = ({closeModalHandler}: IProductCreateForm) => {
    const [isError, setIsError] = useState('')
    const idCounter = useRef(0)
    const dispatch = useDispatch()

    const submitHandler = (event: React.FormEvent) => {
        if (!event.currentTarget.children[0].getAttribute('value')) {
            setIsError('isError')
            event.preventDefault()
            return
        }
        const title = event.currentTarget.children[0].getAttribute('value')
        const description = event.currentTarget.children[1].getAttribute('value')

        const newProduct = {
            id: 1234567890 + idCounter.current,
            title: title || undefined,
            description: description || undefined
        }
        idCounter.current++
        dispatch(setProductActions(newProduct))
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
