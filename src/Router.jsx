import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from "./Home";
import Posts from "./Posts";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "posts/",
      element: <Posts />,
    }
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
