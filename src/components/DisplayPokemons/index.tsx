import React from 'react'

import { useSelector } from 'react-redux'
import Miniature from '../Miniature'
import styled from 'styled-components'

const MiniContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const DisplayPokemons: React.FC = () => {

    const pokemons = useSelector((state: any) => state.favoriteReducer.favoritePokemon)

    return (
        <>
            <h1>Favorite Pokémon</h1>
            <MiniContainer>
                {pokemons.map((pokemon: string, index: number) => <Miniature key={`${pokemon}${index}`} name={pokemon} />)}
            </MiniContainer>
        </>
    )
}

export default DisplayPokemons