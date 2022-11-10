// Import Styles
import "../css/styles.css";
// Import Components
// Import Pages
import Home from "./../pages/Home";
// Import dependencies
import { Routes, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
