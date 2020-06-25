import React from 'react';
import styled from '@emotion/styled'

//styled component
const Contenedor = styled.div`
    color: white;
`;
const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`;
const Precio = styled.p`
    font-size: 30px;
`;

const Cotizar = ({resultado}) => {

    if( Object.keys(resultado).length === 0 ) return null

    return (
        <Contenedor>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas alto del dia: <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del dia: <span>{resultado.LOWDAY}</span></Info>
            <Info>Variacion ultimas 24 hs: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </Contenedor>
    );
}
 
export default Cotizar;