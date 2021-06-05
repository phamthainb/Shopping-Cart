import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import { addToCart } from '../store/action/action';
import { ProductType } from '../store/reducer/ReducerProduct';


const ProductItemContainer= styled.li`
    position: relative;
    width: 33.3%;
    padding: 20px 35px 25px;
    border: 1px solid #fff;
    margin-bottom: 40px;
    box-sizing: border-box;
    display:inline-block;
    &:hover{
        border: 1px solid #fce1ba;
        /* z-index: 1; */
        /* box-shadow: 1px 1px 3px 3px rgba(235, 154, 32, 0.3); */
    }

`

const ProductImgContainer = styled.div `
    /* border:1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-bottom: 130%;
`

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    object-fit:cover;
`

const ProductName = styled.p`
color: orange;
    text-align:center;
    font-weight: 600;
    font-size: 18px;
`

const ProductPrice= styled.div`
    float:left;
    color: orange;
    font-size: 20px;
`
const AddIcon= styled.i`
    float:right;
    color: orange;
    font-size: 25px;
    transition: all .2s;
    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }
`

function ProductItem({id, img, name, price}: ProductType) {
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <ProductItemContainer>
            <ProductImgContainer>
                <ProductImg src={img}/>
            </ProductImgContainer>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <AddIcon 
                className="fas fa-cart-plus"
                onClick={()=>{
                    dispatch(addToCart(id));
                    history.push('/cart');
                }}
            ></AddIcon>

        </ProductItemContainer>
    );
}

export default ProductItem;