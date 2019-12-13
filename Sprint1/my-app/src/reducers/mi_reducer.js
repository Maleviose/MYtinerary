const initialState = {
    listaPaises: [],
    listaIntinerario: []
}
const mi_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CIUDADES':
            return {...state, listaPaises: [...action.payload] }
        case 'GET_INTINERARIO':
            return {...state, listaIntinerario: [...action.payload] }
        case 'FILTRAR_INTINERARIO':
            let res = state.elem.filter(elem => {
                return elem.cityId = action.payload
            })
            return {...state, elem: [...res] }
        default:
            return state

    }
}

export default mi_reducer