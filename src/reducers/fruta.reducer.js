import { actionsTypes } from '../constants/frutas'

const INITIAL_STATE = {
    frutas: [
        { id: 1, nome: 'Abacaxi', quantidade: 10 },
        { id: 2, nome: 'Maça', quantidade: 4 },
        { id: 3, nome: 'ADA', quantidade: 6 },
    ]
}


const reducers = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
        case actionsTypes.ADICIONAR_FRUTA:
            return { frutas: [...state.frutas, { ...action.payload }] };
        case 'REMOVER_FRUTA':
            return { frutas: state.frutas.filter(x => x.id !== action.payload.id) };
        default:
            return state;
    }
};

export { reducers };
