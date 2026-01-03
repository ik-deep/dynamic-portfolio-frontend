import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

const App = () => (
  <RouterProvider router={router} />
);

export default App;