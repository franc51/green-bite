import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import Navigation from "./Components/Organisms/Navigation/Navigation";
import Footer from "./Components/Organisms/Footer/Footer";

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
      <Footer /> {/* static footer */}
    </BrowserRouter>
  );
}

export default App;
