import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {StoreProvider} from "./store/StoreProvider";

import "./main.css";
import Monitor from "./components/Monitor";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <Monitor />
    </StoreProvider>
  </StrictMode>,
);
