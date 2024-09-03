import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {StoreProvider} from "./store/StoreProvider";
import UsersInfo from "./components/UsersInfo/UsersInfo";

import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <UsersInfo />
    </StoreProvider>
  </StrictMode>,
);
