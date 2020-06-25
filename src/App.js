import React, {useState, useEffect} from 'react';
import './App.css';
import styled from '@emotion/styled'
import axios from 'axios'

import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Cotizar from './components/Cotizar'
import Spinner from './components/Spinner'

/* Styled Components */
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: left;
  font-weight: 800;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;


function App() {

  const [moneda, guardaMoneda] = useState('')
  const [criptomoneda, guardaCriptomoneda] = useState('')
  const [resultado, guardaResultado] = useState({})
  const [cargando, guardarCargando] = useState(false)

  useEffect( () => {

    const consulta = async () => {
      if(moneda==='') return

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${moneda}&tsyms=${criptomoneda}`
      const result = await axios.get(url)

      guardarCargando(true)

      setTimeout( ()=>{
        guardarCargando(false)
        guardaResultado(result.data.DISPLAY[moneda][criptomoneda])
      }, 3000 )
      
    }
    
    consulta()

  }, [moneda, criptomoneda] )

  return (
    <Contenedor>
      <div>
          <Imagen src={imagen} alt='cryptomonedas-logo' />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario
          guardaMoneda={guardaMoneda}
          guardaCriptomoneda={guardaCriptomoneda}
        />

        {(cargando)
        ?<Spinner />
        :<Cotizar resultado={resultado} />
        }
      </div>
    </Contenedor>
  );
}

export default App;
