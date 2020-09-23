import React from 'react'

import { useSelector } from 'react-redux'

function DisplayPokemons() {

    const pokemons = useSelector((state: any) => state.favoriteReducer.favoritePokemon)

    return (
        <>
            <h1>Pokemons favoritos</h1>
            <ul>
                {pokemons.map((pokemon: string, index: number) => <li key={`${pokemon}${index}`}>{pokemon}</li>)}
            </ul>
        </>
    )
}

export default DisplayPokemons