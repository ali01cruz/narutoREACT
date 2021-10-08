
import './App.css';
import NavbarM from './components/navbar/navbar.jsx';
import Home from './components/home/home';
import data from './resources/data.json'
import CharacterDetail from './components/characterDetail/characterDetail';
import CharacterDetail2 from './components/characterDetail/characterDetail2'
import About from './components/about/about';
import { useEffect } from "react";
import {Switch,Route} from "react-router-dom";
import { useState } from 'react';



function App() {
  const [datos,setDatos] = useState(data.Characters);
  useEffect( ()=> {
    console.log("App Montada")
    setDatos(data.Characters);
  },[])
  return (
    <div className="App">
        <NavbarM ></NavbarM>

        <Switch>
          <Route exact path="/" >
                      <Home charateris={datos}></Home>
          </Route>
          <Route exact path="/characterDetail">
                      <CharacterDetail charateris={datos}></CharacterDetail>
          </Route>
          <Route exact path="/characterDetail/:id">
                      <CharacterDetail2 charateris={datos}></CharacterDetail2>
          </Route>
          <Route exact path="/about">
                      <About></About>
          </Route>

          <Route>
              <h1> PAG NOT FOUND 404</h1>
          </Route>

        </Switch>
      


      
    </div>
  );
}

export default App;
