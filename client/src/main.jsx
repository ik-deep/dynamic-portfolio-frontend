import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/Authcontext.jsx";

createRoot(document.getElementById("root"))
.render(// Less flexible, harder to manage
<AuthProvider>
  <App />
</AuthProvider>
);
