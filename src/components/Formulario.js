import React from 'react';
import styled from '@emotion/styled'

import useMonedas from '../hooks/useMonedas'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    const monedas = [
        {codigo:'USD', nombre:'dolar de estados unidos'},
        {codigo:'MXN', nombre:'peso mexicano'},
        {codigo:'BRL', nombre:'real brasileño'},
        {codigo:'ARS', nombre:'peso argentino'}
    ]

    const [moneda, SelectMoneda] = useMonedas('Selecciona una moneda', '', monedas)

    return (
        <form>
            <SelectMoneda />
            <Button type='submit' value='Calcular'></Button>
        </form>
    );
}
 
export default Formulario;