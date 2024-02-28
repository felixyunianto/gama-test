import "./App.css";
import Routers from "./routers";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Routers />
    </AnimatePresence>
  );
}

export default App;
