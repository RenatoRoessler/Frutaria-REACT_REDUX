import React from 'react'
import Fruta from './fruta'
import AdicionarFruta from './adicionaFruta'
import { useSelector } from 'react-redux'


const ListaFruta = () => {

    const frutas = useSelector(state => state.frutaReducer.frutas)
    console.log(frutas)

    return (
        <>
            <h1> Lista fruta</h1>
            <AdicionarFruta />

            {frutas.map((fruta) => (<Fruta key={fruta.id} fruta={fruta}></Fruta> ))}

        </>
    )

}


export default ListaFruta