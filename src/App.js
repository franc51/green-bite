import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import Navigation from "./Components/Organisms/Navigation/Navigation";
import Home from "./Components/Templates/Home/Home";

function AppRoutes() {
  const element = useRoutes(routes); // dynamically build routes from routes.js
  return element;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation /> {/* static navigation */}
        <AppRoutes /> {/* dynamic page content from routes.js */}
      </div>
    </BrowserRouter>
  );
}

export default App;
