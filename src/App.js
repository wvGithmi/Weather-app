import './App.css';

const api = {
  key: "f18d07f5dcd06b3e089674f1f7bf49a0",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main> 
    </div>
  );
}

export default App;
