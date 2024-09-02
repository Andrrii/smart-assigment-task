import {createReduxStore} from "./store";
import {Provider} from "react-redux";

interface StoreProviderProps {
  children?: JSX.Element;
}

export const StoreProvider = ({children}: StoreProviderProps) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
