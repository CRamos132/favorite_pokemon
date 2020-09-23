import { createStore, combineReducers } from 'redux'
import ActionSavePokemon from '../../interfaces/ActionSavePokemon';
import StatePokemon from '../../interfaces/StatePokemon';
import { SaveActionTypes } from '../../enums/SaveActionTypes';
import ActionCurrentPokemon from '../../interfaces/ActionCurrentPokemon';
import ActionAvailablePokemon from '../../interfaces/ActionAvailablePokemon';

const INITIAL_STATE: StatePokemon  = {
    favoritePokemon: [],
    currentPokemon: '',
    availablePokemon: ['Não foi possível obter sugestões']
};

function favoriteReducer(state = INITIAL_STATE, action: ActionSavePokemon) {
    switch(action.type){
        case SaveActionTypes.ADD:
            return {...state, favoritePokemon: [...state.favoritePokemon, action.title]}
        default: 
            return state
    }
}

function currentReducer(state = INITIAL_STATE, action: ActionCurrentPokemon) {
    switch(action.type){
        case 'UPDATE_POKEMON':
            return {...state, currentPokemon: action.name}
        default: 
            return state
    }
}

function availableReducer(state= INITIAL_STATE, action: ActionAvailablePokemon) {
    switch(action.type){
        case 'SET_AVAILABLE':
            return {...state, availablePokemon: action.available}
        default:
            return state
    }
}

const rootReducer = combineReducers({
    favoriteReducer,
    currentReducer,
    availableReducer
})

const storeSaved = createStore(rootReducer)

export default storeSaved