//! ------------------------- [ Reducers ] ----------------------------------

export const mainReducer = (state, action) => {
    switch (action.type) {
        case "Filters":
            return {...state, filters: {...state.filters, [action.name]: action.value}}
        case "Reset":
            return {...state, filters : {
                name: "",
                status: "",
                species: "",
                gender: ""
            }}
        default:
            return state
    }
}

//* -------------------------- [ Contexts ] ----------------------------------

import {createContext} from 'react';

export const mainContext = createContext()

