import React from "react"

// notar que no es una clase, por lo que no se usa this. que es una nocion de clase
const Itinerary = (props) => {
    return <li> {props.titulo} - {props.rating} - {props.duration} - {props.hashtags}
        {/* <button onClick={props.borrarCiudad} id={props.id}>Borrar</button>*/}</li>
}

export default Itinerary