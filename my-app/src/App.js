/*import logo from './logo.svg';*/
import Header from './component/headers';
import FormComponent from './component/form';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header course="Tel335" detail="Diseño e Implementación de App web y Mobiles"/>
      <FormComponent />
    </div>
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>*/
  );
}

export default App;
