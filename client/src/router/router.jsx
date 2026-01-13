import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index.jsx";
import NotFound from "../pages/NotFound.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

export default router;