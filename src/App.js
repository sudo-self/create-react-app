import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1 className="text-5xl font-bold mb-6">Welcome to React!</h1>
        <p className="text-xl mb-6">
        <code className="bg-yellow-400 text-black px-2 py-1 rounded">npx create-react-app AppName</code>
        </p>
        <a
          className="App-link text-lg font-semibold hover:text-yellow-400 transition-all"
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



