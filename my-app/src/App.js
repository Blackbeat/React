import logo from './logo.svg';
import './App.css';
import { Clock } from './components/Clock';

const element = <div>This is JSX</div>;
function Greeting(props){
  return (
    <div>
      <h1>Hello~~ {props.name}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello React!
          <Clock/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
