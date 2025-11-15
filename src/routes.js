import Home from "./Components/Templates/Home/Home";
import RecipeForm from "./Components/Templates/RecipeForm/RecipeForm";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adauga-reteta",
    element: <RecipeForm />,
  },
];
export default routes;
