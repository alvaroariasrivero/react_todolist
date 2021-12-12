import React, { Component } from "react";

class Work extends Component {

  constructor(props){
    super(props)
  }
  render() {
    const{title, day} = this.props.info
    return (
        <div>
          <p>Tarea: {title}........................Día: {day}</p>
          <button onClick={this.props.delete}>Borrar Tarea</button>
        </div>)
  }
}

export default Work;
