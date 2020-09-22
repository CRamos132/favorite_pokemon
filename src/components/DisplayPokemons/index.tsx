import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import ActionSavePokemon from '../../interfaces/ActionSavePokemon'
import { SaveActionTypes } from '../../enums/SaveActionTypes'
import ActionCurrentPokemon from '../../interfaces/ActionCurrentPokemon'
import getAPI from '../../Repositories/GetAPI'
import ActionAvailablePokemon from '../../interfaces/ActionAvailablePokemon'

function DisplayPokemons() {

    const pokemons = useSelector((state: any) => state.favoriteReducer.favoritePokemon)
    const name = useSelector((state: any) => state.currentReducer.currentPokemon)
    const available = useSelector((state: any) => state.availableReducer.availablePokemon)
    const dispatch = useDispatch()

    useEffect(
        ()=>{
            function setAvailable(): any {
                let toAdd: string[] = []
                getAPI(' https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
                    .then((res: any) => {
                        const response = res.results
                        response.forEach((name: any) => {toAdd.push(name.name)})
                        const action: ActionAvailablePokemon = { type: 'SET_AVAILABLE', available: toAdd}
                        dispatch(action)
                    })
                    .catch(err => {
                        toAdd = ['Não foi possível obter sugestões']
                        const action: ActionAvailablePokemon = { type: 'SET_AVAILABLE', available: toAdd}
                        dispatch(action)
                    })
            }
            setAvailable()
        }, [dispatch]
    )

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
            <h1>Pokemons favoritos</h1>
            <ul>
                {pokemons.map((pokemon: string, index: number) => <li key={`${pokemon}${index}`}>{pokemon}</li>)}
            </ul>
            <h3>Adicionar aos favoritos: {name}</h3>
            <input value={name} list='available_pokemons' placeholder='Choose a pokemon' type='text' onChange={attPokemon}/>
            <button type='button' onClick={addPokemon}>
                Add Pokemon
            </button>
            <datalist id='available_pokemons'>
                {available?.map((pokemon: string, index: number) => {return <option key={`${pokemon}${index}`} value={pokemon}>{pokemon}</option>})}
            </datalist>
        </>
    )
}

export default DisplayPokemons