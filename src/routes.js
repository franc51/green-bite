import Home from "./Components/Templates/Home/Home";
import RecipeForm from "./Components/Templates/RecipeForm/RecipeForm";
import RecipeList from "./Components/Templates/RecipeList/RecipeList";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/retete",
    element: <RecipeList />,
  },
  {
    path: "/adauga-reteta",
    element: <RecipeForm />,
  },
];
export default routes;
