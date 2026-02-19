import PlantPage from "./components/PlantPage";

function App() {
  return (
    <div className="app">
      <header>
        <h1>
          Plantsy
          <span className="logo" role="img">
            🌱
          </span>
        </h1>
      </header>
      <PlantPage />
    </div>
  );
}

export default App;
