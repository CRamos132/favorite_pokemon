import React from 'react'
import ActionSavePokemon from '../../interfaces/ActionSavePokemon'
import { SaveActionTypes } from '../../enums/SaveActionTypes'
import { useDispatch, useSelector } from 'react-redux'
import ActionCurrentPokemon from '../../interfaces/ActionCurrentPokemon'

const SearchBar:React.FC = () => {


    const name = useSelector((state: any) => state.currentReducer.currentPokemon)
    const dispatch = useDispatch()
    function addPokemon(){
        const action: ActionSavePokemon = { type: SaveActionTypes.ADD, title: name}
        dispatch(action)
    }
    
    function attPokemon(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.value
        const action: ActionCurrentPokemon = { type: 'UPDATE_POKEMON', name: name}
        dispatch(action)
    }

    return (
        <>
            <h3>Adicionar aos favoritos: {name}</h3>
            <input value={name} list='available_pokemons' placeholder='Choose a pokemon' type='text' onChange={attPokemon}/>
            <button type='button' onClick={addPokemon}>
                Add Pokemon
            </button>
        </>
        )
}

export default SearchBar