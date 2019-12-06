import React from "react"

// notar que no es una clase, por lo que no se usa this. que es una nocion de clase
const City = (props) => {
    return <li>{props.id}. {props.pais} - {props.ciudad}
        {/* <button onClick={props.borrarCiudad} id={props.id}>Borrar</button>*/}</li>
}

export default City