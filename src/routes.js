import Home from "./Components/Templates/Home/Home";
import RecipeForm from "./Components/Templates/RecipeForm/RecipeForm";

const routes = [
  {
    path: "/Acasă",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Adaugă rețetă",
    element: <RecipeForm />,
  },
];
export default routes;
