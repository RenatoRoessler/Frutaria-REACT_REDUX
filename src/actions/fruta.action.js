import { actionsTypes } from '../constants/frutas';

const actions = {
    adicionar: fruta => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta,
    }),
    remover: fruta => 
        ({
            type: 'REMOVER_FRUTA',
            payload: fruta,
        }),
};

export { actions };
