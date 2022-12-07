import { React, Component } from "react";
import { Cards } from "./../components/principal/cards/Cards.js";

export default class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = { proveedores: [] };
  }
  render() {
    return (
      <div>
        <main>
          {/* <Cards /> */}
        </main>
      </div>
    );
  }
}
