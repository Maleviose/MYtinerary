const initialState = {
    listaPaises: [],
    listaIntinerario: []
}
const mi_reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_CIUDADES':
            return {...state, listaPaises: [... action.payload]}
        case 'GET_INTINERARIO':
            return {...state, listaIntinerario: [... action.payload]}
        default:
            return state
            
    }
}

export default mi_reducer