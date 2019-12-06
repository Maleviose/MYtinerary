const initialState = {
    listaPaises: []
}
const mi_reducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'GET_CIUDADES':
            return {...state, listaPaises: [... action.payload]}
        // case 'BORRAR_CIUDADES':
        //     let nuevas_ciudades= state.listaPaises.filter(nueva =>{
        //         return nueva.id !== id_borrar
        //     })
        default:
            return state
            
    }
}

export default mi_reducer