import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/todo'>Tareas</Link></li>
        <li><Link to='/weather'>Tiempo</Link></li>
      </ul>
    </nav>
  }
}

export default Nav;
