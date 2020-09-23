import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import getAPI from '../../Repositories/GetAPI'
import ActionAvailablePokemon from '../../interfaces/ActionAvailablePokemon'

const Datalist: React.FC = () => {

    const available = useSelector((state: any) => state.availableReducer.availablePokemon)
    const dispatch = useDispatch()

    useEffect(
        ()=>{
            function setAvailable(): any {
                let toAdd: string[] = []
                getAPI('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
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

    return(
        <datalist id='available_pokemons'>
            {available?.map((pokemon: string, index: number) => {return <option key={`${pokemon}${index}`} value={pokemon} />})}
        </datalist>
    )
}

export default Datalist