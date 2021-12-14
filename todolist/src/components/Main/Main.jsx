import React, { Component } from "react";
import Works from "../Works/Works";
import {Routes, Route} from 'react-router-dom';
import Home from '../Home/Home'
import Weather from '../Weather/Weather'

export class Main extends Component {
  render() {
    return(
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/todo" element={<Works/>}/>
          <Route path="/weather" element={<Weather/>}/>
        </Routes>
      </main>
    )
  }
}

export default Main;
