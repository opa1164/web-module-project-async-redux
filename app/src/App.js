import logo from './logo.svg';
import './App.css';
import Joke from './Components/Joke.js';
import { fetchData } from './store/actions';
import { connect } from "react-redux"

function App(props) {

  
  console.log(props.fetchData)
  return (
    <div className="App">
      <Joke />
      <button onClick = {() => props.fetchData()}>New Joke</button>
    </div>
  );
}

export default connect(null, { fetchData })(App);
