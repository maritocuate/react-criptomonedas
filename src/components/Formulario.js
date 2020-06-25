import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import axios from 'axios'

import useMonedas from '../hooks/useMonedas'
import useCrypto from '../hooks/useCrypto'
import Error from './Error'

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

const Formulario = ({ guardaMoneda, guardaCriptomoneda}) => {

    const [cryptos, actualizarCryptos] = useState([])

    const monedas = [
        {codigo:'USD', nombre:'dolar de estados unidos'},
        {codigo:'MXN', nombre:'peso mexicano'},
        {codigo:'BRL', nombre:'real brasileño'},
        {codigo:'ARS', nombre:'peso argentino'}
    ]

    //Hooks
    const [moneda, SelectMoneda] = useMonedas('Selecciona una moneda', '', monedas)
    const [cryptomoneda, SelectCrypto] = useCrypto('Selecciona una cryptomoneda', '', cryptos)
    const [error, saveError] = useState(false)

    //Init
    useEffect( () => {
        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const result = await axios.get(url)
            actualizarCryptos(result.data.Data)
        }
        consultarApi()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if(moneda === '' || cryptomoneda === ''){
            saveError(true)
        }else{
            saveError(false)

            guardaMoneda(moneda)
            guardaCriptomoneda(cryptomoneda)
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            { error ? <Error msg='Todos los campos son obligatorios' /> : null }

            <SelectMoneda />
            <SelectCrypto />
            <Button type='submit' value='Calcular'></Button>
        </form>
    );
}
 
export default Formulario;