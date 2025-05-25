import logo from './logo.svg';
import './App.css';
import MyFirstComponemt from './MyFirstComponemt'
import Article from './Article';

function App() {
  const FirstArticle=`hi this is the first
  trtrtryyty`
   const SecondArticle=`hi this is the SecondArticle
  trtrtryyty`
    const ThirdArticle=`hi this is the ThirdArticle`
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
        <Article content={FirstArticle}name="Ahmed"email="Ahmed@gmail.com"address="Gaza"/>
        <Article content={SecondArticle}name="Rami"email="Rami@gmail.com"address="Hebron"/>
        <Article content={ThirdArticle}name="Heno"email="Heno@gmail.com"address="Amman"/>

        <Article  content={ThirdArticle}name="Heno"email="Heno@gmail.com"address="Amman">
            <div style={{background:"teal"}}>
              <h2>
                Hello world
              </h2>
              <p style={{background:"orange"}}>
                dfmdfkljtiyisfklmkslejtrjgkdfmhkfjhkfg
              </p>
            </div>
        </Article>
        <Article name="Heno"email="Heno@gmail.com"address="Amman"/>
      </header>
    </div>
  );
}



export default App;
