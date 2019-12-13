import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";
import Itinerary from "./itinerary"
import {connect} from "react-redux"

class Itineraries extends Component {


async componentDidMount(){
  let cityId = this.props.cityId;
  const res = await axios.get("http://localhost:4000/api/itineraries/"+cityId);
  this.props.traerIntinerario(res.data.respuesta) //despacha una accion que complete datos de la api
  //this.setState({listaPaises:res.data.respuesta});
}

filtrarItinerario = (it) =>{
  let idCiudad = it.target.cityId
  this.props.traerItinerarioPorCiudad(idCiudad)
  
}

render(){
  return(
    <div>
      { <ul>
        {this.props.lista_intinerario.map((elem, i) => { return <Itinerary key={i} id ={i} 
        titulo={elem.titulo} rating = {elem.rating} duration = {elem.duration} hashtags={elem.hashtags}
        filtrarItinerario={elem.cityId}/>})}
      </ul>}
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    traerIntinerario: (info) => {
      dispatch({type: 'GET_INTINERARIO',payload: info})
    },
    traerItinerarioPorCiudad: (itinerario)=>{
      dispatch({type: 'FILTRAR_INTINERARIO', payload:itinerario})
    }
  }
}

//esta funcion trae como prop el estado del store
const mapStateToProps = (state) => {
  return{
    lista_intinerario: state.listaIntinerario
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)
