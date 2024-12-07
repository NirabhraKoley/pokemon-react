import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./components/AppLayout";
import { getApiData } from "./api/GetApiData";
import { PokemonApi } from "./components/pages/PokemonApi";
import { Error } from "./components/pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <PokemonApi />,
          loader: getApiData
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
