import React from 'react';
import styled from '@emotion/styled';

const Parrafo = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({msg}) => {
    return (
        <Parrafo>{msg}</Parrafo>
    );
}
 
export default Error;