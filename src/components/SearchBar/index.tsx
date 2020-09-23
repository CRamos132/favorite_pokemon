import React from 'react'
import ActionSavePokemon from '../../interfaces/ActionSavePokemon'
import { SaveActionTypes } from '../../enums/SaveActionTypes'
import { useDispatch, useSelector } from 'react-redux'
import ActionCurrentPokemon from '../../interfaces/ActionCurrentPokemon'
import styled from 'styled-components'

const Input = styled.input`
    width: 75%;
    padding: 1vh 1vw;
    border-radius: 5px;
    border: solid;
    border-color: gray;
    border-width: 1px;  
`;
const Button = styled.button`
    padding: 1vh 1vw;
    border-radius: 5px;
    border: solid;
    border-color: black;
    border-width: 1px;
    @media (max-width: 768px) {
        width: 75%;
    }
    transition: .3s;
    &:hover {
        color: #DEDEDE;
        background-color: black;
    };
`;

const SearchBar:React.FC = () => {

    const name = useSelector((state: any) => state.currentReducer.currentPokemon)
    const dispatch = useDispatch()
    function addPokemon(){
        const action: ActionSavePokemon = { type: SaveActionTypes.ADD, title: name}
        dispatch(action)
        const secondAction: ActionCurrentPokemon = { type: 'UPDATE_POKEMON', name: ''}
        dispatch(secondAction)
    }
    
    function attPokemon(e: React.ChangeEvent<HTMLInputElement>){
        const name = e.target.value
        const action: ActionCurrentPokemon = { type: 'UPDATE_POKEMON', name: name}
        dispatch(action)
    }

    return (
        <>
            <Input value={name} list='available_pokemons' placeholder='Choose a pokemon' type='text' onChange={attPokemon}/>
            <Button type='button' onClick={addPokemon}>
                Add Pokemon
            </Button>
        </>
        )
}

export default SearchBar