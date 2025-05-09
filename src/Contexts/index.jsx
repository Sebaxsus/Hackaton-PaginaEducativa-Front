import { createContext, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const GlobalContext = createContext(null);

//* Ignore the QueryClient its functionality is so Breaks
const GlobalQuery = new QueryClient();

export const useGlobalContext = () => useContext(GlobalContext());

const MainContext = ({ children }) => {
  //TODO: Import a Data to make a Values
  return (
    <GlobalContext.Provider
    // value={}
    >
      <QueryClientProvider client={GlobalQuery}>{children}</QueryClientProvider>
    </GlobalContext.Provider>
  );
};

export default MainContext;
