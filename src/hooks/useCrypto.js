import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled'

const useCrypto = (label, valorInicial, opciones) => {
    
    //STATE
    const [state, actualizarState] = useState(valorInicial)

    //styled component
    const Label = styled.label`
        font-family: 'Bebas Neue', cursive;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.4rem;
        margin-top: 2rem;
        display: block;
    `;
    const Select = styled.select`
        width: 100%;
        display: block;
        padding: 1rem;
        -webkit-appearance: none;
        border-radius: 10px;
        border: none;
        font-size: 1.2rem;
    `;

    //INTERFAZ
    const MuestraCrypto = ()=>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value=''>-Selecciona una moneda-</option>
                {opciones.map( value => (
                    <option key={value.CoinInfo.Id} value={value.CoinInfo.Name}>{value.CoinInfo.FullName}</option>
                ))}

            </Select>
        </Fragment>
    );

    //RETORNA
    return [state, MuestraCrypto, actualizarState]
}
 
export default useCrypto;