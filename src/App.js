import "./App.css";
import Home from "./Components/Templates/Home/Home";
import Navigation from "./Components/Organisms/Navigation/Navigation";

// Main function of the application that renders everything
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Home></Home>
    </div>
  );
}

export default App;
