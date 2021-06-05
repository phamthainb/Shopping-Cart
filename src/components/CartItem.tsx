import {useEffect, useState} from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { decreaseInCart, increaseInCart, removeFromCart } from '../store/action/action';
import { CartType } from '../store/reducer/ReducerCart';
import { ProductType } from '../store/reducer/ReducerProduct';
import { myReducers } from '../store/store';

interface Props{
    id:number,
    quantity:number,
    itemToShow: ProductType
}

export const CartItemContainer = styled.li`
    display: flex;
    box-sizing: border-box;
    align-items:center;
    margin-bottom: 40px;
    color: orange;
    /* border: 1px solid orange; */
`
export const CartItemImgContainerBig = styled.div`
    width: 10%;
`
export const CartItemImgContainer = styled.div`
    position: relative;
    padding-bottom: 130%;
    overflow: hidden;
`

export const CartItemImg = styled.img`
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width:100%;
    object-fit:cover;
`

export const CartItemName = styled.div`
    display:flex;
    align-items:center;
    font-size: 23px;
    font-weight:bold;
    width: 40%;
    padding-left: 40px;
`
export const CartItemPrice = styled(CartItemName)`
    width: 13%;
    font-size: 20px;
    font-weight:600;
`

export const QuantityContainer = styled.div`
    /* width: 17%; */
    display:flex;
    font-size: 25px;
`

export const QuantityBtn = styled.span`
    width: 30px;
    height:28px;
    padding:0;
    border: 1px solid white;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-right: 30px;
    margin-left:30px;
    font-weight: bold;
    cursor:pointer;
    padding-bottom: 4px;
    &:hover{
        border: 1px solid orange;
    }
`

export const DeleteBtn = styled.i`
    font-size: 25px;
    cursor:pointer;
    padding-left: 30px;
    transition: all .2s;
    &:hover{
        color: #fd6e00;
    }
`
function CartItem({ id, quantity, itemToShow }: Props) {
    const dispatch = useDispatch();

    const [idState, setIdState] = useState<number>(id);
    const [quantityState, setQuantityState] = useState<number>(quantity);
    const [itemState, setItemState] = useState<ProductType>(itemToShow);

    useEffect(() => {
        // setQuantityLocal(quantity);
        console.log('jj');
    });


    return (
        <CartItemContainer>
            <CartItemImgContainerBig>
                <CartItemImgContainer
                    onClick={()=> console.log(quantity)}
                >
                    <CartItemImg src={itemToShow.img} />
                </CartItemImgContainer>
            </CartItemImgContainerBig>

            <CartItemName>{itemToShow.name}</CartItemName>

            <CartItemPrice>{itemToShow.price} </CartItemPrice>

            <QuantityContainer>
                <QuantityBtn
                    onClick={()=>{
                        dispatch(decreaseInCart(id));
                    }}
                >-</QuantityBtn>
                {quantity}
                <QuantityBtn
                    onClick={()=>{
                        dispatch(increaseInCart(id));
                    }}
                >+</QuantityBtn>
            </QuantityContainer>

            <DeleteBtn
                className="fas fa-trash-alt"
                onClick={()=> dispatch(removeFromCart(id))}
            ></DeleteBtn>

        </CartItemContainer>
    );
}

export default CartItem;