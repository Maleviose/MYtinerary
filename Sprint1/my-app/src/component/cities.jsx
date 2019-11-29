import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";
import City from "./city"

export default class Cities extends Component {
  constructor(props){
    super(props)
    this.state = {
      listaPaises: []
    }
  }

async componentDidMount(){
  const res = await axios.get("http://localhost:4000/api/cities");
  this.setState({listaPaises:res.data.respuesta});
}

  borrarCiudad = async(e)=>{
    console.log(e.target)
  let id_borrar = e.target.id
  let nuevas_ciudades= this.state.listaPaises.filter(nueva =>{
    
    return nueva.key !== 0
  })
  await this.setState({listaPaises: nuevas_ciudades})
  
  console.log("hciste clic en "+ id_borrar)
}

render(){
  console.log(this.state.listaPaises)
  return(
    <div>
    
      { <ul>
        {this.state.listaPaises.map((elem, i) => { return <City key={i} id ={i} pais={elem.pais} ciudad={elem.ciudad}
        borrarCiudad={this.borrarCiudad}/>})}
      </ul>} {/*El componente City es un componentente funcional: no tienen estado, pero pueden recibir props  */}

       
    </div>
    
  );
}
}

// fetch("http://localhost:4000/api/cities", {
//         method: "GET", //estructura del JSON
//       }).then(function (response) { //Una vez que termine esto hace esto
//         if (response.ok)
//             return response.json();
//         throw new Error(response.statusText);
//       }).then(function (json) {
//        console.log(json);
//         data = json.respuesta;
//         PasandoAlista(data)
//       })


//       function PasandoAlista(cosas) {
//         let res = [];
//         for(let i =0; i<cosas.length; i++){
//           res.push(<li>+cosas[i].ciudad + " " +cosas[i].pais + </li>);
//           }
//           return <ul>res</ul>;
//         }
        
// console.log(data)
// export default class City extends Component {
//   render() {
//     return (
//         <div></div>
//     );
//   }
// }
