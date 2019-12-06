import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";
import City from "./city"
import {connect} from "react-redux"

class Cities extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   listaPaises: []
    // } //Saco el estado para usar redux, ya no va a tener estado propio
  }

async componentDidMount(){
  const res = await axios.get("http://localhost:4000/api/cities");
  this.props.rellenarCiudades(res.data.respuesta) //despacha una accion que complete datos de la api
  //this.setState({listaPaises:res.data.respuesta});

}

  // borrarCiudad = async(e)=>{
  //   let id_borrar = e.target.id
  //   this.props.borrarCiudad(id_borrar)
  // }


render(){
  console.log(this.props.lista_ciudades)
  return(
    <div>
    
      { <ul>
        {this.props.lista_ciudades.map((elem, i) => { return <City key={i} id ={i} pais={elem.pais} ciudad={elem.ciudad}
        /* borrarCiudad={this.borrarCiudad}*//>})}
      </ul>} {/*El componente City es un componentente funcional: no tienen estado, pero pueden recibir props  */}

       
    </div>
    
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    rellenarCiudades:(infoDelaApi) =>{
      dispatch({type: 'GET_CIUDADES', payload: infoDelaApi})
    },
    borrarCiudad: (id_a_borrar) => {
      dispatch({type: 'BORRAR_CIUDADES',payload: id_a_borrar})
    }
  }
}

//esta funcion trae como prop el estado del store
const mapStateToProps = (state) => {
  return{
    lista_ciudades: state.listaPaises
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
