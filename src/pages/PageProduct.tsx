import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import ProductItem from '../components/ProductItem';
import { ProductType } from '../store/reducer/ReducerProduct';
import { myReducers } from '../store/store';

const PageProductContainer = styled.div`

`
const CartBtn = styled.div`
    position: fixed;
    top: 40px;
    right: 50px;
    transition: all .5s;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #f58822;
    background-color: #fff;
    &:hover{
        transform: scale(1.15);
        /* box-shadow: 1px 0px 2px 1px rgba(0,0,0, .1); */
        background-color: #f19e50 ;
        i{
            color: white
        }
    }
`

const CartIcon = styled.i`
    color: #f58822;
    transition: all .2s;
`

const ProductHeader = styled.h1`
    float: left;
    transform: translateX(-50%);
    margin: 100px auto 60px 50%;
    color: #f58822;
    text-align: center;
    border: 2px solid #f58822;
    padding: 7px 30px 10px;

`
const ProductList = styled.ul`
    width: 1000px;    
    display: flex;
    clear: both;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin:0 auto;
    box-sizing: border-box;
`

function PageProduct() {
    const listProducts: ProductType[] = useSelector((state: ReturnType<typeof myReducers>) => state.ReducerProduct);
    const history = useHistory();

    return (
        <PageProductContainer>
            <CartBtn
                onClick={()=> history.push('/cart')}
            >
                <CartIcon className="fab fa-opencart"></CartIcon>
            </CartBtn>
            
            <ProductHeader
                onClick = {()=> console.log(listProducts)}
            >
                Danh sách sản phẩm
            </ProductHeader>

            <ProductList>
                {
                    listProducts.map((item, index)=>{
                        return <ProductItem key={index} img={item.img}  id={item.id} name={item.name} price ={item.price} />
                    })
                }
            </ProductList>
        </PageProductContainer>
    );
}

export default PageProduct;