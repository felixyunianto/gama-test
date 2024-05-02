import { useLocation } from "react-router-dom";
import "./App.css";
import Routers from "./routers";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ContextProvider } from "./context";


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence>
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </AnimatePresence>
  );
}

export default App;
