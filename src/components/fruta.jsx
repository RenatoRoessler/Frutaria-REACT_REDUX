import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../actions/fruta.action'

const Fruta = ({fruta}) => {
    const dispatch = useDispatch()


    return (
        <div className='Fruta'>
            <ul>
                <li>
                    <strong>Fruta: </strong>{fruta.nome}
                </li>
            </ul>
            <ul>
                <li>
                    <strong>Quantidade</strong>{fruta.quantidade}
                </li>
            </ul>
            <button onClick={() => dispatch(actions.remover(fruta))}>Remover</button>
        </div>
    )
}

export default Fruta