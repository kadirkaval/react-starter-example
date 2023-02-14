import './App.css';

function App() {
  return (
    <div className="App">
     <p>Test</p>
     <p>
     {
        process.env.REACT_APP_API_URL
      }
     </p>
    </div>
  );
}

export default App;
