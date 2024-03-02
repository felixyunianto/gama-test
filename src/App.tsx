import { useLocation } from "react-router-dom";
import "./App.css";
import Routers from "./routers";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence>
      <Routers />
    </AnimatePresence>
  );
}

export default App;
