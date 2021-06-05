import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import CartItem from '../components/CartItem';
import { CartType } from '../store/reducer/ReducerCart';
import { myReducers } from '../store/store';

const PageCartContainer = styled.div`

`

const StoreIconContainer = styled.div`
    margin-top: 30px;
    margin-left: 50px;
`

const StoreIcon = styled.i`
    margin-right: 15px;
    color: orange;
    font-size: 24px;
    cursor: pointer;
`

const EmptyImg = styled.img`
    display:block;
    width: 300px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
`

const ListCart = styled.ul`
    list-style-type: none;
    padding: 0;
    width: 900px;
    margin: 60px auto 40px;
`
function PageCart() {
    const listCarts: CartType[] = useSelector((state: ReturnType<typeof myReducers>) => state.ReducerCart);
    const history = useHistory();
    return (
        <PageCartContainer>
            {/* <div
                onClick={()=>{
                    console.log(`so luong gio hang: ${listCarts.length}`)
                }}                
            >click</div> */}
            <StoreIconContainer
                onClick={() => history.push('/')}
            >
                <StoreIcon className="fas fa-long-arrow-alt-left"></StoreIcon>
                <StoreIcon className="fas fa-store"></StoreIcon>
            </StoreIconContainer>

            <ListCart>
                {
                    listCarts.length===0 &&
                    <EmptyImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq_kpRSnI8fOnDs6_BAA3Zs0yWyCaj4BsTRQ&usqp=CAU' />
                }
                {
                    listCarts.length >0 &&
                    listCarts.map((item, index) => {
                        return <CartItem key={index} id={item.id} quantity={item.quantity}/>
                    })
                }
            </ListCart>
        </PageCartContainer>
    );
}

export default PageCart;