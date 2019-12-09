import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";
import Itinerary from "./itinerary"
import {connect} from "react-redux"

class Itineraries extends Component {


async componentDidMount(){
  const res = await axios.get("http://localhost:4000/api/itineraries");
  this.props.traerIntinerario(res.data.respuesta) //despacha una accion que complete datos de la api
  //this.setState({listaPaises:res.data.respuesta});
}


render(){
  return(
    <div>
      { <ul>
        {this.props.lista_intinerario.map((elem, i) => { return <Itinerary key={i} id ={i} 
        titulo={elem.titulo} rating = {elem.rating} duration = {elem.duration} hashtags={elem.hashtags}/>})}
      </ul>}
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    traerIntinerario: (titulo) => {
      dispatch({type: 'GET_INTINERARIO',payload: titulo})
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
