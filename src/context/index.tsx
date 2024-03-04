import React, { createContext } from "react";
import Loading from "../components/Loading";

type TContext = {
  loading: boolean;
  setLoading(boolean: boolean): void;
};

type TProvider = {
  children?: React.ReactNode;
};

const initialContext = {
  loading: false,
  setLoading: () => {},
};

const Context = createContext<TContext>(initialContext);

export const ContextProvider = (props: TProvider) => {
  const { children } = props;
  
  const [loading, setLoading] = React.useState(false);

  return (
    <Context.Provider value={{ loading, setLoading }}>
      <div>
        {children}
        {loading && <Loading />}
      </div>
    </Context.Provider>
  );
};

export const useUtilContext = (): TContext => React.useContext(Context);
