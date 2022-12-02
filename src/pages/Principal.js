import { React, Component } from "react";
import { Cards } from "./../components/principal/cards/Cards.js";

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = { proveedores: [] };
    this.state = { clientes: [] };
  }
  render() {
    return (
      <>
          <div className="fondo">
          <br />
          <br />
          <h2 className="titulo1">Explora</h2>
        
          <br />
          <hr />
          <Cards />
          
          </div>
      </>
    );
  }
}
