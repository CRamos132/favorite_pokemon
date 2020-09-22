import { SaveActionTypes } from '../enums/SaveActionTypes'

export default interface ActionSavePokemon {
    type: SaveActionTypes,
    title: string
}
