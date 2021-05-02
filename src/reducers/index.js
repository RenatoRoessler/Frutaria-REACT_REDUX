import  { reducers as frutaReducer } from '../reducers/fruta.reducer'
import { combineReducers} from 'redux'

const reducer =  combineReducers({
    frutaReducer
})

export { reducer }