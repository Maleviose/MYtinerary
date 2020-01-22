const initialState = {
    listaPaises: []
}
const mi_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CIUDADES':
            return {...state, listaPaises: [...action.payload] }
        default:
            return state

    }
}

export default mi_reducer