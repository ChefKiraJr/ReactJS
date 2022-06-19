import logo from './logo.svg';
import './App.css';
import Head from './component/Head';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Head person="Enemy" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Card person="Friend" name="Rafi Naufal" job="FrontEnd Dev" />
      </header>
    </div>
  );
}

export default App;
