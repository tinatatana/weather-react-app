import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Kristina Poliukkhovych and is{" "}
          <a href="https://github.com/tinatatana/weather-react">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
