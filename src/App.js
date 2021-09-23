
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home';
import data from './resources/data.json'
import CharacterDetail from './components/characterDetail/characterDetail';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Home charateris={data.Characters}></Home>
      <CharacterDetail charateris={data.Characters}></CharacterDetail>
      <About></About>
    </div>
  );
}

export default App;
