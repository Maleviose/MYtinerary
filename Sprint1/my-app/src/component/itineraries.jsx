import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";
import Itinerary from "./itinerary"


class Itineraries extends Component {
  state = {
    itinerariosDeLaCiudad: []
  }

async componentDidMount(){
  let cityId = this.props.cityId;
  const res = await axios.get("http://localhost:4000/api/itineraries/"+cityId);
  let elem = res.data.respuesta
  this.setState({itinerariosDeLaCiudad: elem})
}

render(){
  return(
    <div>
      { <ul>
        {this.state.itinerariosDeLaCiudad.map((elem, i) => { return <Itinerary key={i} id ={i} 
        titulo={elem.titulo} rating = {elem.rating} duration = {elem.duration} hashtags={elem.hashtags}
        filtrarItinerario={elem.cityId}/>})}
      </ul>}
    </div>
  );
}
}

export default Itineraries
