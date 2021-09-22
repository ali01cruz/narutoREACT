import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home';
import data from './resources/data.json'
function App() {
  return (
    <div className="App">
      <Navbar ></Navbar>
      <Home charateris={data.Characters}></Home>
      
    </div>
  );
}

export default App;
