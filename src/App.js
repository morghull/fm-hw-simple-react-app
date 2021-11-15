import logo from './logo.svg';
import './App.css';
import SimpleLink from './components/SimpleLink';

function App() {
  return (
    <div className="App">
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
        <SimpleLink
          className="simpleLink"
          href="https://reactjs.org/docs/create-a-new-react-app.html"
          target="_blank"
          linkText="Create a New React App!"
        />
      </header>
    </div>
  );
}

export default App;
