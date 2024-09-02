import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./main.css";
import {StoreProvider} from "./store/StoreProvider";
import {useGetUsersQuery} from "./store/slices/usersApiSlice";

function TestComponent() {
  const {data: users} = useGetUsersQuery();
  console.log(users);

  return <div>Test</div>;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider>
      <TestComponent />
    </StoreProvider>
  </StrictMode>,
);
