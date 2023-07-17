import React from 'react';
import {ProductModel} from "../../../models/product.model";
import styled from "styled-components";
import {Description} from "../../Description";

const ProductCardStyled = styled.div`
  margin-left: 5%;
  margin-top: 8px;
  width: 90%;
  border-radius: 4px;
  border: 2px solid gray;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  & img {
    width: 70%;
  }
  & title {
    display: block;
    text-align: center;
  }
  & span {
    margin-top: 12px;
    font-size: 24px;
    font-weight: bold;
  }
  & p {
    word-break: break-word;
    border-radius: 4px;
    margin: 2%;
    padding: 1%;
    background-color: bisque;
  }
`

export const ProductCard = ({image, title, price, description}: Partial<ProductModel>) => {
    return (
        <ProductCardStyled>
            {image && <img src={image} alt=""/>}
            <title>{title}</title>
            {price && <span>{price}$</span>}
            {description && <Description text={description}/>}
        </ProductCardStyled>
    );
};

