import React, { Component } from "react";
import Works from "../Works/Works";

export class Main extends Component {
  render() {
    return(
      <main>
        <h1>Lista de tareas</h1>
        <p>Todo esto lo tengo que hacer prontito</p>
        <Works/>
      </main>
    )
  }
}

export default Main;
