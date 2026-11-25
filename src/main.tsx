import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.tsx";
import "./index.css";

const redirect = sessionStorage.redirect;

if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

const root = document.getElementById("root")!;
const initialPage = { pathname: window.location.pathname, html: root.innerHTML };

createRoot(root).render(
  <HelmetProvider>
    <App initialPage={initialPage} />
  </HelmetProvider>
);

