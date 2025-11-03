import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import RecipeCard from "./Components/RecipeCard/RecipeCard";

// Main function of the application that renders everything
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <RecipeCard></RecipeCard>
    </div>
  );
}

export default App;
