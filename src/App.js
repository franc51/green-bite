import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import RecipeForm from "./Components/RecipeForm/RecipeForm";

// Main function of the application that renders everything
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <RecipeForm></RecipeForm>
    </div>
  );
}

export default App;
