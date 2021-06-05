import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const PageNotFoundContainer = styled.div`

`
const DirectHome = styled.p`
    color:blue;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

const PageNotFound = () => {

    const history = useHistory();

    return (
        <PageNotFoundContainer>
            Page not found <br/>
            <DirectHome onClick={()=> history.push('/')}>
                Trang chủ
            </DirectHome>
        </PageNotFoundContainer>
    );
};

export default PageNotFound;