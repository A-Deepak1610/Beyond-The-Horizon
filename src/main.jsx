import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1042327815610-en95ddri6adoqha1p12ftqn6aafp8ahg.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    
  </StrictMode>
);
