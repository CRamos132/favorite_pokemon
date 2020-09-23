import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import getAPI from '../../Repositories/GetAPI'

const Container = styled.div`
    width: 25vw;
    height: 25vw;
    background-color: rgb(192, 189, 189);
    flex: 1 0 45%;
    border-radius: 10px;
    margin: 5px;
    @media (max-width: 768px) {
        flex: 1 0 95%;
    }
`;

const Image = styled.img`
    height: 15vw;
    width: auto;
`;

const Title = styled.a`
    display: block;
    margin-top: 1vh;
    font-weight: bold;
    text-transform: capitalize;
`;

const Miniature: React.FC<{name: string, key: string}> = ({name}) => {
    const [ image, setImage ] = useState<string>()
    useEffect(()=>{
        function getImage(pokemon: string){
            getAPI(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLocaleLowerCase()}`)
                .then((res: {sprites: {front_default: string}}) => {
                    setImage(res.sprites.front_default)
                })
                .catch((res: Promise<Response>) => {
                    setImage('https://img.pokemondb.net/sprites/black-white/normal/unown-qm.png')
                })
        }
        getImage(name)
    })

    return(
        <Container>
            <Image src={image} alt={name}/>
            <Title>{name}</Title>
        </Container>
    )
}

export default Miniature