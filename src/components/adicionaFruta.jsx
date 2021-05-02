import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/fruta.action'

const AdicionarFruta = props => {

    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)

    const dispatch = useDispatch()

    const addFruta = event => {
        event.preventDefault();
        const fruta = {
            id: parseInt(Math.random() * (10000 - 5) + 5),
            nome,
            quantidade
        }
        dispatch(actions.adicionar(fruta))

    }

    return (
        <form onSubmit={addFruta}>
            <input
                type="text"
                name={nome}
                placeholder="Nome da fruta"
                required
                onChange={event => setNome(event.target.value)}
            />
            <input
                type="number"
                name={quantidade}
                placeholder="Quantidade"
                required
                onChange={event => setQuantidade(event.target.value)}
            />

        </form>
    )

}

export default AdicionarFruta