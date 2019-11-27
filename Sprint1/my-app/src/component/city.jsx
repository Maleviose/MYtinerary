import React, { Component } from "react";
import axios from "axios"
import "../assets/css/App.css";

export default class City extends Component {
state={listaPaises:[]}

async componentDidMount(){
  const res = await axios.get("http://localhost:4000/api/cities");
  this.setState({listaPaises:res.data.respuesta});
}

render(){
  return(
    <div>
    
      { <ul>
      {this.state.listaPaises.map((elem, i)=>{return<button><li key={i}>{elem.pais}{" - "}{elem.ciudad}</li></button>})}
      </ul>}

       
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
