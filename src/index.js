import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BookContextProvider } from "./BookContext";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </StrictMode>
);
