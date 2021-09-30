
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home';
import data from './resources/data.json'
import CharacterDetail from './components/characterDetail/characterDetail';
import CharacterDetail2 from './components/characterDetail/characterDetail2'
import About from './components/about/about';

import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navbar ></Navbar>

        <Switch>
          <Route exact path="/">
                      <Home charateris={data.Characters}></Home>
          </Route>
          <Route exact path="/characterDetail">
                      <CharacterDetail charateris={data.Characters}></CharacterDetail>
          </Route>
          <Route exact path="/characterDetail/:id">
                      <CharacterDetail2 charateris={data.Characters}></CharacterDetail2>
          </Route>
          <Route exact path="/about">
                      <About></About>
          </Route>
        </Switch>
      


      
    </div>
  );
}

export default App;
