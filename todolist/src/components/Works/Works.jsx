import React, { Component } from "react";
import Work from "../Work/Work";
import data from "../../data";

class Works extends Component {
  constructor(props){
    super(props)

    this.state = {
      lastAdded: {},
      workList: data
    }
  }

  createWork = (title, day) => {
    const newWork = {title, day};
    this.setState({ lastAdded: newWork})
    this.setState({workList: [...this.state.workList, newWork]})
  }

  resetList = () => {
    return this.setState({workList: data})
  }

  paintWorks = () =>{
    return this.state.workList.map((work, i) => <Work info={work} delete={()=>this.deleteWork(i)} key={i}/>)
  }

  deleteAllWorks = (i) => {this.setState({workList: []})}

  deleteWork = (i) => {
    const works = this.state.workList.filter((work, j)=>j!==i)
    this.setState({workList:works})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value
    const day = event.target.elements.day.value
    this.createWork(title, day)
  }
    
  render() {

    const title = this.state.lastAdded.title
    return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Tarea:</label><br/>
              <input type="text" id="title" name="title"/><br/>
              <label htmlFor="day">Día:</label><br/>
              <input type="text" id="day" name="day"/>
              <input type="submit"/>
            </form>
            {this.paintWorks()}

            <button onClick={this.createWork}>Crear tarea</button>
            <button onClick={this.deleteAllWorks}>Borrar todo</button>
            <button onClick={this.resetList}>Reset</button>
            <h5>Última tarea añadida: {title}</h5>
          </div>
          )
  }
}

export default Works;
