import logo from './logo.svg';
import './App.css';
import MyFirstComponemt from './MyFirstComponemt'

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <MyFirstComponemt/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to refresh.
        </p>
        <h1>Heno th best and pretty girl in the world</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyFirstComponemt/>
      </header>
    </div>
  );
}



export default App;
